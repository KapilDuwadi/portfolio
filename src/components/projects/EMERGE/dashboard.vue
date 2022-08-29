<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">EMERGE: Emerging technologies Management and Risk evaluation on distribution Grids Evolution</h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Dashboard in EMERGE </p>

    <p>
      After metrics are computed by peforming time series powerflow, 
      results can be visualized in an interactive dashboard using EMeRGE. 
      It also uses geographic coordinates to plot the network and shows metrics 
      on top of them. Using dashboard, user can also perform individual PV interconnecton assessment. 
      EMeRGE uses ploty to develop dashboard that can be launced in your favourite web browser.
    </p>
  </div>
</template>

<script>
export default {
    name: "emergeDashboard"
}
</script>

<style>

</style>