<template>
  <div>
    <div
      class="mx-4 md:mx-8"
    >Web Matters offers a comprehensive suite of web services aimed at helping you succeed. We can manage your entire web presence including strategy, development, and continuous improvement or fulfill a specific need such as building an app or creating analytics dashboards to help manage your business.</div>
    <div class="md:flex text-center md:mt-8">
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 mt-8">
        <div>
          <monitor-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Websites</h3>
        <div
          class="px-4"
        >Your website needs to grab visitors' attention and guide them toward becoming a customer. Strategic design, personality, user flow, SEO, analytics, functionality, speed, reliability. These are must-have requirements for your site.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 mt-8">
        <div>
          <monitor-cellphone-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Apps</h3>
        <div
          class="px-4"
        >Do you have an idea for an app that meets a market need? It must have great UX, support mobile devices, and be fast, reliable, & scalable. Leveraging modern frameworks helps achieve these objectives and get to market quickly.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center mt-8">
        <div>
          <image-edit-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Design</h3>
        <div
          class="px-4"
        >Your brand is your company's identity. It helps determine whether someone will do business with you. Your selection of colors, typography, logo, business cards, letterhead, and other web and print marketing assets creates your brand.</div>
      </div>
    </div>
    <div class="md:flex text-center md:mt-16">
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 mt-8">
        <div>
          <cash-multiple-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Marketing</h3>
        <div
          class="px-4"
        >The web provides many effective and measurable options to get users to your site: email, Google Ads, Facebook, and many others. The important thing is to determine what provides the best return for your audience.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 mt-8">
        <div>
          <strategy-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Strategy</h3>
        <div
          class="px-4"
        >Strategy is not abstract. It's practical, utilizing well-tested processes offered by frameworks like Pragmatic. Without a winning strategy based on an understanding of buyers, markets, and competitors, nothing else matters.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center mt-8">
        <div>
          <chart-bar-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Analytics</h3>
        <div
          class="px-4"
        >What are you doing with the data you're collecting? Valuable trends and insights can be mined using advanced data science and AI. Reporting, dashboards, and visualizations tell the story of your data to help manage your business.</div>
      </div>
    </div>
  </div>
</template>

<script>
import MonitorIcon from 'vue-material-design-icons/Monitor.vue'
import MonitorCellphoneIcon from 'vue-material-design-icons/MonitorCellphone.vue'
import ImageEditIcon from 'vue-material-design-icons/ImageEdit.vue'
import CashMultipleIcon from 'vue-material-design-icons/CashMultiple.vue'
import StrategyIcon from 'vue-material-design-icons/Strategy.vue'
import ChartBarIcon from 'vue-material-design-icons/ChartBar.vue'
export default {
  components: {
    MonitorIcon,
    MonitorCellphoneIcon,
    ImageEditIcon,
    CashMultipleIcon,
    StrategyIcon,
    ChartBarIcon,
  },
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
</style>