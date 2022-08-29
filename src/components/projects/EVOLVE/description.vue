<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">EVOLVE: Evolution of Net Load Variation from Emerging Technologies</h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Brief description for EVOLVE software product </p>
  
    <p> 
        EVOLVE is an opensource software developed using Python and
        React at National Renewable Energy Laboratrory (NREL) in 2020. 
        Users can use this tool to analyze the impact of electric vehicles,
        energy storage and solar on net load profile. It was developed 
        under USAID funding and uses historical load profiles as an input.
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
    
    <p>
        You can choose to perform analysis in different time scales such 
        as daily, weekly and yearly and also at both distribution 
        transformer level and feeder level. Metrics such as peak load 
        reduction, energy reduction, ramp reduction and load factor 
        reduction can be easily viewed in the dashboard. Technology 
        specific metrics as well as their output is shown in separate 
        panels. Plotly javascript package is used to plot all the 
        graphics in the dashboard. 
    </p>

    <img src="images/evolve.png" class="w-full mt-5" />
    <p class="text-gray-500 text-sm mt-3 mb-5 font-bold" > Fig: A partial snapshot of EVOLVE dashboard</p>

    <p> Both frontend and backend applications are dockerized and you can launch both via docker-compose. </p>
    

    <p class="text-indigo-600 border-b-2 font-bold border-gray-300" > When should you use EVOLVE ? </p>
    <p>
        You should use EVOLVE tool if all of the statements below are true for use case.

        <ol class="list-decimal ml-3 italic">
            <li> You need to model combination of solar, electric vehicle and energy storage to generate report on how these impacts the load profile </li>
            <li> You want to analyze the load profile at distribution transformer level and/or feeder level  </li>
            <li> You have some historical load profile at transformer and/or feeder level </li>
            <li> You are not looking for load forecasting tool </li>
            <li> You are looking for simple, easy to use and free solution for time series load profile analysis </li>
        </ol>
    </p>

    <p class="text-indigo-600 border-b-2 font-bold border-gray-300" > When should you not use EVOLVE tool ? </p>
    <p>
        You should not use EVOLVE tool for following use cases.

        <ol class="list-decimal ml-3 italic">
            <li> You are looking for a solution to forecast your load profile </li>
            <li> You are looking for a solution that analyzes load profile at customer level  </li>
            <li> You are looking for a solution that models your feeder network and performs load profile analysis based on that </li>
            <li> You are looking for a solution that looks at the impact of SMART inverter settings on net load profile </li>
        </ol>
    </p>
  
  </div>
</template>

<script>
export default {
  name: "evolveDescription",
};
</script>

<style>
</style>