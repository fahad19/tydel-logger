module.exports = function tydelLogger(model) {
  var cacheByMethod = {};

  model.on('method:call', function (event) {
    cacheByMethod[event.path.join('.')] = model.toJS();
  });

  model.on('method:change', function (event) {
    var p = event.path.join('.');
    var prev = cacheByMethod[p];
    var next = model.toJS();

    if (typeof console.group === 'function') {
      console.group(p);
    }

    console.log('%cprevious state', 'color: #9e9e9e; font-weight: bold;', prev);
    console.log('%c↳current state', 'color: #4cAf50; font-weight: bold;', next);

    if (typeof console.groupEnd === 'function') {
      console.groupEnd();
    }
  });
}
