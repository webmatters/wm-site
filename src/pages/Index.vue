<template>
  <Layout>
    <!-- Hero -->
    <section class="bg-white">
      <!-- Hero Text -->
      <div class="container md:flex mx-auto mb-8 py-12 md:py-24">
        <div class="text-center md:w-1/2 md:text-left px-4 md:px-8">
          <h1 class="tracking-tight leading-tight text-3xl md:text-4xl">
            Web Services to Propel Your Business
          </h1>
          <h2 class="mt-4">
            Thoughtfully designed and meticulously developed apps guided by
            expert strategy. All reasonably priced for entrepreneurs.
          </h2>
          <div class="hidden md:inline-block mt-20">
            <a
              href="#"
              type="=button"
              class="bg-cta rounded-full text-white py-2 px-4 shadow-xl"
              >Free Strategy Session</a
            >
          </div>
        </div>
        <!-- Hero Image -->
        <div class="mt-8 md:w-1/2">
          <g-image src="~/assets/img/rocket-turtle.png" alt="Rocket turtle" />
        </div>
        <div class="text-center mt-20 md:hidden">
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
    <section id="services" class="bg-gray-900">
      <div class="container mx-auto text-center pt-12 pb-24">
        <h2 class="uppercase text-white text-3xl">What do you Need?</h2>
        <services-tabs class="mt-12" />
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
