<template>
  <div class="mx-10 my-5 leading-8">
    <!-- <img src="images/precise_description.jpg" height="h-2/4"> -->

    <h1 class="text-2xl text-indigo-500 font-bold">
      PRECISE: PREconfiguring and Controlling Inverter SEt-points
    </h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold">
      Brief description for PRECISE software product
    </p>
    <p>
      PRECISE is a closed source software product that automates processing of
      PV interconnection application for electric utilities developed at
      National Renewable Energy Laboratory (NREL). It not only reduces the time
      it takes to process these applications from weeks to tens of minutes but
      also standarizes the whole process.
    </p>

    <div class="flex justify-center items-center mt-3">
      <button
        class="
          bg-indigo-600
          text-white
          rounded-md
          hover:pointer hover:bg-indigo-800
          mb-5
          mt-5
        "
      >
        <p class="px-2 py-1">
          <a href="https://forms.gle/eXiGM7EbETQ2zHZA8" target="_blank"
            >Request a Demo
          </a>
        </p>
      </button>
    </div>

    <div class="flex mt-5 mb-5 border-b overflow-x-scroll scrolling-touch">
      <div
        class="
          mr-4
          whitespace-pre
          font-semibold
          hover:cursor-pointer
          hover:border-b-2
          hover:border-indigo-600
          hover:text-indigo-500
        "
        v-for="page in description_pages"
        :key="page"
        v-bind:class="[
          description_tag === page.name
            ? 'border-b-2 text-indigo-500 border-indigo-600'
            : '',
        ]"
      >
        <h3 @click="handle_url_switch(page)">{{ page.name }}</h3>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "PreciseDescription",
  created() {
    this.$router.push(
      "/projects/precise/description/processing-solar-application"
    );
  },
  data() {
    return {
      description_tag: "Processing solar application",
      description_pages: [
        {
          name: "Processing solar application",
          url: "/projects/precise/description/processing-solar-application",
        },
        {
          name: "Model Building",
          url: "/projects/precise/description/model-building",
        },
        {
          name: "AMI cleaning & integration",
          url: "/projects/precise/description/ami-cleaning-integration",
        },
        { name: "Alerts and Notifications", url: "alerts-notification" },
      ],
    };
  },
  methods: {
    handle_url_switch(tag) {
      this.description_tag = tag.name;
      this.$router.push(tag.url);
    },
  },
};
</script>

<style>
</style>