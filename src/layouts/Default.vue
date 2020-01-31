<template>
  <div class="flex flex-col">
    <the-navbar />
    <div class="flex-grow">
      <slot />
    </div>
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

<style src="../css/main.css" />
