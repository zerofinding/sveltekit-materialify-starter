<script context="module">
  export const prerender = true;
</script>

<script>
  import Counter from '$lib/components/Counter/index.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import Default from '$lib/components/Default.svelte'

  const items = [
    { text: 'Finnance', href: '/' },
    { text: 'Create', disabled: true }
  ]
</script>

<svelte:head>
  <title>SvltKit Materialify - Create Finnance</title>
</svelte:head>

<Breadcrumbs {items} />

<Default />
