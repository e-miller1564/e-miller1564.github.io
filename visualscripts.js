function showOrHideVideo() {
    var x = document.getElementById("textEditVid");
    if (x.style.display === "none") {
      x.style.display = "inline-block";
      document.getElementById("vidLink1").textContent= "Hide Video";
    } else {
      x.style.display = "none";
      document.getElementById("vidLink1").textContent = "Show Video";
    }
}