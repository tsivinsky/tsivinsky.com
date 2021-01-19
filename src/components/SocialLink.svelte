<script lang="ts">
  export let text: string;
  export let url: string;
  export let bgColor: string;
  export let textColor: string;

  const isEmail = Boolean(text.startsWith("mailto"));

  const cssVars = `--bg-color: ${bgColor}; --text-color: ${textColor}`;
</script>

<a
  class="social-link"
  style={cssVars}
  href={url}
  rel={isEmail ? "noopener norefferer" : ""}
  target="_blank">
  {text}
</a>

<style lang="scss">
  .social-link {
    width: 70%;
    margin-bottom: 15px;
    text-decoration: none;
    color: #000000;
    border: 2px solid;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
    font-size: larger;
    cursor: pointer;
    transition: all 0.3s ease;
    transition-property: background-color, border-color, box-shadow;
    &:hover {
      background-color: var(--bg-color);
      border-color: transparent;
      color: var(--text-color);
    }

    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
</style>
