<template>
  <div>
      <p>To model the future solar or PV deployment scenarios four parameters namely number of customers with roof top PV, size of individual PV, location of customers relative to substation, and voltvar setting for inverters can be configured in EMeRGE. </p>

<p>Roof top PV is sized based on annual energy consumption before installing solar. For e.g. if a customer has pre-solar annual energy consumption of 1000 kWh, and percentage energy consumption customer is willing to replace using PV is 50% then size of PV required is equal to 1000x0.5/(365x24x capacity factor) kW. Now capacity factor of PV depends on many factors such as location, panel orientation etc. EMeRGE utilizes irradiance data of feeder location to compute the capacity factor and assumes maximum solar generation to reflect worst case scenario. By default customers are randomly selected across the feeder for PV deployment with flexibility to select customers near or far from the substation if needed to define a scenario. Scenario with customized voltvar settings for solar inverters can also be defined and simulated using EMeRGE. </p>
    <img src="../assets/solar.jpg">
  </div>
</template>

<script>
export default {
    name: "PVScenario"
}
</script>

<style>

</style>