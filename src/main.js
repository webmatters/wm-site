import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease',
  })

  Vue.use(VueFuse)

  head.htmlAttrs = {
    lang: 'en',
    class:
      'font-body antialiased leading-normal tracking-normal, w-full, min-h-screen, text-gray-900',
  }

  head.meta.push({
    name: 'keywords',
    content:
      'web, design, development, marketing, consulting, raleigh, Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
  })

  head.meta.push(
    { charset: 'utf-8' },
    {
      name: 'author',
      content: 'Web Matters',
    },
    { name: 'description', content: "Raleigh's premier web services agency" },
    {
      name: 'keywords',
      content:
        'websites, mobile, applications, marketing, SEO, UX, design,web, design, development, consulting, raleigh, Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
    }
  )

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap',
  })
}
