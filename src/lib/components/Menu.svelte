<script>
  import { scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'

  import {
    Menu,
    List,
    ListItem,
    Button,
  } from 'svelte-materialify'

  export let svgColorMode
</script>

<Menu right transition={scale} inOpts={{ easing: elasticOut, duration: 500 }}>
  <div slot="activator">
    <Button fab depressed>
      <img class={svgColorMode} src="/dist/feathericons/settings.svg">
    </Button>
  </div>
  <List>
    <ListItem>
      <a href='/master/create' title="some-link" alt="some-link">
        <span style="height: 28px;display: inline-block;">
          <img class={svgColorMode} src="/dist/feathericons/user.svg">
        </span>
        <span style="padding-left: 10px;top: -6px;position: relative">Account</span>
      </a>
    </ListItem>
    <ListItem>
      <a href='/' title="some-link" alt="some-link">
        <span style="height: 28px;display: inline-block;">
          <img class={svgColorMode} src="/dist/feathericons/log-out.svg">
        </span>
        <span style="padding-left: 10px;top: -6px;position: relative">Logout</span>
      </a>
    </ListItem>
  </List>
</Menu>
