<template>
  <Layout>
    <go-top bg-color="#718096" :size="50"></go-top>
    <section class="hero-img">
      <div class="container md:flex md:px-4 mx-auto md:py-16 text-white">
        <div
          class="py-32 text-center md:w-1/2 md:text-left px-4 md:px-0 md:py-8"
        >
          <h1 class="leading-tight text-4xl md:text-5xl font-semibold">
            Making the Web Work for Entrepreneurs
          </h1>
          <h2
            class="mt-4 tracking-wider text-sm md:text-lg font-semibold uppercase"
          >
            Find out what you're missing.
          </h2>
          <button type="button" class="mt-16 btn-grad rounded-full">
            <a
              v-if="$route.path === '/'"
              href="#/services"
              v-scroll-to="'#services'"
              class="btn-grad rounded-full text-white text py-3 px-6 inline-block"
              >Our Services</a
            >
          </button>
        </div>
      </div>
    </section>
    <!-- end of Hero -->

    <section id="about" class="py-12 md:py-24">
      <div class="container mx-auto text-center">
        <h2 class="uppercase text-4xl text-primary">Why Web Matters?</h2>
        <why-web-matters class="mt-12" />
      </div>
    </section>
    <!-- end of About -->

    <section id="services" class="bg-primary">
      <div
        class="container mx-auto text-center py-12 md:py-24 md:px-8 text-white"
      >
        <h2 class="uppercase text-4xl tracking-wider font-light">Services</h2>
        <services-matrix class="mt-8" />
      </div>
    </section>
    <!-- end of Services -->

    <section id="contact" class="bg-gray-900">
      <div class="container mx-auto md:px-8">
        <contact-form />
      </div>
    </section>
    <!-- Contact -->
  </Layout>
</template>

<script>
import GoTop from '@inotom/vue-go-top'
import ServicesMatrix from '@/components/ServicesMatrix.vue'
import WhyWebMatters from '@/components/WhyWebMatters.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
  components: {
    GoTop,
    ServicesMatrix,
    ContactForm,
    WhyWebMatters,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style scoped>
.btn-grad {
  background-image: linear-gradient(to right, #ff512f 0%, #f09819 100%);
}
.hero-img {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(~@/assets/img/hero.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: fixed;
  min-height: 50vh;
}
</style>
