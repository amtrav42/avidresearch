//function closes the popup image when x in top right is clicked//
function closeImagePopUp() {
  var popUpWrapper = document.getElementById("popUpWrapper");
  popUpWrapper.style.display = "none";
}
//function creates a popup//
function openImagePopUp(imageURL) {
  var popUpWrapper = document.getElementById("popUpWrapper");
  popUpWrapper.style.display = "flex";
  var popUpImage = document.getElementById("popUpImage");
  popUpImage.src = imageURL;
}
document.getElementById("newCityThumbnail").onclick = function() { openImagePopUp("images/squares/NewCity.jpg"); };
document.getElementById("morningtonThumbnail").onclick = function() { openImagePopUp("images/squares/mornington.jpg"); };
document.getElementById("popUpClose").onclick = closeImagePopUp;
