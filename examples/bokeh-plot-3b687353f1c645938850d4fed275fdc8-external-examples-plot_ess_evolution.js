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
    
      
      
    
      var element = document.getElementById("1f017faf-b16d-4009-8d4e-27007e339d07");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1f017faf-b16d-4009-8d4e-27007e339d07' but no matching script tag was found.")
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
                    
                  var docs_json = '{"707b9c96-5321-4f5f-9029-70be0118bdc3":{"roots":{"references":[{"attributes":{"overlay":{"id":"17342"}},"id":"17336","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17387"},"selection_policy":{"id":"17386"}},"id":"17353","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17393"},"selection_policy":{"id":"17392"}},"id":"17368","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17359","type":"Line"},{"attributes":{"data_source":{"id":"17363"},"glyph":{"id":"17364"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17365"},"selection_glyph":null,"view":{"id":"17367"}},"id":"17366","type":"GlyphRenderer"},{"attributes":{},"id":"17393","type":"Selection"},{"attributes":{"axis":{"id":"17330"},"dimension":1,"ticker":null},"id":"17333","type":"Grid"},{"attributes":{},"id":"17320","type":"DataRange1d"},{"attributes":{"source":{"id":"17353"}},"id":"17357","type":"CDSView"},{"attributes":{},"id":"17339","type":"UndoTool"},{"attributes":{"source":{"id":"17363"}},"id":"17367","type":"CDSView"},{"attributes":{"text":"b"},"id":"17377","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17334"},{"id":"17335"},{"id":"17336"},{"id":"17337"},{"id":"17338"},{"id":"17339"},{"id":"17340"},{"id":"17341"}]},"id":"17344","type":"Toolbar"},{"attributes":{},"id":"17340","type":"SaveTool"},{"attributes":{},"id":"17391","type":"Selection"},{"attributes":{},"id":"17388","type":"UnionRenderers"},{"attributes":{},"id":"17392","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17343"}},"id":"17338","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17360","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17391"},"selection_policy":{"id":"17390"}},"id":"17363","type":"ColumnDataSource"},{"attributes":{},"id":"17380","type":"BasicTickFormatter"},{"attributes":{},"id":"17389","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17389"},"selection_policy":{"id":"17388"}},"id":"17358","type":"ColumnDataSource"},{"attributes":{},"id":"17327","type":"BasicTicker"},{"attributes":{"above":[{"id":"17374"}],"below":[{"id":"17326"}],"center":[{"id":"17329"},{"id":"17333"}],"left":[{"id":"17330"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17356"},{"id":"17361"},{"id":"17366"},{"id":"17371"},{"id":"17373"}],"title":{"id":"17377"},"toolbar":{"id":"17344"},"toolbar_location":null,"x_range":{"id":"17318"},"x_scale":{"id":"17322"},"y_range":{"id":"17320"},"y_scale":{"id":"17324"}},"id":"17317","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17365","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17342","type":"BoxAnnotation"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17364","type":"Line"},{"attributes":{},"id":"17334","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"17344"}],"tools":[{"id":"17334"},{"id":"17335"},{"id":"17336"},{"id":"17337"},{"id":"17338"},{"id":"17339"},{"id":"17340"},{"id":"17341"}]},"id":"17396","type":"ProxyToolbar"},{"attributes":{},"id":"17324","type":"LinearScale"},{"attributes":{},"id":"17387","type":"Selection"},{"attributes":{},"id":"17322","type":"LinearScale"},{"attributes":{"source":{"id":"17368"}},"id":"17372","type":"CDSView"},{"attributes":{"toolbar":{"id":"17396"},"toolbar_location":"above"},"id":"17397","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17355","type":"Circle"},{"attributes":{"children":[[{"id":"17317"},0,0]]},"id":"17395","type":"GridBox"},{"attributes":{"axis":{"id":"17326"},"ticker":null},"id":"17329","type":"Grid"},{"attributes":{"children":[{"id":"17397"},{"id":"17395"}]},"id":"17398","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17370","type":"Circle"},{"attributes":{},"id":"17335","type":"PanTool"},{"attributes":{"click_policy":"hide","items":[{"id":"17375"},{"id":"17376"}],"location":"center_right","orientation":"horizontal"},"id":"17374","type":"Legend"},{"attributes":{},"id":"17386","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"17341","type":"HoverTool"},{"attributes":{},"id":"17318","type":"DataRange1d"},{"attributes":{"source":{"id":"17358"}},"id":"17362","type":"CDSView"},{"attributes":{},"id":"17331","type":"BasicTicker"},{"attributes":{},"id":"17382","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17380"},"ticker":{"id":"17327"}},"id":"17326","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17369","type":"Circle"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17371"},{"id":"17366"}]},"id":"17376","type":"LegendItem"},{"attributes":{"data_source":{"id":"17358"},"glyph":{"id":"17359"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17360"},"selection_glyph":null,"view":{"id":"17362"}},"id":"17361","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17373","type":"Span"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17356"},{"id":"17361"}]},"id":"17375","type":"LegendItem"},{"attributes":{},"id":"17390","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17382"},"ticker":{"id":"17331"}},"id":"17330","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17353"},"glyph":{"id":"17354"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17355"},"selection_glyph":null,"view":{"id":"17357"}},"id":"17356","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17354","type":"Circle"},{"attributes":{},"id":"17337","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17343","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"17368"},"glyph":{"id":"17369"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17370"},"selection_glyph":null,"view":{"id":"17372"}},"id":"17371","type":"GlyphRenderer"}],"root_ids":["17398"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"707b9c96-5321-4f5f-9029-70be0118bdc3","root_ids":["17398"],"roots":{"17398":"1f017faf-b16d-4009-8d4e-27007e339d07"}}];
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