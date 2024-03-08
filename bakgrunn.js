(function() {

  var images = [
      "https://i.imgur.com/F7aMj0m.png",
      "https://i.imgur.com/GH8pCEG.png",
      "https://i.imgur.com/2Tue34r.png",
      "https://i.imgur.com/iWQ6YKo.png",
      "https://i.imgur.com/gnqoRMg.png",
      "https://i.imgur.com/fgSn8vr.png",
      "https://i.imgur.com/NFjJy4m.png",
      "https://i.imgur.com/sWN2w4h.png",
      "https://i.imgur.com/7Wzb6bC.png",
      "https://i.imgur.com/lYjgZjF.jpg"

  ];

  var imgCount = images.length;

  var randNumber = Math.floor((Math.random() * imgCount) + 1);

  imgURL = "url('" + images[randNumber - 1] + "')";

  var body = document.getElementById('collection-542ba4a1e4b032a0dde82b31');
  body.style.backgroundImage = imgURL;
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
}());
