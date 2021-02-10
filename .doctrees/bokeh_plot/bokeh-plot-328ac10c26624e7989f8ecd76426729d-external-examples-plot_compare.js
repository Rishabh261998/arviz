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
    
      
      
    
      var element = document.getElementById("2ee3ce30-cc72-440a-881b-c0bb143c9d17");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2ee3ce30-cc72-440a-881b-c0bb143c9d17' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e9cfdfe5-69b6-413b-8a49-de3ef4415040":{"roots":{"references":[{"attributes":{},"id":"14911","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"14917","type":"PolyAnnotation"},{"attributes":{},"id":"14963","type":"Selection"},{"attributes":{"axis_label":"Log","formatter":{"id":"14957"},"ticker":{"id":"14901"}},"id":"14900","type":"LinearAxis"},{"attributes":{"data_source":{"id":"14944"},"glyph":{"id":"14945"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14946"},"selection_glyph":null,"view":{"id":"14948"}},"id":"14947","type":"GlyphRenderer"},{"attributes":{},"id":"14901","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14940","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14908"},{"id":"14909"},{"id":"14910"},{"id":"14911"},{"id":"14912"},{"id":"14913"},{"id":"14914"},{"id":"14915"}]},"id":"14918","type":"Toolbar"},{"attributes":{"children":[{"id":"14975"},{"id":"14973"}]},"id":"14976","type":"Column"},{"attributes":{},"id":"14969","type":"Selection"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"14965"},"selection_policy":{"id":"14964"}},"id":"14934","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14951","type":"Circle"},{"attributes":{"source":{"id":"14939"}},"id":"14943","type":"CDSView"},{"attributes":{"source":{"id":"14949"}},"id":"14953","type":"CDSView"},{"attributes":{},"id":"14896","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14941","type":"Circle"},{"attributes":{"axis":{"id":"14904"},"dimension":1,"ticker":null},"id":"14907","type":"Grid"},{"attributes":{"callback":null},"id":"14915","type":"HoverTool"},{"attributes":{"overlay":{"id":"14916"}},"id":"14910","type":"BoxZoomTool"},{"attributes":{},"id":"14898","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14916","type":"BoxAnnotation"},{"attributes":{"toolbars":[{"id":"14918"}],"tools":[{"id":"14908"},{"id":"14909"},{"id":"14910"},{"id":"14911"},{"id":"14912"},{"id":"14913"},{"id":"14914"},{"id":"14915"}]},"id":"14974","type":"ProxyToolbar"},{"attributes":{"source":{"id":"14944"}},"id":"14948","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14946","type":"MultiLine"},{"attributes":{},"id":"14913","type":"UndoTool"},{"attributes":{"toolbar":{"id":"14974"},"toolbar_location":"above"},"id":"14975","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"14963"},"selection_policy":{"id":"14962"}},"id":"14929","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"14969"},"selection_policy":{"id":"14968"}},"id":"14944","type":"ColumnDataSource"},{"attributes":{},"id":"14959","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"14939"},"glyph":{"id":"14940"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14941"},"selection_glyph":null,"view":{"id":"14943"}},"id":"14942","type":"GlyphRenderer"},{"attributes":{},"id":"14971","type":"Selection"},{"attributes":{"text":""},"id":"14955","type":"Title"},{"attributes":{},"id":"14965","type":"Selection"},{"attributes":{"axis":{"id":"14900"},"ticker":null},"id":"14903","type":"Grid"},{"attributes":{},"id":"14914","type":"SaveTool"},{"attributes":{"data_source":{"id":"14949"},"glyph":{"id":"14950"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14951"},"selection_glyph":null,"view":{"id":"14953"}},"id":"14952","type":"GlyphRenderer"},{"attributes":{"source":{"id":"14929"}},"id":"14933","type":"CDSView"},{"attributes":{"overlay":{"id":"14917"}},"id":"14912","type":"LassoSelectTool"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14927","type":"FixedTicker"},{"attributes":{"end":0.5,"start":-1.5},"id":"14894","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14934"},"glyph":{"id":"14935"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14936"},"selection_glyph":null,"view":{"id":"14938"}},"id":"14937","type":"GlyphRenderer"},{"attributes":{},"id":"14908","type":"ResetTool"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14945","type":"MultiLine"},{"attributes":{},"id":"14967","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14936","type":"MultiLine"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14935","type":"MultiLine"},{"attributes":{},"id":"14892","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14930","type":"Triangle"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"14971"},"selection_policy":{"id":"14970"}},"id":"14949","type":"ColumnDataSource"},{"attributes":{},"id":"14909","type":"PanTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"14954","type":"Span"},{"attributes":{},"id":"14957","type":"BasicTickFormatter"},{"attributes":{},"id":"14964","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14929"},"glyph":{"id":"14930"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14931"},"selection_glyph":null,"view":{"id":"14933"}},"id":"14932","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"14891"},0,0]]},"id":"14973","type":"GridBox"},{"attributes":{"formatter":{"id":"14959"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"14927"}},"id":"14904","type":"LinearAxis"},{"attributes":{},"id":"14966","type":"UnionRenderers"},{"attributes":{"source":{"id":"14934"}},"id":"14938","type":"CDSView"},{"attributes":{},"id":"14968","type":"UnionRenderers"},{"attributes":{"below":[{"id":"14900"}],"center":[{"id":"14903"},{"id":"14907"}],"left":[{"id":"14904"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"14932"},{"id":"14937"},{"id":"14942"},{"id":"14947"},{"id":"14952"},{"id":"14954"}],"title":{"id":"14955"},"toolbar":{"id":"14918"},"toolbar_location":null,"x_range":{"id":"14892"},"x_scale":{"id":"14896"},"y_range":{"id":"14894"},"y_scale":{"id":"14898"}},"id":"14891","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14970","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14950","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14931","type":"Triangle"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"14967"},"selection_policy":{"id":"14966"}},"id":"14939","type":"ColumnDataSource"},{"attributes":{},"id":"14962","type":"UnionRenderers"}],"root_ids":["14976"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e9cfdfe5-69b6-413b-8a49-de3ef4415040","root_ids":["14976"],"roots":{"14976":"2ee3ce30-cc72-440a-881b-c0bb143c9d17"}}];
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