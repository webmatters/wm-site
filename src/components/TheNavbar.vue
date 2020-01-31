`<template>
  <header
    class="container mx-auto bg-white md:flex md:justify-between md:px-8 md:py-6 md:items-center"
  >
    <div class="flex items-center justify-between px-8 py-6 md:p-0">
      <!-- Brand Logo -->
      <div>
        <g-link to="/">
          <g-image
            src="~/assets/img/brand.svg"
            alt="Web Matters logo"
            width="250"
          />
        </g-link>
      </div>
      <!-- Mobile Menu Toggler -->
      <div class="md:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block focus:outline-none text-gray-900 hover:text-gray-600 active:text-gray-900"
        >
          <menu-icon v-if="!isOpen" class="fill-current" />
          <close-icon v-else class="fill-current" />
        </button>
      </div>
    </div>

    <!-- Nav links -->
    <ul
      :class="isOpen ? 'block' : 'hidden'"
      class="px-8 pb-4 md:flex md:items-center md:p-0 font-semibold uppercase"
    >
      <li>
        <search-input
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
        />
      </li>
      <li>
        <a
          v-if="$route.path === '/'"
          href="/#services"
          v-scroll-to="'#services'"
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
          >Services</a
        >
        <g-link
          v-else
          to="/#services"
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
        >
          Services
        </g-link>
      </li>
      <li>
        <a
          v-if="$route.path === '/'"
          href="/#about"
          v-scroll-to="'#about'"
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
          >About Us</a
        >
        <g-link
          v-else
          to="/#about"
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
        >
          About Us
        </g-link>
      </li>
      <li>
        <g-link
          to="/blog"
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
        >
          Blog
        </g-link>
      </li>
      <li>
        <a
          v-if="$route.path === '/'"
          href="/#contact"
          v-scroll-to="'#contact'"
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
          >Contact Us</a
        >
        <g-link
          v-else
          to="/#about"
          class="block md:ml-6 mt-2 sm:mt-0 text-primary hover:text-secondary"
        >
          Contact Us
        </g-link>
      </li>
    </ul>
  </header>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import SearchInput from '@/components/SearchInput.vue'

export default {
  components: {
    MenuIcon,
    CloseIcon,
    SearchInput,
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
