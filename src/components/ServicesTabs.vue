<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            @click="toggleTabs(1)"
            v-bind:class="{
              'text-primary bg-white': openTab !== 1,
              'text-white bg-primary': openTab === 1,
            }"
            class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded rounded-b-none block leading-normal"
          >
            Website
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            @click="toggleTabs(2)"
            v-bind:class="{
              'text-primary bg-white': openTab !== 2,
              'text-white bg-primary': openTab === 2,
            }"
            class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded rounded-b-none block leading-normal"
          >
            App
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            @click="toggleTabs(3)"
            v-bind:class="{
              'text-primary bg-white': openTab !== 3,
              'text-white bg-primary': openTab === 3,
            }"
            class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded rounded-b-none block leading-normal"
          >
            Marketing
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            @click="toggleTabs(4)"
            v-bind:class="{
              'text-primary bg-white': openTab !== 4,
              'text-white bg-primary': openTab === 4,
            }"
            class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded rounded-b-none block leading-normal"
          >
            Design
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            @click="toggleTabs(5)"
            v-bind:class="{
              'text-primary bg-white': openTab !== 5,
              'text-white bg-primary': openTab === 5,
            }"
            class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded rounded-b-none block leading-normal"
          >
            Analytics
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
          <a
            @click="toggleTabs(6)"
            v-bind:class="{
              'text-primary bg-white': openTab !== 6,
              'text-white bg-primary': openTab === 6,
            }"
            class="text-sm font-bold uppercase px-5 py-3 rounded rounded-b-none block leading-normal"
          >
            Strategy
          </a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-b border-t-2 border-primary"
      >
        <div class="px-4 py-8 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <p>
                Static marketing websites
                <br />
                <br />
                Blogs, eCommerce shops
              </p>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <p>
                Web Clients, Mobile Clients, JAMStack Sites
                <br />
                <br />
                APIs, Alexa Apps
              </p>
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <p>
                Marketing Campaigns, Social Media
                <br />
                <br />
                Market Research
              </p>
            </div>
            <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <p>
                UI/UX
                <br />
                <br />
                Graphic Design, logos, business cards, letterhead
              </p>
            </div>
            <div v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }">
              <p>
                Data science, reporting, Visualizations
                <br />
                <br />
                Analytics
              </p>
            </div>
            <div v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }">
              <p>
                Product Strategy, Marketing Strategy
                <br />
                <br />
                Pragmatic Framework
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTab: 1,
    }
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
  },
}
</script>
