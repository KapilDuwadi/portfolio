<template>
  <div>
      <p>Distribution feeder typically have radial structure with no loops and can contain one or more distribution transformers. Modeling feeder requires information about distribution assets such as conductors, transformers, customers etc. Distribution utilities also known as distribution companies typically store asset information in a geographic information system (GIS). EMeRGE can automate the process of extraction of asset information stored in .shp files (file format typically used to store geographic data) and create close to accurate distribution feeder model in an OpenDSS format. OpenDSS is an open source distribution system simulator software developed by EPRI. The process of converting .shp files into .dss files (OpenDSS uses .dss file format to store distribution model) is as follows: </p>
    <p>1. Assest information along with coordinates are extracted in .csv file format. For this EMeRGE leverages QGIS.</p>
    <p>2. Once the csv files are generated, next process is to clean them. Cleaning involves removing unnecessary data and filling missing data with appropriate values. </p>
    <p>3. EMeRGE has in built reader and writer to convert distribution asset information stored in csv files to OpenDSS feeder model.</p>
    <img src="../assets/emerge_dis.jpg">
  </div>
</template>

<script>
export default {
    name: "FeederModel"
}
</script>

<style>

</style>