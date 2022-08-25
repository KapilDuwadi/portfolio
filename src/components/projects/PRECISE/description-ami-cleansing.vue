<template>
  <div>
        <p> <a class="text-indigo-600" href="https://www.eaton.com/us/en-us/products/utility-grid-solutions/advanced-metering-infrastructure/fundamentals-of-ami.html">Advanced Metering Infrastructure (AMI) </a> is an integrated system of communication, equipments and data management systems used to collect
            customer data such as consumption and voltage data remotely. AMI data 
            is an integral part of time series power flow analysis in power distribution system.

        </p>

        <div class="flex justify-center my-5">
            <img class="" src="/images/ami_data.svg" width="450">
        </div>
        

        <p> PRECISE uses rolling AMI data from past one year to perform time series power flow analysis
            for assessing customers roof top PV application. Data cleaning algorithms are used to filter
            bad data from AMI. Once the AMI data is cleaned for all customers within the distribution
            system under consideration, they will be used as profile data for power flow analysis.
        </p> 
  </div>
</template>

<script>
export default {
    name: "amiCleansing"

}
</script>

<style>

</style>