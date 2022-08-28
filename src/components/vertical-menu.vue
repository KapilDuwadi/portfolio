<template>
  <div>
    <div class="mb-5" v-for="menu in data" :key="menu.title">
      <div>
        <h2 class="font-bold">{{ menu.title }}</h2>
        <ul class="mt-3">
          <div
            class="
              py-1
              border-l border-gray-200
              hover:border-red-500
              cursor-pointer
              pl-5
            "
            v-for="option in menu.options"
            :key="option"
            v-bind:class="[
              menu.title + option.name === active_menu
                ? 'text-gray-900 border-gray-900'
                : '',
            ]"
          >
            <a @click="handle_menu_click(menu.title, option)">
              {{ option.name }}</a
            >
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalMenu",
  props: {
    data: Object,
  },
  data() {
    return {
      active_menu: "",
    };
  },
  methods: {
    handle_menu_click(title, submenu) {
      this.active_menu = title + submenu.name;
      // console.log(submenu.url)
      this.$emit("isClicked", submenu.url);
      this.$router.push(submenu.url);
    },
  },
};
</script>

<style>
</style>