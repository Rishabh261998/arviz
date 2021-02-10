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
    
      
      
    
      var element = document.getElementById("25d027f1-e6c5-496f-b0e5-9741d5df18a7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '25d027f1-e6c5-496f-b0e5-9741d5df18a7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4fdec061-c50b-450e-8e44-e7b5176688c5":{"roots":{"references":[{"attributes":{"callback":null},"id":"35087","type":"HoverTool"},{"attributes":{"text":"mu"},"id":"35161","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35150","type":"Circle"},{"attributes":{"data_source":{"id":"35158"},"glyph":{"id":"35157"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35160"}},"id":"35159","type":"GlyphRenderer"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35185"},"selection_policy":{"id":"35184"}},"id":"35158","type":"ColumnDataSource"},{"attributes":{},"id":"35077","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35151","type":"Circle"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35154","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35155","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35171"},"selection_policy":{"id":"35170"}},"id":"35135","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35149"}},"id":"35153","type":"CDSView"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35142","type":"Span"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35156","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35183"},"selection_policy":{"id":"35182"}},"id":"35149","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35149"},"glyph":{"id":"35150"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35151"},"selection_glyph":null,"view":{"id":"35153"}},"id":"35152","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"35063"},0,0],[{"id":"35099"},0,1]]},"id":"35187","type":"GridBox"},{"attributes":{},"id":"35182","type":"UnionRenderers"},{"attributes":{"text":"tau"},"id":"35147","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35124","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35140","type":"Span"},{"attributes":{},"id":"35183","type":"Selection"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35141","type":"Span"},{"attributes":{"data_source":{"id":"35144"},"glyph":{"id":"35143"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35146"}},"id":"35145","type":"GlyphRenderer"},{"attributes":{},"id":"35068","type":"LinearScale"},{"attributes":{},"id":"35170","type":"UnionRenderers"},{"attributes":{},"id":"35171","type":"Selection"},{"attributes":{"source":{"id":"35144"}},"id":"35146","type":"CDSView"},{"attributes":{},"id":"35073","type":"BasicTicker"},{"attributes":{},"id":"35184","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35088","type":"BoxAnnotation"},{"attributes":{},"id":"35185","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35125","type":"PolyAnnotation"},{"attributes":{},"id":"35172","type":"UnionRenderers"},{"attributes":{"axis":{"id":"35072"},"ticker":null},"id":"35075","type":"Grid"},{"attributes":{},"id":"35173","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35089","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"35072"}],"center":[{"id":"35075"},{"id":"35079"}],"left":[{"id":"35076"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35138"},{"id":"35140"},{"id":"35141"},{"id":"35142"},{"id":"35145"}],"title":{"id":"35147"},"toolbar":{"id":"35090"},"toolbar_location":null,"x_range":{"id":"35064"},"x_scale":{"id":"35068"},"y_range":{"id":"35066"},"y_scale":{"id":"35070"}},"id":"35063","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"35189"},{"id":"35187"}]},"id":"35190","type":"Column"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35164"},"ticker":{"id":"35073"}},"id":"35072","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35157","type":"Dash"},{"attributes":{"source":{"id":"35158"}},"id":"35160","type":"CDSView"},{"attributes":{},"id":"35080","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"35090"},{"id":"35126"}],"tools":[{"id":"35080"},{"id":"35081"},{"id":"35082"},{"id":"35083"},{"id":"35084"},{"id":"35085"},{"id":"35086"},{"id":"35087"},{"id":"35116"},{"id":"35117"},{"id":"35118"},{"id":"35119"},{"id":"35120"},{"id":"35121"},{"id":"35122"},{"id":"35123"}]},"id":"35188","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"35108"}],"center":[{"id":"35111"},{"id":"35115"}],"left":[{"id":"35112"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35152"},{"id":"35154"},{"id":"35155"},{"id":"35156"},{"id":"35159"}],"title":{"id":"35161"},"toolbar":{"id":"35126"},"toolbar_location":null,"x_range":{"id":"35100"},"x_scale":{"id":"35104"},"y_range":{"id":"35102"},"y_scale":{"id":"35106"}},"id":"35099","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"35188"},"toolbar_location":"above"},"id":"35189","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35080"},{"id":"35081"},{"id":"35082"},{"id":"35083"},{"id":"35084"},{"id":"35085"},{"id":"35086"},{"id":"35087"}]},"id":"35090","type":"Toolbar"},{"attributes":{},"id":"35081","type":"PanTool"},{"attributes":{"overlay":{"id":"35088"}},"id":"35082","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"35135"},"glyph":{"id":"35136"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35137"},"selection_glyph":null,"view":{"id":"35139"}},"id":"35138","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35176"},"ticker":{"id":"35109"}},"id":"35108","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35136","type":"Circle"},{"attributes":{"end":1,"start":-0.05},"id":"35102","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35178"},"ticker":{"id":"35113"}},"id":"35112","type":"LinearAxis"},{"attributes":{},"id":"35086","type":"SaveTool"},{"attributes":{},"id":"35104","type":"LinearScale"},{"attributes":{},"id":"35106","type":"LinearScale"},{"attributes":{},"id":"35176","type":"BasicTickFormatter"},{"attributes":{},"id":"35100","type":"DataRange1d"},{"attributes":{"callback":null},"id":"35123","type":"HoverTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35166"},"ticker":{"id":"35077"}},"id":"35076","type":"LinearAxis"},{"attributes":{},"id":"35109","type":"BasicTicker"},{"attributes":{"axis":{"id":"35108"},"ticker":null},"id":"35111","type":"Grid"},{"attributes":{"axis":{"id":"35076"},"dimension":1,"ticker":null},"id":"35079","type":"Grid"},{"attributes":{},"id":"35164","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"35112"},"dimension":1,"ticker":null},"id":"35115","type":"Grid"},{"attributes":{},"id":"35113","type":"BasicTicker"},{"attributes":{},"id":"35083","type":"WheelZoomTool"},{"attributes":{"source":{"id":"35135"}},"id":"35139","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35137","type":"Circle"},{"attributes":{"overlay":{"id":"35124"}},"id":"35118","type":"BoxZoomTool"},{"attributes":{"end":1,"start":-0.05},"id":"35066","type":"DataRange1d"},{"attributes":{},"id":"35117","type":"PanTool"},{"attributes":{},"id":"35116","type":"ResetTool"},{"attributes":{},"id":"35122","type":"SaveTool"},{"attributes":{},"id":"35119","type":"WheelZoomTool"},{"attributes":{},"id":"35178","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"35125"}},"id":"35120","type":"LassoSelectTool"},{"attributes":{},"id":"35064","type":"DataRange1d"},{"attributes":{},"id":"35121","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35116"},{"id":"35117"},{"id":"35118"},{"id":"35119"},{"id":"35120"},{"id":"35121"},{"id":"35122"},{"id":"35123"}]},"id":"35126","type":"Toolbar"},{"attributes":{},"id":"35070","type":"LinearScale"},{"attributes":{"overlay":{"id":"35089"}},"id":"35084","type":"LassoSelectTool"},{"attributes":{},"id":"35166","type":"BasicTickFormatter"},{"attributes":{},"id":"35085","type":"UndoTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35143","type":"Dash"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35173"},"selection_policy":{"id":"35172"}},"id":"35144","type":"ColumnDataSource"}],"root_ids":["35190"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"4fdec061-c50b-450e-8e44-e7b5176688c5","root_ids":["35190"],"roots":{"35190":"25d027f1-e6c5-496f-b0e5-9741d5df18a7"}}];
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