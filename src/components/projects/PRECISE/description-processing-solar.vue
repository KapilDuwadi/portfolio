<template>
  <div>
    <div class="flex mt-10">
          <div class="mr-10 mt-2 border-l border-gray-300 ml-5">
              <p class="bg-indigo-600 text-white w-10 h-10 -ml-5 rounded-md flex items-center justify-center">1</p>
          </div>
          <div>
              <h1 class="text-indigo-500 font-bold">Get PV application</h1>
              <p class="mb-5"> Customer typically submits interconnection application through web portal. Application
                  includes details such as inverter capacity, panel capacity, tilt, azimuth, meter id along with other information.
              </p>
          </div>
      </div>
      <div class="flex">
          <div class="mr-10 border-l border-gray-300 ml-5">
              <p class="bg-indigo-600 w-10 text-white h-10 -ml-5 rounded-md flex items-center justify-center">2</p>
          </div>
          <div>
              <h1 class="text-indigo-500 font-bold">Getting feeder model</h1>
              <p class="mb-5"> Customer meter id is used to locate the distribution transformer and secondary network associated with it. The network model
                  is used to perform 8760 time series analysis for full year to come up with best smart inverter settings. The models are updated in a regular basis to
                  reflect GIS update of the utilities network.
              </p>
          </div>
      </div>

      <div class="flex">
          <div class="mr-10 border-l border-gray-300 ml-5">
              <p class="bg-indigo-600 text-white w-10 h-10 -ml-5 rounded-md flex items-center justify-center">3</p>
          </div>
          <div>
              <h1 class="text-indigo-500 font-bold">Populating load and PV profiles</h1>
              <p class="mb-5"> Advanced metering infrastructure (AMI) data associated with all the loads and PVs in a secondary network
                  is used to populate time series profiles. Plane of array (POA) irradiance associated with customer solar application is computed
                  with help of irradiance data specifically GHI, DHI and DNI from nearest solar station. `pvlib` python package is used to model PV system to compute irradiance profile.
              </p>
          </div>
      </div>

      <div class="flex">
          <div class="mr-10 border-l border-gray-300 ml-5">
              <p class="bg-indigo-600 text-white w-10 h-10 -ml-5 rounded-md flex items-center justify-center">4</p>
          </div>
          <div>
              <h1 class="text-indigo-500 font-bold">Filtering timestamps</h1>
              <p class="mb-5"> Timestamps associated with missing AMI data, night time and unreasonable values are filtered before performing time series analysis.
              </p>
          </div>
      </div>

      <div class="flex">
          <div class="mr-10 border-l border-gray-300 ml-5">
              <p class="bg-indigo-600 text-white w-10 h-10 -ml-5 rounded-md flex items-center justify-center">5</p>
          </div>
          <div>
              <h1 class="text-indigo-500 font-bold">Performing time series simulation</h1>
              <p class="mb-5"> Iterative time series analysis is performed to come up with smart inverter settings that would avoid 
                  overvoltages and reverse power flow overloading.
              </p>
          </div>
      </div>

       <div class="flex">
          <div class="mr-10 ml-5">
              <p class="bg-indigo-600 text-white w-10 h-10 -ml-5 rounded-md flex items-center justify-center">6</p>
          </div>
          <div>
              <h1 class="text-indigo-500 font-bold">Notifying customers and planning engineers</h1>
              <p class="mb-5"> Once the analysis is completed customers are notified of inverter settings. In case inverter settings are not found
                  planning engineers are notified for further analysis. 
              </p>
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
    "name": "processingSolar"

}
</script>

<style>

</style>