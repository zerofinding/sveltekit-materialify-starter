<script>
  import { getContext } from 'svelte'

  import { scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'

  import {
    AppBar,
    Button,
  } from 'svelte-materialify'

  export let svgColorMode
  export let svgIconMode

  const toggleNavigation = getContext('toggleNavigation')
  const toggleTheme = getContext('toggleTheme')

  import Menu from '$lib/components/Menu.svelte'
</script>

<AppBar fixed style="width: 100%">
  <div slot="icon">
    <Button
    fab
    depressed
    on:click={toggleNavigation}>
      <img class={svgColorMode} src="/dist/feathericons/menu.svg">
    </Button>
  </div>
  <span slot="title">SvltKit Materialify</span>
  <div style="flex-grow:1" />
  <Button
  fab
  depressed
  on:click="{toggleTheme}">
    <img class={svgColorMode} src={svgIconMode} />
  </Button>

  <Menu {svgColorMode} />
</AppBar>
