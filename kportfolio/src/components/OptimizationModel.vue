<template>
  <div>
     <p>The optimization is formulated with the elasticity model of consumers as an aggregate model using a price elasticity matrix (PEM).
    The objective function of TOU tariff optimization is to minimize the cost of electricity generation and of capacity
    upgrade cost. The electricity cost is attributed to non-renewable energy purchases, as renewable energy is must-run,
    so we examine the net load that conventional generation must meet. Utility use dispatchable generators to meet incremental generation costs
    (rupee/MWh) to meet non-renewable energy demand. The monthly
    average cost of energy purchase for each generating plant is used to compute cost. The estimated network avoidance cost per
    MW is used to compute capacity upgrade costs. Following constraints are used in optimization</p>
    <p>1. Consumer energy consumption is driven by price elasticity model</p>
    <p>2. Total energy generation from all dispatchable generators must be greater than or equal to total load enery consumption at all times</p>
    <p>3. On peak price must be greater than off peak price</p>
    <p>4. Generator output must be less than contracted capacity</p>
    <p>5. The profit made by utility because of TOU is equal to sum of benefit for all customers</p>
    
  </div>
</template>

<script>
export default {
    name: "OptimizationModel"
}
</script>

<style>

</style>