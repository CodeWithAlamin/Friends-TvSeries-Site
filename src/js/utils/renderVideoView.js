import videoView from "../views/videoView";

export default function (data) {
  // const video = document.createElement("iframe");
  // video.src = data.vidUrl;
  // video.allowFullscreen = true;
  // video.id = "my-player";

  const layoutdata = videoView(data);
  const container = document.getElementById("App");

  container.style.transform = "translateX(1rem)";
  container.style.opacity = "0";
  window.scrollTo(0, 0);
  setTimeout(() => {
    container.innerHTML = layoutdata;

    // const videoContainer = container.querySelector(".video-container");
    // videoContainer.appendChild(video);

    container.style.transform = "translateX(0)";
    container.style.opacity = "1";
  }, 100);
}

