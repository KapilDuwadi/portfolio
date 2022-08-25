<template>
  <div class="mx-10 my-5 leading-8">
      <h1 class="text-2xl text-indigo-500 font-bold">PRECISE: PREconfiguring and Controlling Inverter SEt-points</h1>
      <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Brief intro to Solar Application </p>
      
      <p class="mb-3"> PRECISE takes solar application data in <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://en.wikipedia.org/wiki/JSON">JSON </a> format. A sample solar application data is shown below. PRECISE can be integrated 
        with third-party APIs such as <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://www.cleanpower.com/powerclerk/"> PowerClerk </a> to get the application data.
      </p>
      
      <div class="bg-gray-100 rounded-md font-mono text-sm pb-3 shadow-sm">
        <div class="bg-indigo-600 text-white font-bold px-2 py-2 mb-3 w-full rounded-tl-md sm:w-1/2">
          roof-top-solar-application-data.json (v1)
        </div>
        <span class="pl-10 text-gray-400"> { </span>
        <div class="pl-16" v-for="(item, index) in json_data" :key="item.key">
          <span class="text-indigo-400"> {{ item.key }} </span>
          <span class="text-gray-400"> : </span>
          <span v-if="!Array.isArray(item.value)"> {{ item.value }} </span>
          <span v-if="Array.isArray(item.value)"> [ </span>
          <div v-if="Array.isArray(item.value)">
            <span class="pl-5"> { </span>
            <div v-for="(sub_item, subindex) in item.value" :key="subindex">
              <div class="pl-10" v-for="(arr_item, ar_index) in sub_item" :key="arr_item.key">
                <span class="text-indigo-400"> {{ arr_item.key }} </span>
                <span class="text-gray-400"> : </span>
                <span v-if="!Array.isArray(arr_item.value)"> {{ arr_item.value }} </span>
                <span v-if="Array.isArray(arr_item.value)"> [ </span>
                <div v-if="Array.isArray(arr_item.value)">
                  <span class="pl-5"> { </span>
                  <div v-for="(sub_sub_item, subsubindex) in arr_item.value" :key="subsubindex">
                    <div class="pl-10" v-for="(inner_arr_item, inner_arr_index) in sub_sub_item" :key="inner_arr_item.key">
                      <span class="text-indigo-400"> {{ inner_arr_item.key }} </span>
                      <span class="text-gray-400"> : </span>
                      <span> {{ inner_arr_item.value }} </span>
                      <span v-if="inner_arr_index!=sub_sub_item.length-1" class="text-gray-400">,</span>
                    </div>
                  </div>
                  <span class="pl-5"> }</span>
                </div>
                <span v-if="ar_index!=sub_item.length-1" class="text-gray-400">,</span>
              </div>
            </div>
            <span class="pl-5"> }</span>
          </div>
          <span v-if="Array.isArray(item.value)"> ] </span>
          <span v-if="index!=json_data.length-1" class="text-gray-400">,</span>
        </div>

        <span class="pl-10 text-gray-400"> } </span>
      </div>

      <p class="mt-3 mb-3">
        A single customer application may contain multiple inverters and each inverter may have multiple solar arrays behind.
        Each application is modeled as a single unit connected to the same bus where customer is present.
        A python package <a  class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://github.com/pvlib/pvlib-python">pvlib</a> is used to model the plane of array (POA) irradiance profile for the unit.
      </p>


  </div>
</template>

<script>
export default {
    name: 'preciseSolarData',
    data(){
      return {
        json_data : [
          {"key": "app_id", "value": "DG1001"},
          {"key": "inverters", "value": [
            [
              {"key": "efficiency", "value": 0.95},
              {"key": "quantity", "value": 2},
              {"key": "unit_capacity(kva)", "value": 1.2},
              {"key": "pvs", "value": [
                [
                  {"key": "quantity", "value": 5},
                  {"key": "unit_capacity(kw)", "value": 0.7},
                  {"key": "installation", "value": "FIXED"},
                  {"key": "azimuth", "value": 180},
                  {"key": "tilt", "value": 20}
                ]
              ]}
            ]
          ]}
        ]
      }
    }
}
</script>

<style>

</style>