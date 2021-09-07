<template>
  <div class="thank-container">
        <div class="thankyou-note">
            <h2 @click="handle_form_cancel">X</h2>
            Thanks for requesting a DEMO. Will see you soon.
        </div>
  </div>
</template>

<script>
export default {
    name: "ThankYou",
    methods:{
        handle_form_cancel(){
            this.$emit("cancelClicked")
        }
    }
}
</script>

<style>
.thank-container{
    position: absolute;
    background: rgba(0,0,0,0.9);
    width: 100%;
    height: 100%;
    top: -30px;
    left: 0;
    z-index: 3;
}
.thankyou-note{
    position: absolute;
    top: 50vh;
    left: 35%;
    width: 30%;
    padding: 20px;
    background: teal;
}

.thankyou-note h2{
    position: absolute;
    top:-12px;
    right:-8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    color:black;
    text-align:center;
    border: 3px solid orange;
}

.thankyou-note h2:hover{
    cursor: pointer;
    background: black;
    color: white;
}

</style>