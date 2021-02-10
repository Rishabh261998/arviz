(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("3ec7b009-69cc-4390-a3ea-ac9ab109f37b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3ec7b009-69cc-4390-a3ea-ac9ab109f37b' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"3366c906-64f7-4d7e-b8ff-697d39d3ae65":{"roots":{"references":[{"attributes":{"axis":{"id":"17577"},"ticker":null},"id":"17580","type":"Grid"},{"attributes":{},"id":"17620","type":"Selection"},{"attributes":{"below":[{"id":"17577"}],"center":[{"id":"17580"},{"id":"17584"}],"left":[{"id":"17581"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17607"},{"id":"17609"}],"title":{"id":"17610"},"toolbar":{"id":"17595"},"toolbar_location":null,"x_range":{"id":"17569"},"x_scale":{"id":"17573"},"y_range":{"id":"17571"},"y_scale":{"id":"17575"}},"id":"17568","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"17592","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17606","type":"Circle"},{"attributes":{"overlay":{"id":"17594"}},"id":"17589","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"17623"},"toolbar_location":"above"},"id":"17624","type":"ToolbarBox"},{"attributes":{"children":[{"id":"17624"},{"id":"17622"}]},"id":"17625","type":"Column"},{"attributes":{},"id":"17585","type":"ResetTool"},{"attributes":{},"id":"17586","type":"PanTool"},{"attributes":{"data_source":{"id":"17604"},"glyph":{"id":"17605"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17606"},"selection_glyph":null,"view":{"id":"17608"}},"id":"17607","type":"GlyphRenderer"},{"attributes":{},"id":"17615","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17613"},"ticker":{"id":"17578"}},"id":"17577","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17593","type":"BoxAnnotation"},{"attributes":{},"id":"17590","type":"UndoTool"},{"attributes":{},"id":"17591","type":"SaveTool"},{"attributes":{},"id":"17619","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17620"},"selection_policy":{"id":"17619"}},"id":"17604","type":"ColumnDataSource"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17609","type":"Span"},{"attributes":{"axis":{"id":"17581"},"dimension":1,"ticker":null},"id":"17584","type":"Grid"},{"attributes":{},"id":"17575","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17594","type":"PolyAnnotation"},{"attributes":{"source":{"id":"17604"}},"id":"17608","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17585"},{"id":"17586"},{"id":"17587"},{"id":"17588"},{"id":"17589"},{"id":"17590"},{"id":"17591"},{"id":"17592"}]},"id":"17595","type":"Toolbar"},{"attributes":{"children":[[{"id":"17568"},0,0]]},"id":"17622","type":"GridBox"},{"attributes":{"overlay":{"id":"17593"}},"id":"17587","type":"BoxZoomTool"},{"attributes":{},"id":"17582","type":"BasicTicker"},{"attributes":{"text":"sigma"},"id":"17610","type":"Title"},{"attributes":{},"id":"17571","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17605","type":"Circle"},{"attributes":{"toolbars":[{"id":"17595"}],"tools":[{"id":"17585"},{"id":"17586"},{"id":"17587"},{"id":"17588"},{"id":"17589"},{"id":"17590"},{"id":"17591"},{"id":"17592"}]},"id":"17623","type":"ProxyToolbar"},{"attributes":{},"id":"17613","type":"BasicTickFormatter"},{"attributes":{},"id":"17578","type":"BasicTicker"},{"attributes":{},"id":"17588","type":"WheelZoomTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17615"},"ticker":{"id":"17582"}},"id":"17581","type":"LinearAxis"},{"attributes":{},"id":"17569","type":"DataRange1d"},{"attributes":{},"id":"17573","type":"LinearScale"}],"root_ids":["17625"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3366c906-64f7-4d7e-b8ff-697d39d3ae65","root_ids":["17625"],"roots":{"17625":"3ec7b009-69cc-4390-a3ea-ac9ab109f37b"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();