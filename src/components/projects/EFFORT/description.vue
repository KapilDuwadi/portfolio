<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">EFFORT: Effectiveness of Rate Structures for Enabling Demand Response </h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Brief intro of EFFORT tool </p>

    <p>
        EFFORT is an analysis framework developed in Python for modeling and 
        designing TOU tariffs using optimization. It uses historical time series 
        system-level load data, cost and capacity data of dispatchable generators, 
        and consumer price responsiveness to compute optimal on-peak and off-peak price ratios. 
        The utility can customize the level of consumer price responsiveness based on surveyed 
        information and pricing trails to better reflect the response levels of their consumers. 
        In addition to this, independent modules are also included to generate realistic 
        on-peak hours by analyzing utility load profile data. Utilities can also compute seasonal 
        TOU by grouping year-long load profiles into multiple seasons to specifically target seasonal 
        changes in peak load consumption patterns. Scenario analysis can be leveraged in the 
        absence of data required for computing realistic consumer price responsiveness.
    </p>

    <p class="text-indigo-600 border-b-2 font-bold border-gray-300 mt-5 mb-3"> Optimization Model </p>

    <p>
        The optimization is formulated with the elasticity model of consumers as 
        an aggregate model using a price elasticity matrix (PEM). The objective 
        function of TOU tariff optimization is to minimize the cost of electricity 
        generation and of capacity upgrade cost. The electricity cost is attributed 
        to non-renewable energy purchases, as renewable energy is must-run, so we 
        examine the net load that conventional generation must meet. Utility use 
        dispatchable generators to meet incremental generation costs (rupee/MWh) 
        to meet non-renewable energy demand. The monthly average cost of energy 
        purchase for each generating plant is used to compute cost. The estimated 
        network avoidance cost per MW is used to compute capacity upgrade costs. 
        Following constraints are used in optimization
    </p>

    <ol class="list-decimal ml-3 italic">
        <li> Consumer energy consumption is driven by price elasticity model</li>
        <li> Total energy generation from all dispatchable generators must be greater than or equal to total load enery consumption at all times</li>
        <li> On peak price must be greater than off peak price </li>
        <li> Generator output must be less than contracted capacity</li>
        <li> The profit made by utility because of TOU is equal to sum of benefit for all customers </li>
    </ol>
  </div>
</template>

<script>
export default {
    name: "effortDescription"
}
</script>

<style>

</style>