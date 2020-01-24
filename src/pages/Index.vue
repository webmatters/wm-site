<template>
  <Layout>
    <!-- Hero section-->
    <div class="hero" :class="{'bg-white':(theme === 'theme-light')}">
      <div class="container mx-auto flex flex-col sm:flex-row justify-between py-20 mt-24 px-8">
        <div class="w-full sm:w-3/5 text-center sm:text-left">
          <h1
            class="text-5xl font-bold leading-none tracking-tight"
          >Web Services to Propel Your Business</h1>
          <div class="mt-6 leading-normal text-xl font-normal">
            <div>
              Thoughtfully designed and
              meticulously developed apps driven by
              expert product strategy and marketing.
              <span
                class="font-semibold"
              >All reasonably priced for entrepreneurs</span>.
            </div>
            <a
              href="/#contact"
              v-scroll-to="'#contact'"
              class="inline-block hero-button hover:bg-green-500 text-white hover:text-white text-sm font-semibold tracking-wide shadow-lg rounded-full cursor-pointer mt-16 px-5 py-3"
            >View Our Services</a>
          </div>
        </div>
        <div class="mt-8 sm:mt-0">
          <g-image src="../../static/moving_forward.svg" alt="hero" class="mx-auto sm:mx-0" />
        </div>
      </div>
    </div>
    <!-- end hero -->

    <div class="container mx-auto">
      <div class="text-xl sm:text-3xl font-semibold text-center">
        When you work with Web Matters you get:
        <ul class="mt-4 text-lg sm:text-xl font-normal">
          <li class="checkmark mb-6">
            A modern, high-performance app built with the latest web
            technologies
          </li>
          <li
            class="checkmark mb-6"
          >Marketing strategy from experts with MBAs and decades of experience</li>
          <li class="checkmark mb-6">
            User Experience Design (UX), SEO, and Social Media Marketing
            Best-Practices
          </li>
          <li class="checkmark mb-6">
            Fast, reliable, and scalable cloud hosting on AWS, Heroku, and
            Netlify
          </li>
          <li
            class="checkmark mb-6"
          >Continuous user testing and iteration using Lean Startup practices</li>
        </ul>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div
        class="services container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 my-12 relative"
      >
        <h2 class="font-bold mb-6 text-3xl" id="services">Services</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>
        <ul class="text-lg sm:text-xl">
          <li class="mb-6">
            <div>Web Applications</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="mb-6">
            <div>Websites</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="mb-6">
            <div>Mobile Apps</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="mb-6">
            <div>Business Intelligence</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
        </ul>
      </div>
      <!-- end services -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6 text-3xl" id="about">About</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/selfie.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div class="flex-1 text-lg sm:text-xl ml-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            architecto minus molestias iusto ducimus fuga quo quia libero
            dignissimos, fugiat modi assumenda debitis laboriosam.
          </div>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Get a Free 30-minute Strategy Session:</h2>
          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>
          <div class="mb-12">
            We'll work with you to understand the problem you're trying to solve
            and recommend a high-level strategy that leverages the power of Web.
          </div>

          <div class="text-lg sm:text-lg mb-16">
            <form
              name="contact"
              method="post"
              v-on:submit.prevent="handleContactSubmit"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="mb-12"
            >
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:
                      <input name="bot-field" />
                    </label>
                  </p>
                  <label class="block mb-2 text-copy-primary" for="name">Full Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Eileen Dover"
                    v-model="contactFormData.name"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-indigo-500 mb-2 p-4"
                    required
                  />
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    v-model="contactFormData.email"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-indigo-500 mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-indigo-500 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  v-model="contactFormData.message"
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <button
                  type="submit"
                  class="block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-us -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
  data() {
    return {
      contactFormData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    handleContactSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.contactFormData,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error))
    },
  },
}
</script>

<style scoped>
.hero-button {
  background-image: linear-gradient(90deg, #1caecd, #1ccdaa);
}
</style>