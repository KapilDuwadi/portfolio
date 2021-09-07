<template>
  <div>
      <p>Generally, impact study for distribution feeders due to emerging technologies involves assessing magnitude of violations (a violation in power system lingo means technical parameter such as voltage, thermal loading etc exceeding recommended thresholds values) across a sample of time stamps in whole year. The problem with this approach is that such violations may have occured for a very small period of time during whole year and risk associated with them might be lower or within the risk margin of utilities. EMeRGE uses risk metrics that look at severity and duration of violation along with number of customers present downward of the network in entire simulation time period to compute them.</p>

    <img src="../assets/risk.jpg">
  </div>
</template>

<script>
export default {
    name: "RiskMetric"
}
</script>

<style>

</style>