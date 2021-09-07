<template>
  <div>
    <p> Utilities typically store primary and secondary network information in different databases with former more well kept than later one.
        The roof top PV from customers is likely to impact secondary network more than primary network. PRECISE uses secondary network information to build out 
        the network model for simulation for all customers and stores them in database to be used during the processig of interconnection application. Since the network keeps changing, PRECISE keeps updating 
        these models in a regular basis (by default weekly however can be changed).
    </p>
    <img src="../assets/distribution.jpg">
  </div>
</template>

<script>
export default {
    name: "PreciseFeeder"
}
</script>

<style>

</style>