<template>
  <div>
      <p> In a scenario where SMART inverter settings are not enough, PRECISE alerts planning engineers by sending
          email for further investigation. Email content includes summary of all the power flow analysis, and ability to download feeder
          model for further analysis.
      </p>
      <p>
          Apart from that any error happened during the processing is sent to Application Admins for further investigation.
          PRECISE also provided a route to check the health of the application. Logs from the application server is also propagaed to client 
          using server side event in case they want to look at low level messages from PRECISE server.
      </p>
  </div>
</template>

<script>
export default {
 name: 'alertNotification'
}
</script>

<style>

</style>