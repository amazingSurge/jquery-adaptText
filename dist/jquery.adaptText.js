/*! jquery.Adapttext - v0.1.0 - 2013-04-15
* https://github.com/amazingSurge/jquery-adaptText
* Copyright (c) 2013 amazingSurge; Licensed MIT */
(function (window, document, $, undefined) {
  "use strict";

  // Constructor
  var AdaptText = $.AdaptText = function (element, options) {
     // Attach element to the 'this' keyword
    this.element = element;
    this.$element = $(element);

    // options
    var meta_data = [];
    $.each(this.$element.data(), function(k, v) {
        var re = new RegExp("^adaptText", "i");
        if (re.test(k)) {
            meta_data[k.toLowerCase().replace(re, '')] = v;
        }
    });
    this.options = $.extend(true, {}, AdaptText.defaults, options, meta_data);

    var self = this;
    $.extend(self, {
      init: function(){

      }
    });

    self.init();
  };

  // Default options for the plugin as a simple object
  AdaptText.defaults = {
    maxFontSize: null,
    minFontSize: null
  };

  // Collection method.
  $.fn.adaptText = function(options) {
      if (typeof options === 'string') {
          var method = options;
          var method_arguments = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : undefined;

          return this.each(function() {
              var api = $.data(this, 'adaptText');
              if (typeof api[method] === 'function') {
                  api[method].apply(api, method_arguments);
              }
          });
      } else {
          return this.each(function() {
              if (!$.data(this, 'adaptText')) {
                  $.data(this, 'adaptText', new AdaptText(this, options));
              }
          });
      }
  };
}(window, document, jQuery));