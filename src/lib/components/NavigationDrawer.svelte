<script>
  import { getContext } from 'svelte'

  import { NavigationDrawer, List, ListGroup, ListItem } from 'svelte-materialify';
  
  export let active
  export let svgColorMode
  export let svgIconSubFin

  const toggleNavigation = getContext('toggleNavigation')
</script>

<NavigationDrawer absolute {active} style="padding-top: 60px">
  <List>
    <ListItem>
      <a href='/' title="some-link" alt="some-link" on:mouseup={toggleNavigation}>
        <span style="height: 28px;display: inline-block;">
          <img class={svgColorMode} src="/dist/feathericons/home.svg">
        </span>
        <span style="padding-left: 8px;width: 100%;display: inline-block;top: 16px;position: absolute;">Dashboard</span>
      </a>
    </ListItem>
    <ListGroup offset={20}>
      <span slot="prepend">
        <img class={svgColorMode} src="/dist/feathericons/database.svg">
      </span>
      <span
      slot="activator"
      style="padding-left: 10px;">Master Data</span>
      <span slot="append">
        <img class="icorotate {svgColorMode}" src={svgIconSubFin}>
      </span>
      <ListItem>
        <a href="/master/create" title="some-link" alt="some-link" on:mouseup={toggleNavigation}>
          <span style="width: 100%;display: inline-block;">Create</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="/" title="some-link" alt="some-link" on:mouseup={toggleNavigation}>
          <span style="width: 100%;display: inline-block;">Read</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="/" title="some-link" alt="some-link" on:mouseup={toggleNavigation}>
          <span style="width: 100%;display: inline-block;">Write</span>
        </a>
      </ListItem>
    </ListGroup>
    <ListGroup offset={20}>
      <span slot="prepend">
        <img class={svgColorMode} src="/dist/feathericons/dollar-sign.svg">
      </span>
      <span
      slot="activator"
      style="padding-left: 10px;">Finnance</span>
      <span slot="append">
        <img class="icorotate {svgColorMode}" src={svgIconSubFin}>
      </span>
      <ListItem>
        <a href="/finnance/create" title="some-link" alt="some-link" on:mouseup={toggleNavigation}>
          <span style="width: 100%;display: inline-block;">Create</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="/" title="some-link" alt="some-link" on:mouseup={toggleNavigation}>
          <span style="width: 100%;display: inline-block;">Read</span>
        </a>
      </ListItem>
    </ListGroup>
  </List>
</NavigationDrawer>