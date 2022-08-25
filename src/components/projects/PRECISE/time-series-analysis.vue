<template>
  <div class="mx-10 my-5 leading-8">
      <h1 class="text-2xl text-indigo-500 font-bold">PRECISE: PREconfiguring and Controlling Inverter SEt-points</h1>
      <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Brief intro to Time Series Analysis </p>
      <p> PRECISE performs annual time series powerflow simulation to process interconnection
        request. <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://www.epri.com/pages/sa/opendss"> OpenDSS (An opensource distribution powerflow simulation engine) </a> 
        is used as core engine for performing time series simulation. Overvoltage and reverse power flow overloading metrics are considered for deciding SMART inverter settings.
      </p>

      <p class="mt-3"> 
        Time resolution by default is 60 minute (1 hour). Different time resolution such as 1-minute, 10-minute and 15-minute can
        be used if AMI and irradiance data are available in that resolution. Iterative time series 
        simulation is performed with different SMART inverter settings (such as unity power factor, <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://www.openintl.com/california-rule-21-interconnection/"> California Rule 21</a> settings, custom voltvar etc.).
        Only the timesteps with violation are considered for simulation with voltvar settings.
        In a scenario where voltvar setting is not sufficient, time series simulation is performed with reduced inverter capacity.
      </p>
      <p>
        Time series profiles are crucial part of time series simulation. PRECISE expects these data to be available for all the loads and in almost good condition.
        Night time stamps and time stamps with bad data are filtered before performing time series simulation. Each timestep metrics are computed counting voltage and thermal
        violations and how long they occurred and how many assets got affected.
      </p>
  </div>
</template>

<script>
export default {
    name: 'preciseTimeSeriesAnalysis',
}
</script>

<style>

</style>