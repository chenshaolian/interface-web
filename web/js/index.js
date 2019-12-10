window.onload = function () {
  function pageOne() {
    window.location.href = './html/helloWorld.html'
  }
  document.getElementById("pageOne").onclick = pageOne;

  function pageTwo() {
    window.location.href = './html/variablesAndTypes.html'
  }
  document.getElementById("pageTwo").onclick = pageTwo;

  function pageThree() {
    window.location.href = './html/lists.html'
  }
  document.getElementById("pageThree").onclick = pageThree;

  function toIndex() {
    window.location.href = './index.html'
  }
  document.getElementById("logo").onclick = toIndex;
  document.getElementById("project").onclick = toIndex;
}