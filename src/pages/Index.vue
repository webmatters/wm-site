<template>
  <Layout>
    <!-- Hero -->
    <section class="bg-white">
      <!-- Hero Text -->
      <div class="container md:flex mx-auto mb-8 py-12 md:py-16">
        <div class="text-center md:w-1/2 md:text-left px-4 md:px-8 md:py-8 z-10">
          <h1
            class="leading-tight tracking-tight text-3xl md:text-4xl font-medium"
          >Launch Your Business</h1>
          <h2
            class="mt-4 text-xl text-gray-800"
          >Poorly-designed web initiatives do more harm than good. We apply battle-tested technology and business strategies to accelerate your growth.</h2>
          <button
            type="button"
            class="hidden md:inline-block mt-16 btn-grad rounded-full text-white py-3 px-6"
          >
            <a href="#">Free Strategy Session</a>
          </button>
        </div>
        <!-- Hero Image -->
        <div class="mt-8 px-4 md:-ml-8 md:w-1/2">
          <g-image src="~/assets/img/rocket-turtle.png" alt="Rocket turtle" class="z-0" />
        </div>
        <div class="text-center mt-20 md:hidden">
          <a
            href="#"
            type="=button"
            class="btn-grad rounded-full text-white py-2 px-4 inline-block"
          >Free Strategy Session</a>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="bg-primary">
      <div class="container mx-auto text-center py-12 md:py-24 md:px-8 text-white">
        <h2 class="uppercase text-4xl tracking-wider font-light">Services</h2>
        <services-matrix class="mt-12 md:mt-20" />
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-12">
      <div class="container mx-auto text-center">
        <h2 class="uppercase text-3xl">Why Web Matters?</h2>
        <div class="mt-8">Test text</div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="bg-gray-900">
      <div class="container mx-auto md:px-8">
        <contact-form />
      </div>
    </section>
  </Layout>
</template>

<script>
import ServicesMatrix from '@/components/ServicesMatrix.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
  components: {
    ServicesMatrix,
    ContactForm,
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
</style>
