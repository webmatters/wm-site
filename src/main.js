// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

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
    class: 'antialiased leading-normal tracking-normal, min-h-full',
  }

  head.bodyAttrs = {
    class: 'min-h-full font-body bg-gray-100',
  }

  head.meta.push({
    name: 'keywords',
    content:
      'web, design, development, marketing, consulting, raleigh, Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
  })

  head.meta.push({
    name: 'description',
    content: 'Web Matters',
  })

  head.meta.push({
    name: 'author',
    content: 'Andrew Smith',
  })

  head.link.push({
    rel: 'stylesheet',
    // href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700',
    href: 'https://fonts.googleapis.com/css?family=Lato:400,700',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700',
  })
}
