<script lang="ts">
  import Project from "./components/Project.svelte";
  import SocialLink from "./components/SocialLink.svelte";

  interface ISocialLink {
    text: string;
    url: string;
    bgColor: string;
    textColor: string;
  }

  interface IProject {
    name: string;
    description: string;
    homepage?: string;
    github: string;
  }

  const socialLinks: Array<ISocialLink> = [
    {
      text: "GitHub",
      url: "https://github.com/tsivinsky",
      bgColor: "#24292e",
      textColor: "#ffffff",
    },
    {
      text: "Twitter",
      url: "https://twitter.com/daniilcodes",
      bgColor: "#1DA1F2",
      textColor: "#ffffff",
    },
  ];

  // TODO: Add projects here
  const projects: Array<IProject> = [
    {
      name: "Tic Tac Toe",
      description: "Simple Tic Tac Toe game written in vanilla JavaScript",
      homepage: "https://tic-tac-toe.tsivinsky.com",
      github: "https://github.com/tsivinsky/tic-tac-toe",
    },
    {
      name: "Svelte To-Do",
      description: "My first Svelte app",
      homepage: "https://svelte-todo.tsivinsky.com/",
      github: "https://github.com/tsivinsky/svelte-todo",
    },
    {
      name: "GitHub Profile",
      description: "GitHub Profile built with Svelte",
      homepage: "https://github-profile.tsivinsky.com/",
      github: "https://github.com/tsivinsky/github-profile",
    },
  ];

  const email = "daniil@tsivinsky.com";
</script>

<div class="container">
  <div class="inner-block">
    <img
      src="https://teenance.sirv.com/portfolio/me.jpg"
      alt="It's a me"
      class="avatar"
      width="200px"
      height="200px"
    />
    <h1 class="name">Daniil Tsivinsky</h1>
    <div class="bio">
      <p>I'm Junior Fullstack Developer based in Russia 🇷🇺.</p>
      <p>I love coding and playing video games.</p>
    </div>
    <div class="email">
      Email: <a href="mailto:{email}">{email}</a>
    </div>
    <section class="social-links">
      <h2>Social Media</h2>
      <div class="items">
        {#each socialLinks as link (link.url)}
          <SocialLink
            text={link.text}
            url={link.url}
            bgColor={link.bgColor}
            textColor={link.textColor}
          />
        {/each}
      </div>
    </section>
    <section class="projects">
      <h2>Projects</h2>
      <div class="items">
        {#each projects as project}
          <Project {...project} />
        {/each}
      </div>
    </section>
  </div>
</div>

<style lang="scss">
  .container {
    width: 50%;
    margin: 0 auto;
    line-height: 2em;
    .inner-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      .avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 10px;
        object-fit: cover;
        border-radius: 50%;
      }
      .name {
        text-align: center;
      }
      .bio {
        text-align: center;
      }
      .email {
        a {
          text-decoration: none;
          color: #000000;
          border-bottom: 2px solid;
          font-size: 13pt;
        }
      }
      section {
        width: 60%;
        margin: 0 auto;
        h2 {
          text-align: center;
        }
        .items {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    @media screen and (max-width: 640px) {
      width: 80%;
      .inner-block {
        .social-links {
          width: 80%;
        }
      }
    }
  }
</style>
