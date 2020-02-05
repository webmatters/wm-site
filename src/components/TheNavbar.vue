`<template>
  <header
    class="container mx-auto bg-white md:flex md:justify-between md:px-8 md:py-6 md:items-center"
  >
    <div class="p-4">
      <!-- Brand Logo -->
      <div>
        <g-link to="/">
          <g-image src="~/assets/img/brand.svg" alt="Web Matters logo" class="w-full" />
        </g-link>
      </div>
      <!-- Email address -->
      <div class="mt-6 flex items-center">
        <email-icon class="text-primary" />
        <div class="ml-4">
          <div class="font-semibold">Email</div>
          <div class="text-gray-700 text-sm">andrew.smith@webmatters.io</div>
        </div>
      </div>
      <!-- Call to Action button -->
      <div class="mt-4">
        <a
          v-if="$route.path === '/'"
          href="/#contact"
          v-scroll-to="'#contact'"
          class="block btn-grad text-center rounded-full text-white py-2 px-4 md:ml-6 mt-3 md:mt-0 uppercase"
        >Free Strategy Session</a>
        <g-link
          v-else
          to="/#contact"
          class="block btn-grad text-center rounded-full text-white py-2 px-4 md:ml-6 mt-3 md:mt-0 uppercase"
        >Free Strategy Session</g-link>
      </div>
    </div>
    <!-- End pre-Navbar section -->

    <div class="flex items-center bg-primary justify-between px-4 py-6 md:p-0">
      <!-- Mobile Menu Toggler -->
      <div class="md:hidden flex items-center justify-between">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="focus:outline-none text-gray-400 hover:text-gray-100"
        >
          <menu-icon v-if="!isOpen" class="fill-current" :size="32" />
          <close-icon v-else class="fill-current" :size="32" />
        </button>
        <div class="ml-2 uppercase text-xl text-gray-400">Menu</div>
      </div>
      <search-input class="md:ml-6 md:my-0 text-gray-400" />
    </div>

    <!-- Nav links -->
    <transition name="fade">
      <ul
        :class="isOpen ? 'block' : 'hidden'"
        class="px-8 md:flex md:items-center md:p-0 text-secondary text-lg"
      >
        <li class="mt-4">
          <a
            v-if="$route.path === '/'"
            href="/#services"
            v-scroll-to="'#services'"
            class="nav-link hover:text-primary block md:mt-0 md:ml-8"
          >Services</a>
          <g-link v-else to="/#services" class="nav-link hover:text-primary block md:mt-0">Services</g-link>
        </li>
        <li class="mt-2">
          <a
            v-if="$route.path === '/'"
            href="/#about"
            v-scroll-to="'#about'"
            class="nav-link hover:text-primaryblock md:ml-6 md:mt-0"
          >About</a>
          <g-link
            v-else
            to="/#about"
            class="nav-link hover:text-primary block md:ml-6 md:mt-0"
          >About</g-link>
        </li>
        <li class="mt-2">
          <g-link to="/blog" class="nav-link hover:text-primary block md:ml-6 md:mt-0">Blog</g-link>
        </li>
        <li class="mt-2">
          <a
            v-if="$route.path === '/'"
            href="/#contact"
            v-scroll-to="'#contact'"
            class="nav-link hover:text-primary block md:ml-6 md:mt-0"
          >Contact</a>
          <g-link
            v-else
            to="/#contact"
            class="nav-link hover:text-primary block md:ml-6 md:mt-0"
          >Contact</g-link>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'
import SearchInput from '@/components/SearchInput.vue'

export default {
  components: {
    MenuIcon,
    CloseIcon,
    EmailIcon,
    SearchInput,
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  position: relative;
}
.nav-link:focus {
  color: #1a202c;
}
.nav-link:hover:after {
  content: '';

  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;

  border-width: 0 0 2px;
  border-style: solid;
  border-color: #ed8936;
}
.nav-link:focus:active:after {
  content: '';

  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;

  border-width: 0 0 2px;
  border-style: solid;
  border-color: #ed8936;
}
.btn-grad {
  background-image: linear-gradient(to right, #ff512f 0%, #f09819 100%);
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter {
  opacity: 0;
}
</style>
