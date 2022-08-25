<template>
  <div class="mx-10 my-5 leading-8">
      <h1 class="text-2xl text-indigo-500 font-bold">PRECISE: PREconfiguring and Controlling Inverter SEt-points</h1>
      <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Brief intro to SMART inverter settings </p>

      <p> Inverter is an electronic device that takes DC (direct current) power to AC (alternating current) power.
        Most of our devices such as chargers, TV, dish washers etc require AC power to operate. Solar panel generates DC power which in turn 
        needs to be converted to AC power in order to run home appliances. Generating power locally reduces your
        imports from the grid and in some cases if allowed injects power to the grid. When power is being injected
        to the grid from multiple customers at some point, overvoltage becomes an issue. SMART inverters are able to detect change
        in voltage at the point of common of coupling (PCC) and change their output power.
      </p>

      <p> 
        SMART inverters can change both active and reactive power (real and imaginary component of complex power) based on
        the voltage at the point of common coupling. Droop controllers are popular method of controlling inverter
        active and reactive powers. Two popular droop controllers for inverters are volt-watt and volt-var control.
        Volt-watt control changes the active power based on the voltage whereas voltvar control chages reactive power based
        on the voltage. <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://standards.ieee.org/ieee/1547/5915/"> 
        IEEE 1547-2018 standard </a> defines different catagories of inverter control for different use cases.
      </p>
      
  </div>
</template>

<script>
export default {
    name: "advancedInverterSettings"
}
</script>

<style>

</style>