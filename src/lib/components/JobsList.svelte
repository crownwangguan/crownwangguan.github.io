<script>
  import JobDate from '$lib/components/JobDate.svelte'
  import JobDescription from '$lib/components/JobDescription.svelte'
  export let jobs
</script>

<div class="flex flex-col gap-6 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
  {#each jobs as job}
    <article class="grid items-start grid-cols-4 gap-8">
      <JobDate class="flex-col text-sm" {job} />
      <div class="col-span-4 md:col-span-3">
        <JobDescription {job} />
      </div>
    </article>
  {/each}
</div>
