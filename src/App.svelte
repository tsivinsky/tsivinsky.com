<script lang="ts">
  import SocialLink from "./components/SocialLink.svelte";

  interface ISocialLink {
    text: string;
    url: string;
    bgColor: string;
    textColor: string;
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
    {
      text: "Email",
      url: "mailto:daniil@tsivinsky.com",
      bgColor: "#cccccc",
      textColor: "#ffffff",
    },
  ];
</script>

<div class="container">
  <div class="inner-block">
    <img
      src="me.jpg"
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
    <div class="social-links">
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
    </div>
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
      .social-links {
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
