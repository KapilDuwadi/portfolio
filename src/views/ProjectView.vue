<template>
  <div class="flex text-gray-500 bg-gray-200">
    <div
      class="
        w-1/4
        overflow-y-scroll
        px-5
        py-5
        h-screen
        bg-white
        m-2
        shadow-md
        hidden
        sm:block
      "
    >
      <VerticalMenu :data="menus" @isClicked="handle_page" />
    </div>
    <div
      v-if="show_left_menu"
      class="
        absolute
        w-3/4
        overflow-y-scroll
        px-5
        py-5
        h-screen
        bg-white
        m-2
        shadow-md
      "
    >
      <VerticalMenu :data="menus" @isClicked="handle_page" />
      <p
        @click="handle_leftmenu_close"
        class="
          absolute
          right-5
          top-3
          font-bold
          hover:cursor-pointer hover:text-red-500
          text-indigo-500 text-lg
        "
      >
        X
      </p>
    </div>
    <div class="w-full overflow-y-scroll h-screen bg-white m-2 sm:w-3/4">
      <div class="flex px-5 py-3 bg-gray-100 sm:hidden">
        <div
          class="space-y-2 mr-5 hover:cursor-pointer"
          @click="handle_left_menu"
        >
          <div class="w-8 h-0.5 bg-indigo-500"></div>
          <div class="w-8 h-0.5 bg-indigo-500"></div>
          <div class="w-8 h-0.5 bg-indigo-500"></div>
        </div>
        <div
          class="flex mr-3 text-indigo-500 font-bold"
          v-for="(el, index) in sub_routes"
          :key="el"
        >
          <p class="mr-2">{{ el }}</p>
          <p v-if="index == sub_routes.length - 1 ? false : true">></p>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import VerticalMenu from "../components/vertical-menu.vue";
export default {
  components: {
    VerticalMenu,
  },
  created() {
    if (this.$route.name == "projects") {
      this.$router.push("/projects/precise/description");
    }
  },
  data() {
    return {
      show_left_menu: false,
      sub_routes: ["PRECISE", "description"],
      menus: [
        {
          title: "PRECISE",
          options: [
            { name: "Description", url: "/projects/precise/description" },
            {
              name: "Solar Application",
              url: "/projects/precise/solar-application",
            },
            {
              name: "Time Series Analysis",
              url: "/projects/precise/time-series-analysis",
            },
            {
              name: "Advanced Inverter Settings",
              url: "/projects/precise/advanced-inverter-settings",
            },
            { name: "AMI & GIS", url: "/projects/precise/ami-gis" },
            { name: "Dashboard", url: "/projects/precise/dashboard" },
          ],
        },
        {
          title: "EMERGE",
          options: [
            { name: "Description", url: "/projects/emerge/description" },
            {
              name: "Feeder modeling",
              url: "/projects/emerge/feeder-modeling",
            },
            {
              name: "Solar Scenarios",
              url: "/projects/emerge/solar-scenarios",
            },
            {
              name: "Advanced Metrics",
              url: "/projects/emerge/advanced-metrics",
            },
            { name: "Dashboard", url: "/projects/emerge/dashboard" },
          ],
        },
        {
          title: "EVOLVE",
          options: [
            { name: "Description", url: "/projects/evolve/description" },
            { name: "Load profile", url: "/projects/evolve/load-profile" },
            { name: "Solar", url: "/projects/evolve/solar" },
            { name: "Energy Storage", url: "/projects/evolve/energy-storage" },
            {
              name: "Electric Vehicle",
              url: "/projects/evolve/electric-vehicle",
            },
            { name: "Dashboard", url: "/projects/evolve/dashboard" },
          ],
        },
        {
          title: "SHIFT",
          options: [
            { name: "Description", url: "/projects/shift/description" },
            { name: "Use cases", url: "/projects/shift/use-cases" },
          ],
        },
        {
          title: "EFFORT",
          options: [
            { name: "Description", url: "/projects/effort/description" },
          ],
        },
      ],
    };
  },
  methods: {
    handle_page(url) {
      this.sub_routes = url.replace("/projects/", "").split("/");
      this.show_left_menu = false;
    },
    handle_left_menu() {
      this.show_left_menu = true;
    },
    handle_leftmenu_close() {
      this.show_left_menu = false;
    },
  },
};
</script>

<style>
</style>