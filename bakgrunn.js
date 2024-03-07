document.addEventListener("DOMContentLoaded", function() {
    var images = [
      "https://i.imgur.com/fgSn8vr.png",
      "https://i.imgur.com/GH8pCEG.png",
      "https://i.imgur.com/kdVXbpw.png"
    ];
  
    var imgCount = images.length;
  
    var randNumber = Math.floor(Math.random() * imgCount);
  
    var imgURL = "url('" + images[randNumber] + "')";
  
    var body = document.getElementById('collection-542ba4a1e4b032a0dde82b31');
    body.style.backgroundImage = imgURL;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
  });