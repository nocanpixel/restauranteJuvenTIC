window.onload = function () {
  new bootstrap.ScrollSpy(document.body, {
    target: '#list-example'
  });  hotfixScrollSpy();
  window.scrollBy(0,1);
}
