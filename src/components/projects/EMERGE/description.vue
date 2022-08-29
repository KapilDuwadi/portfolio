<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">
      EMERGE: Emerging technologies Management and Risk evaluation on
      distribution Grids Evolution
    </h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold">
      Brief description for EMERGE software product
    </p>

    <p>
      EMeRGE is an opensource software framework developed using Python at
      National Renewable Energy Laboratory (NREL) in 2020. This tool allows user
      to develop distribution feeder model using GIS data, develop customized
      solar deployment scenarios, compute and compare risk metrics at both
      system and asset level and visualize them in an easy to use interactive
      dashboard.
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

    <iframe
      class="w-full h-96 shadow-md border-2 border-indigo-900"
      src="https://www.youtube.com/embed/29AiUPDd3n0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "emergeDescription",
};
</script>

<style>
</style>