<template>
  <div>
    <div class="md:flex text-center">
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 block">
        <div>
          <monitor-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Websites</h3>
        <div
          class="px-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo quia ab fugit. Amet optio qui, obcaecati id corrupti nobis vero eum veniam fugiat deleniti.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 mt-12">
        <div>
          <monitor-cellphone-icon :size="48" />
        </div>
        <h3 class="md:mt-4 text-2xl">Apps</h3>
        <div
          class="px-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo quia ab fugit. Amet optio qui, obcaecati id corrupti nobis vero eum veniam fugiat deleniti.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center mt-12">
        <div>
          <image-edit-icon :size="48" />
        </div>
        <h3 class="text-2xl">Design</h3>
        <div
          class="px-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo quia ab fugit. Amet optio qui, obcaecati id corrupti nobis vero eum veniam fugiat deleniti.</div>
      </div>
    </div>
    <div class="md:flex text-center md:mt-20">
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 mt-12">
        <div>
          <cash-multiple-icon :size="48" />
        </div>
        <h3 class="text-2xl">Marketing</h3>
        <div
          class="px-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo quia ab fugit. Amet optio qui, obcaecati id corrupti nobis vero eum veniam fugiat deleniti.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center md:mr-8 mt-12">
        <div>
          <strategy-icon :size="48" />
        </div>
        <h3 class="text-2xl">Strategy</h3>
        <div
          class="px-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo quia ab fugit. Amet optio qui, obcaecati id corrupti nobis vero eum veniam fugiat deleniti.</div>
      </div>
      <div class="md:w-1/3 flex flex-col items-center justify-center mt-12">
        <div>
          <chart-bar-icon :size="48" />
        </div>
        <h3 class="text-2xl">Analytics</h3>
        <div
          class="px-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo quia ab fugit. Amet optio qui, obcaecati id corrupti nobis vero eum veniam fugiat deleniti.</div>
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