<template>
  <div>
    <p>
      Distribution system model is the backbone of interconnection assessment
      for any type of distributed energy resources installed in customer
      premise. PRECISE produces thousands of these distribution models every
      week to keep them up to date with network changes and stores them in a
      database.
    </p>
    <div class="flex justify-center my-5">
      <img src="images/dist_network.svg" width="400" />
    </div>

    <p>
      Whenever interconnection application comes in, PRECISE pulls the
      application data and downloads the appropriate distribution system model
      to perform annual time series analysis with different SMART inverter
      settings. Sometimes it takes months for these new installations to appear
      in utilities GIS database and for that purpose PRECISE also maintains
      internal database for applications processed by it and if they are not
      present in GIS will be added during the processing of future application.
    </p>
  </div>
</template>

<script>
export default {
  name: "modelBuilding",
};
</script>

<style>
</style>