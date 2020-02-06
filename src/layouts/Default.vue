<template>
  <div class="flex flex-col">
    <the-navbar class="md:sticky md:top-0" />
    <transition name="slide-fade" appear>
      <main class="flex-grow">
        <slot />
      </main>
    </transition>
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>
