<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">
      EVOLVE: Evolution of Net Load Variation from Emerging Technologies
    </h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold">
      Solar modeling in EVOLVE
    </p>

    <p>
      Distribution utilities are facing an increasing number of solar
      applications in recent years. Understanding how solar impacts their load
      profile is crucial in making important decisions such as upgrades,
      capacity expansion planning and tariff modification.
    </p>

    <p>
      Local solar generation reduces the import from the grid reducing
      electricity bill for the customer. Excess generation from the solar may as
      well be injected into the system also known as reverse power flow. In
      order to see how system load is affected by solar, some form of solar
      generation modeling is required.
    </p>

    <p>
      EVOLVE uses a simplistic solar model to estimate the solar output by
      taking a plane of array (POA) solar irradiance data and total solar
      capacity. Computing plane of array irradiance needs to take place outside
      of EVOLVE. Packages such as pvlib can be utilized to model per unitized
      plane of array irradiance by taking technical parameters (tilt, azimuth)
      as well as irradiance measurements such as global horizontal irradiance
      (GHI), direct normal irradiance (DNI) and diffuse horizontal irradiance
      (DHI).
    </p>

    <img src="images/evolve_solar.jpg" class="my-5" />

    <p class="text-indigo-600 border-b-2 font-bold border-gray-300">
      Global horizontal Irradiance (GHI)
    </p>
    <p>
      Total amount of shortwave radiation received per unit area from above by a
      surface horizontal to the ground.
    </p>

    <p class="text-indigo-600 border-b-2 font-bold border-gray-300">
      Direct Normal Irradiance (DNI)
    </p>
    <p>
      Total amount of solar radiation received per unit area by a surface held
      perpendicular to the rays coming from the sun at its current position.
    </p>

    <p class="text-indigo-600 border-b-2 font-bold border-gray-300">
      Diffuse Horizontal Irradiance (DHI)
    </p>
    <p>
      Total amount of solar radiation received per unit area by a surface that
      does not arrive directly but is scattered by particles in the atmosphere
      and is received equally from all directions.
    </p>

    <p>
      Apart from time series solar generation for the specified solar capacity
      user can also look at metrics such total solar generation, peak solar
      generation and solar generation at system peak in the EVOLVE dashboard.
    </p>
  </div>
</template>

<script>
export default {
  name: "evolveSolar",
};
</script>

<style>
</style>