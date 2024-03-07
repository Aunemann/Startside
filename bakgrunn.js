(function() {

  var images = [
    "https://i.imgur.com/F7aMj0m.png",
    "https://i.imgur.com/GH8pCEG.png",
    "https://i.imgur.com/gnqoRMg.png"
  ];

  var imgCount = images.length;

  var randNumber = Math.floor((Math.random() * imgCount) + 1);

  imgURL = "url('" + images[randNumber - 1] + "')";

  var body = document.getElementById('collection-542ba4a1e4b032a0dde82b31');
  body.style.backgroundImage = imgURL;
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
}());
