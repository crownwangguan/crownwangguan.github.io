import { browser } from '$app/environment'
import { format } from 'date-fns'
import { parse } from 'node-html-parser'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`jobs can only be imported server-side`)
}

// Get all jobs and add metadata
export const jobs = Object.entries(import.meta.glob('/jobs/**/*.md', { eager: true }))
  .map(([filepath, post]) => {
    const html = parse(post.default.render().html)
    const preview = post.metadata.preview ? parse(post.metadata.preview) : html.querySelector('p')

    return {
      ...post.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),

      // whether or not this file is `my-post.md` or `my-post/index.md`
      // (needed to do correct dynamic import in posts/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),

      company: post.metadata.company,
      // format date as yyyy-MM-dd
      startDate: post.metadata.startDate
        ? format(
            // offset by timezone so that the date is correct
            addTimezoneOffset(new Date(post.metadata.startDate)),
            'yyyy-MM-dd'
          )
        : undefined,

      endDate: post.metadata.endDate
        ? format(
            // offset by timezone so that the date is correct
            addTimezoneOffset(new Date(post.metadata.endDate)),
            'yyyy-MM-dd'
          )
        : undefined,

      preview: {
        html: preview.toString(),
        // text-only preview (i.e no html elements), used for SEO
        text: preview.structuredText ?? preview.toString()
      }
    }
  })
  // sort by date
  .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
  // add references to the next/previous post
  .map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1],
    previous: allPosts[index + 1]
  }))

function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}
