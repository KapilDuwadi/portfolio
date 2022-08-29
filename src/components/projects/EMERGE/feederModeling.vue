<template>
  <div class="mx-10 my-5 leading-8">

    <h1 class="text-2xl text-indigo-500 font-bold">EMERGE: Emerging technologies Management and Risk evaluation on distribution Grids Evolution</h1>
    <p class="non-italic mb-5 text-base text-gray-800 font-bold"> Distribution feeder modeling in EMERGE </p>

    <p>  Distribution feeder typically have radial structure with 
        no loops and can contain one or more distribution transformers.
        Modeling feeder requires information about distribution assets 
        such as conductors, transformers, customers etc. Distribution 
        utilities also known as distribution companies typically store
        asset information in a geographic information system (GIS).
        </p>
    <img class="shadow-md my-3" src="images/distmodelpic.jpg">

    <p>
       
        EMeRGE can automate the process of extraction of asset 
        information stored in .shp files (file format typically used to 
        store geographic data) and create close to accurate distribution 
        feeder model in an OpenDSS format. OpenDSS is an open source distribution 
        system simulator software developed by EPRI. The process of converting 
        .shp files into .dss files (OpenDSS uses .dss file format to store 
        distribution model) is as follows:
    

        <ol class="list-disc pl-10 pt-3">
            <li>
                Assest information along with coordinates are 
                extracted in .csv file format. For this EMeRGE leverages QGIS.
            </li>
            <li>
                Once the csv files are generated, next process is to 
                clean them. Cleaning involves removing unnecessary data and filling missing data with appropriate values.
            </li>
            <li>
                    EMeRGE has in built reader and writer to convert 
                distribution asset information stored in csv files to OpenDSS feeder model.
            </li>
        </ol>
    </p>
            
            
  </div>
</template>

<script>
export default {
  name: "emergeFeederModeling",
};
</script>

<style>
</style>