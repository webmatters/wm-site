<template>
  <Layout>
    <!-- Hero -->
    <section class="bg-white">
      <!-- Hero Text -->
      <div class="container sm:flex mx-auto mb-8 sm:py-24">
        <div class="text-center sm:w-1/2 sm:text-left px-4 sm:px-8">
          <h1 class="tracking-tight leading-tight text-3xl sm:text-4xl">
            Web Services to Propel Your Business
          </h1>
          <h2 class="mt-4">
            Thoughtfully designed and meticulously developed apps guided by
            expert strategy. All reasonably priced for entrepreneurs.
          </h2>
          <div class="hidden sm:inline-block mt-20">
            <a
              href="#"
              type="=button"
              class="bg-cta rounded-full text-white py-2 px-4 shadow-xl"
              >Free Strategy Session</a
            >
          </div>
        </div>
        <!-- Hero Image -->
        <div class="mt-8 sm:w-1/2">
          <g-image src="~/assets/img/rocket-turtle.jpg" alt="Rocket turtle" />
        </div>
        <div class="text-center mt-20 sm:hidden">
          <a
            href="#"
            type="=button"
            class="bg-cta rounded-full text-white py-2 px-4 inline-block"
            >Free Strategy Session</a
          >
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class=" bg-gray-900">
      <div class="container mx-auto text-center pt-12 pb-24">
        <h2 class="uppercase text-white text-3xl">What do you Need?</h2>
        <services-tabs class="mt-12" />
      </div>
    </section>

    <!-- About -->
    <section id="about" class="container mx-auto text-center py-12">
      <h2 class="uppercase text-3xl">Why Web Matters?</h2>
      <div class="mt-8">Test text</div>
    </section>

    <!-- Contact -->
    <section id="contact" class="bg-gray-900">
      <div class="container mx-auto">
        <contact-form />
      </div>
    </section>
  </Layout>
</template>

<script>
import ServicesTabs from '@/components/ServicesTabs.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
  components: {
    ServicesTabs,
    ContactForm,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
