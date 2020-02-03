`<template>
  <header
    class="container mx-auto bg-white md:flex md:justify-between md:px-8 md:py-6 md:items-center"
  >
    <div class="flex items-center justify-between px-8 py-6 md:p-0">
      <!-- Brand Logo -->
      <div>
        <g-link to="/">
          <g-image src="~/assets/img/brand.svg" alt="Web Matters logo" class="w-full" />
        </g-link>
      </div>
      <!-- Mobile Menu Toggler -->
      <div class="md:hidden ml-12">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block focus:outline-none text-primary hover:text-secondary active:text-primary"
        >
          <menu-icon v-if="!isOpen" class="fill-current" :size="32" />
          <close-icon v-else class="fill-current" :size="32" />
        </button>
      </div>
    </div>

    <!-- Nav links -->
    <transition name="fade">
      <ul
        :class="isOpen ? 'block' : 'hidden'"
        class="px-8 pb-4 md:flex md:items-center md:p-0 text-secondary text-2xl"
      >
        <li>
          <search-input class="block md:ml-6 my-3 md:my-0" />
        </li>
        <li>
          <a
            v-if="$route.path === '/'"
            href="/#services"
            v-scroll-to="'#services'"
            class="nav-link block md:ml-6 mt-3 md:mt-0 md:ml-8"
          >Services</a>
          <g-link v-else to="/#services" class="nav-link block md:ml-6 mt-3 md:mt-0">Services</g-link>
        </li>
        <li>
          <a
            v-if="$route.path === '/'"
            href="/#about"
            v-scroll-to="'#about'"
            class="nav-link block md:ml-6 mt-3 md:mt-0"
          >Why Web Matters?</a>
          <g-link v-else to="/#about" class="nav-link block md:ml-6 mt-3 md:mt-0">Why Web Matters?</g-link>
        </li>
        <li>
          <g-link to="/blog" class="nav-link block md:ml-6 mt-3 md:mt-0">Blog</g-link>
        </li>
        <li>
          <a
            v-if="$route.path === '/'"
            href="/#contact"
            v-scroll-to="'#contact'"
            class="nav-link block md:ml-6 mt-3 md:mt-0"
          >Contact</a>
          <g-link v-else to="/#about" class="nav-link block md:ml-6 mt-3 md:mt-0">Contact</g-link>
        </li>
      </ul>
    </transition>
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
.nav-link:focus:after {
  content: '';

  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;

  border-width: 0 0 2px;
  border-style: solid;
  border-color: #ed8936;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter {
  opacity: 0;
}
</style>
