<script>
  import Card from './Card.svelte'

  export let job
</script>

<Card data-sveltekit-prefetch>
  <slot slot="company">{job.company}</slot>
  <slot slot="title">{job.title}</slot>
  <div slot="description" class="prose dark:prose-invert">
    {@html job.preview.html}
  </div>
</Card>

<style>
  .prose > :global(p) {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
