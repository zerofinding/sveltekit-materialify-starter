<script>
  import { setContext } from 'svelte'

  import { page } from '$app/stores'

  import {
    Overlay,
    MaterialApp
  } from 'svelte-materialify'

  let feathericons = {
    light: '/dist/feathericons/sun.svg',
    dark: '/dist/feathericons/moon.svg',
  }

  let theme = 'light'
  let svgColorMode = 'icolorlightmode'
  let svgIconMode = '/dist/feathericons/moon.svg'
  let svgIconSubFin = '/dist/feathericons/chevron-down.svg'

  const toggleTheme = () => {
    if (theme === 'light') {
      theme = 'dark'
      svgColorMode = 'icolordarkmode'
      svgIconMode = feathericons.light
    } else {
      theme = 'light'
      svgColorMode = 'icolorlightmode'
      svgIconMode = feathericons.dark
    }
  }

  import AppBar from '$lib/components/AppBar.svelte'
  import NavigationDrawer from '$lib/components/NavigationDrawer.svelte'
  let active = false
  
  const toggleNavigation = () => {
    active = !active
  }

  setContext('toggleNavigation', toggleNavigation)
  setContext('toggleTheme', toggleTheme)
</script>

<MaterialApp {theme}>
  <AppBar
  {svgColorMode}
  {svgIconMode} />

  <div style="position:relative;min-height:500px;padding-top: 55px">

    <NavigationDrawer
    {active}
    {svgColorMode}
    {svgIconSubFin} />
    
    {#key $page.path}
      <slot />
    {/key}

    <Overlay {active} absolute on:click={toggleNavigation} index={1} />
  </div>

</MaterialApp>
