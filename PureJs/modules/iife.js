function getFileName (ext) {
  return 'IIFE.' + ext;
}

(function () {
  var ext = 'js';
  const result = getFileName(ext);
})();
