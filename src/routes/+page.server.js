import { posts } from '$lib/data/posts'
import { jobs } from '$lib/data/jobs'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    posts: posts.slice(0, 5),
    jobs: jobs.slice(0, 5)
  }
}
