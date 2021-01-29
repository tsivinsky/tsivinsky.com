<script lang="ts">
  export let name: string;
  export let description: string;
  export let homepage: string;
  export let github: string;
</script>

<div class="project">
  <div class="info">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
  <div class="links">
    {#if homepage}
      <a href={homepage} target="_blank" rel="norefferer noopener">Homepage</a>
    {/if}
    <a href={github} target="_blank" rel="norefferer noopener">Repository</a>
  </div>
</div>

<style lang="scss">
  .project {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid transparent;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 3px 9px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    &:not(:first-child) {
      margin-top: 20px;
    }
    &:hover {
      box-shadow: 0 6px 10px 5px rgba(0, 0, 0, 0.1);
    }
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #000;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;
        transition-property: border-bottom-color;
        &:hover {
          border-bottom-color: #000;
        }
      }
    }

    @media screen and (max-width: 640px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      .links {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
</style>
