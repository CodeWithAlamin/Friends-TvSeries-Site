export default function () {
  return `
    <div class="container">
      <div class="about-container">
        <div class="about-profile-photo">
          <img src="./images/my-photo.webp" alt="Alamin's photo" />
        </div>

        <section>
          <h1 class="primary-heading">About This Project 🌟</h1>
          <p class="explanation">
            Welcome to the Friends TV Series Viewer! This project was born from a simple desire: 
            to create a clean, ad-free platform for enjoying the iconic show "Friends." 
            Frustrated with intrusive ads and pop-ups on other streaming sites, 
            I developed this minimalist space where fellow fans can enjoy the series without interruptions.
          </p>

          <h2 class="secondary-heading">Behind the Scenes</h2>
          <p class="explanation">
            This personal project helped me refine my JavaScript skills and apply my web development 
            knowledge in a practical context. From responsive UI design to implementing dynamic content 
            loading and custom routing, each component presented valuable learning opportunities.
          </p>

          <h2 class="secondary-heading">Technical Approach</h2>
          <p class="explanation">
            The site is built entirely with HTML, CSS (Sass), and Vanilla JavaScript - deliberately 
            avoiding frameworks to challenge myself and deepen my understanding of core web development 
            principles. This approach allowed me to implement custom state management, SPA routing, 
            and efficient DOM manipulation from scratch.
          </p>

          <h2 class="secondary-heading">Content Sources</h2>
          <p class="explanation">
            Video links are sourced from publicly available third-party APIs (specifically crowcast.x10.mx 
            and vidsrc.cc). This project serves as an interface to access this content and does not host, 
            store, or distribute any copyrighted material.
          </p>
          
          <h2 class="secondary-heading">Legal Disclaimer</h2>
          <p class="explanation">
            This is a non-commercial, educational project created for personal use and learning purposes only. 
            All "Friends" content, characters, and related intellectual property belong to Warner Bros. 
            Entertainment Inc. This site is not affiliated with, endorsed by, or sponsored by Warner Bros., 
            NBC, or any entities associated with the "Friends" TV series.
          </p>
          <p class="explanation">
            If you are a copyright owner and believe content accessible through this interface infringes on 
            your rights, please contact me immediately so I can address your concerns.
          </p>
        </section>

        <section>
          <h1 class="primary-heading">About Me 🙋‍♂️</h1>
          <p class="explanation">
            Hello, I'm Alamin, a web development enthusiast passionate about creating 
            interactive, user-centric experiences. This project showcases both my technical skills 
            and my love for the "Friends" series. I enjoy building practical solutions to everyday 
            challenges while continuously expanding my development expertise.
          </p>

          <h2 class="secondary-heading">Connect With Me</h2>
          <p class="explanation">
            I'd love to connect with fellow developers and "Friends" fans! Find me on 
            <a
              href="https://www.linkedin.com/in/CodeWithAlamin/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >,
            <a
              href="https://twitter.com/CodeWithAlamin"
              target="_blank"
              rel="noopener noreferrer"
              >Twitter</a
            >,
            or
            <a
              href="https://github.com/CodeWithAlamin"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            > to explore more of my projects and get in touch.
          </p>
        </section>
      </div>
    </div>
  `;
}
