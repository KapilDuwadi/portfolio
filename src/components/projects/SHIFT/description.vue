<template>
  <div class="mx-10 my-5 leading-8">
    <h1 class="text-2xl text-indigo-500 font-bold">SHIFT: Synthetic Feeder Model Generation Tool</h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Brief description for SHIFT tool. </p>
  
    <p> SHIFT is an opensource software developed at NREL for creating synthetic distribution feeder models. 
      It uses openstreet data such as road networks and buildings data to build feeder models.
      Users can also provide customers location in case openstreet buildings data is not available or is not
      representative of your region. It can be used to build two layer distribution network
      i.e. high tension and low tension layer separated by distribution transformers. In case you don't know
      where the distribution transformers need to be, you can use in built clustering algorithm
      to determine transformer siting. You can use these models for academic research and to augment utilities existing
      data to build full distribution models. 
    </p>

    <p class="text-indigo-600 border-b-2 font-bold border-gray-300 mt-5 mb-3"> What is Distribution Model ? </p>
    <p>
      A distribution model is way of representing distribution system components such as loads, conductors, transformers,
      capacitors, switches, fuses etc in a way such that it can be later ingested by distribution system simulators to perform
      technical analysis mainly power flow analysis. Power flow simulation helps to determing voltages at all nodes in the systems along with disptach from generating 
      sources assuming rated power is known for all loads. There are lots of distribution simulators e.g. OpenDSS, Cyme, Synergy, MATLAB, PSSE etc. Distribution system
      simulators specifically need to perform three phase unbalanced power flow analysis unlike transmission system where single phase power flow analysis is sufficient. 
    </p>
    <p class="text-indigo-600 border-b-2 font-bold border-gray-300 mt-5 mb-3"> Challenges in developing distribution model  </p>
    <p> Power utilities do not maintain distribution system data in a consistent manner. In some cases they do not even care about distribution secondaries and maintain
      data only upto distribution transformers. One of the challenge in maintaining distribution system is that it changes more often than transmission system. New customers are added 
      all the time which may require upgrading transformer, adding secondaries and all these changes may take time to be reflected in central database even if they maintain one. Inconsistent 
      data also increases time for cleaning and developing model. All these challenges force utilities to use rule of thumb analysis and/or aggregate analysis. Increasing use of IOT (Internet of things) devices and DERS (distributed energy
      resources) require detailed distribution model to be able to perform cost/benefit as well as impact analysis.
    </p>
    <p class="text-indigo-600 border-b-2 font-bold border-gray-300 mt-5 mb-3"> Using OpenStreet Map data to fill data gap </p>
    <p> Until utilities have well mainatined database to keep track of all distribution assests, we need some of way of filling these 
      data gap issues and OpenStreet map data could be the solution. OpenStreet Map data combined with exisiting data and distribution design principles can be used to develop realistic 
      distribution feeder model which can be used in variety of use cases. SHIFT uses OpenStreet data and existing data utility have combined with design principles 
      to develop synthetic distribution feeder model.
    </p>

  </div>
</template>

<script>
export default {
    name: "shiftDescription"
}
</script>

<style>

</style>