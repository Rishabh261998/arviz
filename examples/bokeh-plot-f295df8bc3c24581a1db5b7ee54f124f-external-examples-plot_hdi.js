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
    
      
      
    
      var element = document.getElementById("436c2c2b-8ac5-4e3d-b5f4-6d5b6abc5454");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '436c2c2b-8ac5-4e3d-b5f4-6d5b6abc5454' but no matching script tag was found.")
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
                    
                  var docs_json = '{"38839357-dcc9-467b-b404-74808a27f160":{"roots":{"references":[{"attributes":{"data_source":{"id":"18490"},"glyph":{"id":"18491"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18492"},"selection_glyph":null,"view":{"id":"18494"}},"id":"18493","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"18458"}],"center":[{"id":"18461"},{"id":"18465"}],"left":[{"id":"18462"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"18488"},{"id":"18493"}],"title":{"id":"18495"},"toolbar":{"id":"18476"},"toolbar_location":"above","x_range":{"id":"18450"},"x_scale":{"id":"18454"},"y_range":{"id":"18452"},"y_scale":{"id":"18456"}},"id":"18449","subtype":"Figure","type":"Plot"},{"attributes":{"text":""},"id":"18495","type":"Title"},{"attributes":{"source":{"id":"18485"}},"id":"18489","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"ZL5paZFIBcBG4FglbRr/vze2yJzxtPu/UyYKO2mT+r+iQxGBUgz4v/0/Rwyz8/e/VdMWvQrP97/kT1F0yeP2v2nCvf8fzvO/uGdjSTI9879f93hjNsLyvwg2SV7yyPG/pjBgj/dt8b8Wtm2yu1jxv4hKDxO3IfG/SZRJqfyn8L/Eu24PHZnwv+L3pTMYSfC/k6/KIZUP8L/hvCC2mwjwv4YGNtMJou+/L4Us1NAx778CIUHUYxPvv+tUJjuIsuq/Kj5S6Hqm6L/VAonnAU3nv1pMqhEv6OW/4s1JoZat5L9thFvpBXbiv1PWUgZXU+K/tvsK+Jzj4L+lqxKfWtTfv0yQ68QVHN+/YpA57TQW3r+frZx4GZXcv1JLO+0yYty/ILfDM1PI279Rp2YwoOPav5eogIYkStq/IQxvvvI52b9lgUHgUObWvx2O3Wh7M9a/09/pM8Js1b8i0gfBAljUv6h2IXaBiNO/QA+88kdr07+/cxhMkf/Sv5mccCmWJ9G/uHd3vah60L/g/nzMmDDMvxgWTaPpMcu/Z/ELbq2Dwr8r86vUxWbCvwhtgI4Iqb2/40bFMqhylb8FjpruGUQ8P3tckpLnk6k/zypsmZTlrz+luX0qcna6PxhNMXW0Xr8//0WjDXsZwz9gL1emppbGP4Qpdt0rnMo/8wGRkHVhyz9mAVnAktzMP9LOd25nJM0/OWKHHjW10T+xjYzJ/XvTP1y+swvjhtc/bJt4rOXi2j9DD2jKj/vbP4+qc+1PpeA/N7V9sxok4T/Y53cYOrPiP8Qz6lV40+I/yKwGVb7a4j+gehg2ikTjP6zAV00ldOQ/BYsbWVvs5j8jFmA3xgznP+tTUFVDj+c/xOpNKl6c5z9sR8DaA+7nP/ie8CMFYug/pHQgb01Q6T81X30Z+QDqP+mWddfkOOo/ShOMIEKV6j9pD04TNbnwPyzIXvDvJPE/1/6dG9Mv8z+e8T7t+4bzPwZb3ciXmfY/kVsQ9KCz9j/ZYC6hONj2P69g571yHfg/C7oKAhNu+j+xT7EMSPr6P7+LWBtKHfs/AYsDgDFz/T8=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"OIMsLd1u5T/dj1NtyXLwP+SkmzGHJfI/1ux6Yku28j8vXne/1vnzPwJg3HkmBvQ/VpZ0oXoY9D8OWNdFG470P8weIQDwGPY/JExO22Zh9j9QhEPO5J72P/xk29CGG/c/redPOARJ9z/1JMkmolP3P7xaeHYkb/c/3DVbqwGs9z8eokh4cbP3Pw8ELeZz2/c/NqgabzX49z+Qoe8ksvv3P15+Mot9F/g/tN70yosz+D/At+8KJzv4P8VqNvFdU/k/dnDrRWHW+T9Lvx2Gvyz6P+pslTv0hfo/iIytV5rU+j/lHqmFfmL7P2tKaz4qa/s/EkH9wRjH+z+Lqh2sdAX8P/aNYkd9HPw/9M1YYjk9/D9MauzQXG38P5aWWKK5c/w/HImHmfWG/D8WK/P5i6P8P+3qL2+7tvw/fB4yqMHY/D/Tz/fjNSP9PzxO5JKQOf0/BsSCuWdS/T+8Bd+n/3T9PyvRO9Hvjv0/GH6oAZeS/T+I8XzWDaD9P23s0ToN2/0/CRFR6Krw/T8SMDhz9jz+P54uy2XhTP4/6kAfKcXX/j/NQLWik9n+P5j8i7u3Ev8/cnWarxrV/z9qumcQcQAAQLkkJc8nMwBAVtgyKcs/AEDn9qnI2WkAQDTF1NF6fQBAMBpt2MuYAEB7uTI1tbQAQEyx617h1ABAEIiErAvbAEALyAKW5OYAQHe+czsj6QBAJHboUVMbAUDbyJjcvzcBQOY7uzBueAFAt4nHWi6uAUD0gKb8uL8BQFJ1rv2pFAJAp7ZvVoMkAkD7/A5DZ1YCQHhGvQpvWgJAmdWgyldbAkBUD8NGkWgCQBb4qqmEjgJAYXEja4vdAkDEAuzGmOECQH0Kqmro8QJAWL1JxYvzAkDuCFh7wP0CQN8TfqRADANAlA7krQkqA0Dnqy8jH0ADQN2y7pocRwNAaYIRRKhSA0Dag9NETS4EQAuyF/w7SQRAtn/nxvTLBEBovE/7vuEEQMJWN/JlpgVA5BYEPeisBUA2mEsoDrYFQCzYea9cBwZAg66CwISbBkDsUywDkr4GQPAi1oZSxwZAwOIAYMxcB0A=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"18506"},"selection_policy":{"id":"18505"}},"id":"18490","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18466"},{"id":"18467"},{"id":"18468"},{"id":"18469"},{"id":"18470"},{"id":"18471"},{"id":"18472"},{"id":"18473"}]},"id":"18476","type":"Toolbar"},{"attributes":{},"id":"18456","type":"LinearScale"},{"attributes":{"data_source":{"id":"18485"},"glyph":{"id":"18486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18487"},"selection_glyph":null,"view":{"id":"18489"}},"id":"18488","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"18492","type":"Line"},{"attributes":{},"id":"18505","type":"UnionRenderers"},{"attributes":{},"id":"18471","type":"UndoTool"},{"attributes":{},"id":"18467","type":"PanTool"},{"attributes":{},"id":"18463","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"18475","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"18475"}},"id":"18470","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"18487","type":"Patch"},{"attributes":{},"id":"18469","type":"WheelZoomTool"},{"attributes":{},"id":"18466","type":"ResetTool"},{"attributes":{"axis":{"id":"18462"},"dimension":1,"ticker":null},"id":"18465","type":"Grid"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"18491","type":"Line"},{"attributes":{},"id":"18499","type":"BasicTickFormatter"},{"attributes":{},"id":"18472","type":"SaveTool"},{"attributes":{"callback":null},"id":"18473","type":"HoverTool"},{"attributes":{},"id":"18497","type":"BasicTickFormatter"},{"attributes":{},"id":"18459","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"18474","type":"BoxAnnotation"},{"attributes":{},"id":"18506","type":"Selection"},{"attributes":{"formatter":{"id":"18499"},"ticker":{"id":"18463"}},"id":"18462","type":"LinearAxis"},{"attributes":{"axis":{"id":"18458"},"ticker":null},"id":"18461","type":"Grid"},{"attributes":{},"id":"18454","type":"LinearScale"},{"attributes":{"formatter":{"id":"18497"},"ticker":{"id":"18459"}},"id":"18458","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"18504"},"selection_policy":{"id":"18503"}},"id":"18485","type":"ColumnDataSource"},{"attributes":{},"id":"18503","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18474"}},"id":"18468","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"18486","type":"Patch"},{"attributes":{},"id":"18450","type":"DataRange1d"},{"attributes":{},"id":"18504","type":"Selection"},{"attributes":{},"id":"18452","type":"DataRange1d"},{"attributes":{"source":{"id":"18490"}},"id":"18494","type":"CDSView"}],"root_ids":["18449"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"38839357-dcc9-467b-b404-74808a27f160","root_ids":["18449"],"roots":{"18449":"436c2c2b-8ac5-4e3d-b5f4-6d5b6abc5454"}}];
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