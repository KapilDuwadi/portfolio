<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">
      EVOLVE: Evolution of Net Load Variation from Emerging Technologies
    </h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold">
      Load proflile for EVOLVE
    </p>

    <p>
      Time series energy consumption pattern is known as load profile in power
      system lingo. Utilities use load profile information to make various
      decisions such as power purchase, demand side management, asset upgrade
      and many more. Figure below shows hour resolution day long worth of
      synthetic load profile in orange color. You can see consumption varies
      through out the day. Daily consumption pattern significantly changes
      between seasons, however remains more or less similar within seasons. Some
      utilities might also observe drastic change in energy consumption pattern
      between weekday and weekend especially if the feeder is dominated by
      commercial and industrial customers. Now increasing installation of DERs
      on feeder also change the energy consumption pattern. Battery less grid
      tied solar decreases the consumption during a day by providing local
      generation however consumption at other times remain almost unaffected.
      This is the reason why some utilities might not see capacity value of
      solar especially when system peak is not during day time. Electric
      vehicles on the other hand increase consumption via battery charging.
      Residential electric vehicles tend to increase energy consumption during
      night as most of them keep charging overnight whereas commercial charging
      station tend to increase consumption during a day.
    </p>

    <img class="my-3" src="images/loadprofile_evolve.png" />

    <p>
      Now utilities can leverage energy storage to manage load profile by
      discharging them during peak load and charging during off-peak load.
      EVOLVE tool is designed to interact with all three technologies (electric
      vehicle, solar and energy storage) to study impact on load profile. It's
      simple yet powerful user interface allows user to create customized
      scenario involving these technologies and visualize the impact on load
      profile. The results are analyzed in different temporal and spatial
      levels. The tool was developed in collaboration with existing utility in
      India.
    </p>
  </div>
</template>

<script>
export default {
  name: "evolveLoadProfile",
};
</script>

<style>
</style>