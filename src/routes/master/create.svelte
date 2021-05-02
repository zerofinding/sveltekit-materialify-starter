<script context="module">
  export const prerender = true;
</script>

<script>
  import Counter from '$lib/components/Counter/index.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import Default from '$lib/components/Default.svelte'

  const items = [
    { text: 'Master', href: '/' },
    { text: 'Create', disabled: true }
  ]
</script>

<svelte:head>
  <title>SvltKit Materialify - Create Master</title>
</svelte:head>

<Breadcrumbs {items} />

<Default />
