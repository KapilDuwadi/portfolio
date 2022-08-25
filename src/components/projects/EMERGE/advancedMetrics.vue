<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">EMERGE: Emerging technologies Management and Risk evaluation on distribution Grids Evolution</h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Risk metrics in EMERGE </p>

    <p>
      Generally, impact study for distribution feeders due to emerging technologies (such as roof top PV,
      SMART inverter settings, electric vehicles etc.) involves violations assessment (a violation in power system lingo means technical 
      parameter such as voltage, thermal loading etc exceeding recommended thresholds values) 
      across a sample of time stamps in a given time duration (Generally for a year). The problem with this approach is that such 
      violations may have occured for a very small period of time during the whole year and risk 
      associated with them might be lower or within the risk margin of utilities. EMeRGE uses 
      risk metrics that look at severity, duration of violation and number of customers 
      present downward of the network in entire simulation time period in order to compute them.
    </p>

    <p> For e.g. To measure risk associated with line segments in distribution feeder exceeding thermal limit, EMERGE uses line loading risk
      index (LLRI). In order to compute LLRI for each line segment, we take sum of serverity (how severe the overloading is measured as per unit deviation from threshold,
      if the loading below threshold severity would be zero) multiplied with number of customers served downward of the line segment. The metric is further normalized
      by dividing it with total time duration and total number of customers in the feeder. Most distribution feeders are radial or tree network and any asset experiencing 
      stress will affect reliability as well as quality of power serverd downward from it. Now we are making an assumption that all customers in the feeder are equally important.
      In reality some customers might be affected more from power quality and realibility issue more than the other. To learn more about these metrics <a 
      class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://www.nrel.gov/docs/fy21osti/78114.pdf"> 
      take a look at the report </a> we 
      published and feel free to email if you have questions. EMERGE computes metrics both at system level and asset level. </p>

      <p> You might ask what would I do with these metrics. You can use these metrics in variety of use cases. For e.g let's say you want to compute 
        hosting capacity of your feeder for residential solar applications, you can compute these metrics for your futuristic scenarios which gives you an idea of
        what the risk is helping you decide how much solar you can host without affecting your risk margin. It can also help you see how much risk can be decreased with
        SMART inverter settings such as voltvar. It could also be a part of your interconnection application assessment process, equipment upgrade analysis process and so much more.
      </p>

      <p>
        List of the metrics you can compute in EMRGE are as follows.</p>

        
      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> System Average Risk Duration Index (SARDI) - voltage </p>
        <p class="leading-normal"> Percentage of time duration under consideration for which the average customer is
          at risk of power interruption because of voltage violation</p>

      </div>

      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> System Average Risk Duration Index (SARDI) - line </p>
        <p class="leading-normal"> Percentage of time duration under consideration for which the average customer is
          at risk of power interruption because of thermal violation associated with line elements.</p>
      </div>

      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> System Average Risk Duration Index (SARDI) - transformer </p>
        <p class="leading-normal"> Percentage of time duration under consideration for which the average customer is
          at risk of power interruption because of thermal violation associated with transformers in the feeder</p>
      </div>
       
      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> System Average Risk Duration Index (SARDI) - aggregated </p>
        <p class="leading-normal"> Percentage of time duration under consideration for which the average customer is
          at risk of power interruption because of voltage and thermal violations</p>
      </div>

      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> Nodal Voltage Risk Index (NVRI) </p>
        <p class="leading-normal"> Measures the average voltage violation severity (deviation from either upper or lower limits)
            weighted by the fraction of customers affected by it.</p>
      </div>

      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> Line Loading Risk Index (LLRI) </p>
        <p class="leading-normal"> Measures the average line overloading severity weighted by the fraction of customers present
          downward of line.</p>
      </div>

      
      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> Transformer Loading Risk Index (TLRI) </p>
        <p class="leading-normal"> Measures the transformer overloading severity weighted by a fraction of customers present
            downward of transformer</p>
      </div>

      <div class="mt-3">
        <p class="text-indigo-500 font-bold"> Customer Risk Index (CRI) </p>
        <p class="leading-normal"> Measures average severity experienced by a customer because of both voltage and
          thermal violations.
        </p>
      </div>



      
  </div>
</template>

<script>
export default {
    name: "emergeAdvancedMetrics"
}
</script>

<style>

</style>