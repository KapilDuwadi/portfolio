<template>
  <div>
    <p> PRECISE takes the customer interconnection application and models the combination of solar and pv inverter. The solar  + inverter model is added to the secondary
        network to perform full year simulation. To perform full year simulation PRECISE also needs Advanced Metering data (also known as AMI data) for all the customers in the secondary network.
        Plane of array (POA) irradiance for solar unit is computed by lavergaing pvlib python package which takes irradiance data at custmer location (GHI, DHI and DNI) along with 
        azimuth and tilt of solar unit. Different voltvar control schemes are tested to check the suitabilibily and best one is recommended for the customer.
    </p>
    <img src="../assets/solar_customer.jpg">
  </div>
</template>

<script>
export default {
    name: "ModelingPV"
}
</script>

<style>

</style>