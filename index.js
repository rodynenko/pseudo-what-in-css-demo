(function() {
  const dialog = document.getElementById('dialog');
  function handler() {
    dialog[dialog.getAttribute('open') == null ? 'showModal' : 'close']()
  }

  const b = document.getElementById('backdrop-button');
  const c = document.getElementById('backdrop-button-close');
  b.addEventListener('click', handler)
  c.addEventListener('click', handler)
})();

