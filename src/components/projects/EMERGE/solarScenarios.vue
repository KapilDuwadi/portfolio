<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">
      EMERGE: Emerging technologies Management and Risk evaluation on
      distribution Grids Evolution
    </h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold">
      Explaining Solar Scenarios in EMERGE
    </p>

    <p>
      To model the future solar or PV deployment scenarios four parameters
      namely number of customers with roof top PV, size of individual PV,
      location of customers relative to substation, and voltvar setting for
      inverters can be configured in EMeRGE. Roof top PV is sized based on
      annual energy consumption before installing solar. For e.g. if a customer
      has pre-solar annual energy consumption of 1000 kWh, and percentage energy
      consumption customer is willing to replace using PV is 50% then size of PV
      required is equal to (1000 x 0.5)/(365 x 24 x capacity factor) kW.
    </p>

    <p class="text-indigo-500 font-bold mt-3">
      Sample calculation for PV sizing
    </p>
    <div class="mb-3">
      <div>
        <label class="pr-3"> Pre solar annual energy consumption (kwh)</label>
        <br />
        <input
          class="px-3 font-bold w-full border-2 text-indigo-500"
          type="number"
          min="0"
          v-model="kwh"
        />
      </div>
      <div>
        <label class="pr-3">
          Energy consumption to be replaced by solar (%)
        </label>
        <br />
        <input
          class="px-3 font-bold w-full border-2 text-indigo-500"
          type="number"
          v-model="pct_energy"
        />
      </div>
      <div>
        <label class="pr-3"> Capacity factor for PV </label> <br />
        <input
          class="px-3 font-bold w-full border-2 text-indigo-500"
          type="number"
          v-model="cf"
        />
      </div>

      <label>
        Size of PV needed:
        <span class="font-bold text-indigo-500"> {{ compute_size }}</span>
        kW</label
      >
    </div>

    <img class="shadow-md my-2" src="images/solarscenarios.jpg" />
    <p>
      Now capacity factor of PV depends on many factors such as location, panel
      orientation etc. EMeRGE utilizes irradiance data of feeder location to
      compute the capacity factor and assumes maximum solar generation to
      reflect worst case scenario. By default customers are randomly selected
      across the feeder for PV deployment with flexibility to select customers
      near or far from the substation if needed to define a scenario. Scenario
      with customized voltvar settings for solar inverters can also be defined
      and simulated using EMeRGE.
    </p>
  </div>
</template>

<script>
export default {
  name: "emergeSolarScenarios",
  computed: {
    compute_size() {
      return (
        (this.kwh * this.pct_energy) /
        (365 * 24 * 100 * this.cf)
      ).toFixed(3);
    },
  },
  data() {
    return {
      kwh: 1000,
      pct_energy: 50,
      cf: 0.24,
    };
  },
};
</script>

<style>
</style>