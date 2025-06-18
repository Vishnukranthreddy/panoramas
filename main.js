const panoramaImage = new PANOLENS.ImagePanorama("pvr_lobby.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.1,
  controlBar: false,
});

viewer.add(panoramaImage);