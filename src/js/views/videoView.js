export default function (data) {
  const innerMarkup = data.season.episodes
    .map(
      (curE) => `
  <a href="#episode${curE.episode}" 
  data-name="Episode ${curE.episode}" 
  data-dest="season${data.season.season}-episode${curE.episode}" 
  class="episode-cards__card">
    <div class="card-contents ${
      data.episode.episode === curE.episode ? "playing" : ""
    }">
      <div class="thumbnail">
        <img src="../../thumbnails/S${data.season.season}/S${
          data.season.season
        }E${curE.episode}.jpg" alt="Episode ${curE.episode}" />
      </div>
      
      <h2 class="title">${curE.title}</h2>
      <h3 class="title-secondary">Episode: ${curE.episode}</h3>
      <span class="release-date">${curE.date}</span>
    </div>
  </a>
  `,
    )
    .join("");

  return `
<div class="container">
<section class="video-section">

  <div class="video-container"></div>

  <div class="video-info">
    <h1 class="video-title">${data.episode.title}</h1>
    <hr>
    <h2 class="video-secondary-title">Season: ${data.season.season} Episode: ${data.episode.episode}</h2>
    <span class="release-date">${data.episode.date}</span>
    <hr>
    <p class="video-description">${data.episode.description}</p>
  </div>
</section>

<section class="other-episode-section">
  <h2 class="primary-heading-episodde">Other Episodes</h2>

  <section class="episode-cards">
    ${innerMarkup}
  </section>
</section>
</div>
  `;
}

