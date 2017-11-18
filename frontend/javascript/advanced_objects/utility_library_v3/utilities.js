(function() {
  var _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var args = Array.prototype.slice.call(arguments);
        return result = element.filter(function(val) {
          return (args.indexOf(val) === -1);
        });
      },
      lastIndexOf: function(val) {
        var lastIndex = -1;
        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === val) {
            lastIndex = i;
            break;
          }
        }
        return lastIndex;
      },
      sample: function() {
        var result = [];
        var size = arguments[0] || 1;
        var copy = element.slice();
        var get = function() {
          var idx = Math.floor(Math.random() * copy.length);
          var element = copy[idx];
          copy.splice(idx, 1);
          console.log(element);
          return element;
        }
        if (size === 1) {
          return get();
        }
        while(size) {
          result.push(get());
          size--;
        }
        return result;
      }
    };
    return u;
  };

  _.range = function() {
    var start;
    var end;
    if (arguments[1] === undefined) {
      start = 0;
      end = arguments[0] - 1;
    } else {
      start = arguments[0];
      end = arguments[1] - 1;
    }
    var result = [];
    for (var i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };
  window._ = _;
})();
