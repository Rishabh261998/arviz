#!/usr/bin/env bash

set -ex # fail on first error, print commands

command -v conda >/dev/null 2>&1 || {
  echo "Requires conda but it is not installed.  Run install_miniconda.sh." >&2;
  exit 1;
}

# if no python specified, use Travis version, or else 3.9
PYTHON_VERSION=${PYTHON_VERSION:-${CI_PYTHON_VERSION:-3.9}}
PYSTAN_VERSION=${PYSTAN_VERSION:-latest}
PYTORCH_VERSION=${PYTORCH_VERSION:-latest}
PYRO_VERSION=${PYRO_VERSION:-latest}
EMCEE_VERSION=${EMCEE_VERSION:-latest}
TF_VERSION=${TF_VERSION:-latest}
PYMC3_VERSION=${PYMC3_VERSION:-latest}

# Update Conda to include latest build channels
conda update conda
conda update setuptools

if [[ $* != *--global* ]]; then
    ENVNAME="testenv_${PYTHON_VERSION}_PYSTAN_${PYSTAN_VERSION}_PYRO_${PYRO_VERSION}_EMCEE_${EMCEE_VERSION}_TF_${TF_VERSION}"

    if conda env list | grep -q ${ENVNAME}
    then
        echo "Environment ${ENVNAME} already exists, keeping up to date"
    else
        echo "Creating environment ${ENVNAME}"
        conda create -n ${ENVNAME} --yes pip python=${PYTHON_VERSION}
    fi

    # Activate environment immediately
    source activate ${ENVNAME}

    if [ "$DOCKER_BUILD" = true ] ; then
        # Also add it to root bash settings to set default if used later

        echo "Creating .bashrc profile for docker image"
        echo "set conda_env=${ENVNAME}" > /root/activate_conda.sh
        echo "source activate ${ENVNAME}" >> /root/activate_conda.sh


    fi
fi


# Install ArviZ dependencies
pip install --upgrade pip wheel

# Pyro install with pip is ~511MB. These binaries are ~91MB, somehow, and do not
# break the build. The link can be determined from the pytorch and the python version
if [ "$PYTORCH_VERSION" = "latest" ]; then
    pip --no-cache-dir install torch torchvision -f https://download.pytorch.org/whl/cpu/torch_stable.html
else
    pip --no-cache-dir install torch==${PYTORCH_VERSION} torchvision -f https://download.pytorch.org/whl/cpu/torch_stable.html
fi

if [ "$PYSTAN_VERSION" = "latest" ]; then
  pip --no-cache-dir install numpy cython
  pip --no-cache-dir install pystan
else
  if [ "$PYSTAN_VERSION" = "preview" ]; then
    # try to skip other pre-releases than pystan
    pip --no-cache-dir install httpstan
    pip --no-cache-dir install --pre pystan
  else
    pip --no-cache-dir install numpy cython
    pip --no-cache-dir install pystan==${PYSTAN_VERSION}
  fi
fi

if [ "$PYRO_VERSION" = "latest" ]; then
  pip --no-cache-dir install pyro-ppl
else
  pip --no-cache-dir install pyro-ppl==${PYRO_VERSION}
fi

if [ "$EMCEE_VERSION" = "latest" ]; then
  pip --no-cache-dir install emcee
else
  pip --no-cache-dir install "emcee<3"
fi

if [ "$TF_VERSION" = "latest" ]; then
  pip --no-cache-dir install tensorflow
else
  pip --no-cache-dir install tensorflow==1.14 tensorflow_probability==0.7
fi

if [ "$PYMC3_VERSION" = "latest" ]; then
  pip --no-cache-dir install git+https://github.com/pymc-devs/pymc3
else
  pip --no-cache-dir install pymc3==${PYMC3_VERSION}
fi


pip install --no-cache-dir -r requirements.txt
pip install --no-cache-dir -r requirements-dev.txt
pip install --no-cache-dir -r requirements-docs.txt
pip install --no-cache-dir -r requirements-external.txt
pip install --no-cache-dir -r requirements-optional.txt


conda install -y geckodriver firefox jupyterlab ipywidgets nodejs --channel conda-forge

jupyter nbextension enable --py widgetsnbextension
jupyter labextension install @jupyter-widgets/jupyterlab-manager
