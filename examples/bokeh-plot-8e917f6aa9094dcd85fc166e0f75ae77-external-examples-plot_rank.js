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
    
      
      
    
      var element = document.getElementById("acfb4fc5-2c50-4a35-866b-725ce1e7233c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'acfb4fc5-2c50-4a35-866b-725ce1e7233c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9005433e-5e18-4454-9218-9b9c06cab55b":{"roots":{"references":[{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40037"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39920"}},"id":"39919","type":"LinearAxis"},{"attributes":{"data_source":{"id":"40020"},"glyph":{"id":"40021"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40022"},"selection_glyph":null,"view":{"id":"40024"}},"id":"40023","type":"GlyphRenderer"},{"attributes":{},"id":"40059","type":"UnionRenderers"},{"attributes":{},"id":"40060","type":"Selection"},{"attributes":{},"id":"39949","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39970","type":"PolyAnnotation"},{"attributes":{},"id":"40039","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39935","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40043"},"selection_policy":{"id":"40042"}},"id":"39980","type":"ColumnDataSource"},{"attributes":{},"id":"40061","type":"UnionRenderers"},{"attributes":{},"id":"40062","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39936","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"39910"},0,0],[{"id":"39946"},0,1]]},"id":"40066","type":"GridBox"},{"attributes":{"ticks":[0,1,2,3]},"id":"40032","type":"FixedTicker"},{"attributes":{"below":[{"id":"39953"}],"center":[{"id":"39956"},{"id":"39960"},{"id":"40013"},{"id":"40019"},{"id":"40025"},{"id":"40031"}],"left":[{"id":"39957"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"40011"},{"id":"40017"},{"id":"40023"},{"id":"40029"}],"title":{"id":"40034"},"toolbar":{"id":"39971"},"toolbar_location":null,"x_range":{"id":"39911"},"x_scale":{"id":"39949"},"y_range":{"id":"39913"},"y_scale":{"id":"39951"}},"id":"39946","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"39998"},"glyph":{"id":"39999"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40000"},"selection_glyph":null,"view":{"id":"40002"}},"id":"40001","type":"GlyphRenderer"},{"attributes":{},"id":"40063","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"39980"},"glyph":{"id":"39981"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39982"},"selection_glyph":null,"view":{"id":"39984"}},"id":"39983","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"39985","type":"Span"},{"attributes":{},"id":"39927","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39982","type":"VBar"},{"attributes":{},"id":"40064","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40003","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39988","type":"VBar"},{"attributes":{"data_source":{"id":"40008"},"glyph":{"id":"40009"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40010"},"selection_glyph":null,"view":{"id":"40012"}},"id":"40011","type":"GlyphRenderer"},{"attributes":{},"id":"40052","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"39991","type":"Span"},{"attributes":{"source":{"id":"39980"}},"id":"39984","type":"CDSView"},{"attributes":{},"id":"39933","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40045"},"selection_policy":{"id":"40044"}},"id":"39986","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40013","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39987","type":"VBar"},{"attributes":{},"id":"39920","type":"BasicTicker"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40027","type":"VBar"},{"attributes":{},"id":"40042","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"39934","type":"HoverTool"},{"attributes":{"source":{"id":"39986"}},"id":"39990","type":"CDSView"},{"attributes":{},"id":"40043","type":"Selection"},{"attributes":{},"id":"39917","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39994","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39927"},{"id":"39928"},{"id":"39929"},{"id":"39930"},{"id":"39931"},{"id":"39932"},{"id":"39933"},{"id":"39934"}]},"id":"39937","type":"Toolbar"},{"attributes":{"axis":{"id":"39953"},"ticker":null},"id":"39956","type":"Grid"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"39997","type":"Span"},{"attributes":{"text":"tau"},"id":"40006","type":"Title"},{"attributes":{"callback":null},"id":"39968","type":"HoverTool"},{"attributes":{"source":{"id":"40026"}},"id":"40030","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39993","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40054"},"ticker":{"id":"40032"}},"id":"39957","type":"LinearAxis"},{"attributes":{"data_source":{"id":"39986"},"glyph":{"id":"39987"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39988"},"selection_glyph":null,"view":{"id":"39990"}},"id":"39989","type":"GlyphRenderer"},{"attributes":{},"id":"39911","type":"DataRange1d"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40052"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39954"}},"id":"39953","type":"LinearAxis"},{"attributes":{},"id":"39954","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40047"},"selection_policy":{"id":"40046"}},"id":"39992","type":"ColumnDataSource"},{"attributes":{},"id":"40054","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"39992"}},"id":"39996","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40000","type":"VBar"},{"attributes":{"axis":{"id":"39957"},"dimension":1,"ticker":null},"id":"39960","type":"Grid"},{"attributes":{"source":{"id":"40020"}},"id":"40024","type":"CDSView"},{"attributes":{"text":"mu"},"id":"40034","type":"Title"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39999","type":"VBar"},{"attributes":{},"id":"39913","type":"DataRange1d"},{"attributes":{"data_source":{"id":"39992"},"glyph":{"id":"39993"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39994"},"selection_glyph":null,"view":{"id":"39996"}},"id":"39995","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39981","type":"VBar"},{"attributes":{},"id":"40044","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"39969"}},"id":"39963","type":"BoxZoomTool"},{"attributes":{},"id":"40045","type":"Selection"},{"attributes":{},"id":"39962","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40049"},"selection_policy":{"id":"40048"}},"id":"39998","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"39936"}},"id":"39931","type":"LassoSelectTool"},{"attributes":{},"id":"39961","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40019","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40064"},"selection_policy":{"id":"40063"}},"id":"40026","type":"ColumnDataSource"},{"attributes":{"source":{"id":"39998"}},"id":"40002","type":"CDSView"},{"attributes":{},"id":"39967","type":"SaveTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40031","type":"Span"},{"attributes":{},"id":"39964","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"39970"}},"id":"39965","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40028","type":"VBar"},{"attributes":{},"id":"39915","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"39937"},{"id":"39971"}],"tools":[{"id":"39927"},{"id":"39928"},{"id":"39929"},{"id":"39930"},{"id":"39931"},{"id":"39932"},{"id":"39933"},{"id":"39934"},{"id":"39961"},{"id":"39962"},{"id":"39963"},{"id":"39964"},{"id":"39965"},{"id":"39966"},{"id":"39967"},{"id":"39968"}]},"id":"40067","type":"ProxyToolbar"},{"attributes":{},"id":"39966","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39961"},{"id":"39962"},{"id":"39963"},{"id":"39964"},{"id":"39965"},{"id":"39966"},{"id":"39967"},{"id":"39968"}]},"id":"39971","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40025","type":"Span"},{"attributes":{"axis":{"id":"39923"},"dimension":1,"ticker":null},"id":"39926","type":"Grid"},{"attributes":{"data_source":{"id":"40026"},"glyph":{"id":"40027"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40028"},"selection_glyph":null,"view":{"id":"40030"}},"id":"40029","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40060"},"selection_policy":{"id":"40059"}},"id":"40014","type":"ColumnDataSource"},{"attributes":{},"id":"39932","type":"UndoTool"},{"attributes":{"children":[{"id":"40068"},{"id":"40066"}]},"id":"40069","type":"Column"},{"attributes":{"source":{"id":"40014"}},"id":"40018","type":"CDSView"},{"attributes":{},"id":"40046","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40016","type":"VBar"},{"attributes":{},"id":"40047","type":"Selection"},{"attributes":{},"id":"39928","type":"PanTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40015","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40022","type":"VBar"},{"attributes":{"toolbar":{"id":"40067"},"toolbar_location":"above"},"id":"40068","type":"ToolbarBox"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40021","type":"VBar"},{"attributes":{"axis":{"id":"39919"},"ticker":null},"id":"39922","type":"Grid"},{"attributes":{"data_source":{"id":"40014"},"glyph":{"id":"40015"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40016"},"selection_glyph":null,"view":{"id":"40018"}},"id":"40017","type":"GlyphRenderer"},{"attributes":{},"id":"39951","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40058"},"selection_policy":{"id":"40057"}},"id":"40008","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40008"}},"id":"40012","type":"CDSView"},{"attributes":{},"id":"40057","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40062"},"selection_policy":{"id":"40061"}},"id":"40020","type":"ColumnDataSource"},{"attributes":{},"id":"40058","type":"Selection"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40039"},"ticker":{"id":"40004"}},"id":"39923","type":"LinearAxis"},{"attributes":{},"id":"40048","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40009","type":"VBar"},{"attributes":{},"id":"40037","type":"BasicTickFormatter"},{"attributes":{},"id":"40049","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"40004","type":"FixedTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39969","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"39919"}],"center":[{"id":"39922"},{"id":"39926"},{"id":"39985"},{"id":"39991"},{"id":"39997"},{"id":"40003"}],"left":[{"id":"39923"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"39983"},{"id":"39989"},{"id":"39995"},{"id":"40001"}],"title":{"id":"40006"},"toolbar":{"id":"39937"},"toolbar_location":null,"x_range":{"id":"39911"},"x_scale":{"id":"39915"},"y_range":{"id":"39913"},"y_scale":{"id":"39917"}},"id":"39910","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"39935"}},"id":"39929","type":"BoxZoomTool"},{"attributes":{},"id":"39930","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40010","type":"VBar"}],"root_ids":["40069"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9005433e-5e18-4454-9218-9b9c06cab55b","root_ids":["40069"],"roots":{"40069":"acfb4fc5-2c50-4a35-866b-725ce1e7233c"}}];
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