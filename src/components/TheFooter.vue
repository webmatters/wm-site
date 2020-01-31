<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center">
        <!-- Social media icons -->
        <div class="w-full lg:w-6/12 px-4 ">
          <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Find us on any of these platforms:
          </h5>
          <div class="my-4">
            <button
              class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none mr-2 pl-2"
              type="button"
            >
              <a href="https://twitter.com/thewebmatters" target="_blank">
                <twitter-icon />
              </a></button
            ><button
              class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 pl-2"
              type="button"
            >
              <a href="https://www.facebook.com" target="_blank"
                ><facebook-icon
              /></a></button
            ><button
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 pl-2"
              type="button"
            >
              <a href="https://www.dribbble.com" target="_blank"
                ><dribbble-icon
              /></a></button
            ><button
              class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 pl-2"
              type="button"
            >
              <a href="https://github.com/webmatters/wm-site" target="_blank"
                ><github-icon
              /></a>
            </button>
          </div>
        </div>
        <!-- Links -->
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top">
            <div class="w-full lg:w-4/12 px-4 mx-auto">
              <span class="block uppercase text-gray-600 font-semibold mb-2"
                >Useful Links</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 "
                    href="#"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 "
                    href="#"
                    >Services</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} Web Matters, LLC
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import DribbbleIcon from 'vue-material-design-icons/Dribbble.vue'
import GithubIcon from 'vue-material-design-icons/GithubCircle.vue'
export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    DribbbleIcon,
    GithubIcon,
  },
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>
