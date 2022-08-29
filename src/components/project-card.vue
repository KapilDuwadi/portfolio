<template>
  <div class="bg-white shadow-md hover:cursor-pointer">
    <div class="px-10 py-5">
      <div class="flex justify-between">
        <h2
          class="
            text-xl
            uppercase
            px-2
            py-1
            font-bold
            rounded-md
            text-indigo-500
            border-gray-400
          "
          @click="handleProjectClick(project.desc_url)"
        >
          {{ project.name }}
        </h2>
        <!-- <img @click="handle_demo_click(project.name)" src="images/demo.svg" width="30" height="30"> -->

        <div
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Request Demo"
        >
          <!-- @click="handle_demo_click(project.name)" -->
          <a href="https://forms.gle/eXiGM7EbETQ2zHZA8" target="_blank">
            <svg
              class="hover:stroke-current hover:text-indigo-500"
              stroke="black"
              width="30"
              height="30"
              viewBox="0 0 80 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="6"
                width="78"
                height="78"
                rx="9"
                stroke-width="2"
              />
              <line x1="18" x2="18" y2="13" stroke-width="2" />
              <line x1="62" x2="62" y2="13" stroke-width="2" />
              <line x1="2" y1="24" x2="78" y2="24" stroke-width="2" />
              <rect x="26.5" y="33.5" width="11" height="9" />
              <rect x="43.5" y="33.5" width="11" height="9" />
              <rect x="60.5" y="33.5" width="11" height="9" />
              <rect x="26.5" y="48.5" width="11" height="9" />
              <rect x="43.5" y="48.5" width="11" height="9" />
              <rect x="60.5" y="48.5" width="11" height="9" />
              <rect x="26.5" y="64.5" width="11" height="9" />
              <rect x="43.5" y="64.5" width="11" height="9" />
              <rect x="9.5" y="64.5" width="11" height="9" />
              <rect x="9.5" y="48.5" width="11" height="9" />
            </svg>
          </a>
        </div>
      </div>
      <div class="flex justify-center">
        <img class="mt-5 h-48" :src="project.image" />
      </div>
    </div>

    <div class="border-b-2"></div>
    <div class="px-10 py-5 flex items-center justify-between">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <p
          class="
            bg-gray-300
            text-gray-600 text-sm
            rounded-md
            mx-2
            my-1
            px-2
            py-1
            font-bold
            text-center
            hover:bg-indigo-600 hover:text-white
          "
          v-for="tag in project.tags"
          :key="tag"
        >
          <a :href="tag.url" target="_blank">{{ tag.name }} </a>
        </p>
      </div>

      <a :href="project.project_url" target="_blank">
        <svg
          class="share fill-black hover:fill-indigo"
          width="40"
          height="40"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="39" cy="39" r="37.5" stroke="white" stroke-width="3" />
          <path
            d="M25.651 46.814C22.4186 48.6562 19.5672 51.0907 17.0107 54.1251C20.6749 40.4231 28.475 28.5288 44.2564 25.7904L45.5 25.5746V24.3125V15.0521L62.0248 34.3138L45.5 53.6271V44V42.5H44C36.8553 42.5 30.822 43.8669 25.651 46.814Z"
            fill="white"
            stroke="#FFF9F9"
            stroke-width="3"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: {
    project: Object,
  },
  methods: {
    handleProjectClick(project_url) {
      this.$router.push(project_url);
    },
  },
};
</script>

<style>
</style>