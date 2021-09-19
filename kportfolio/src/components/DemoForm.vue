<template>
  <div class="demo-form-container">
      <div class="demo-form">
          <h2 @click="handle_form_cancel">X</h2>
          <form @submit.prevent="submitDemoForm">
              <h1> Request for a DEMO! </h1>
              <p class="form_label">Please enter your full name </p>
              <input class="form_input" name="full_name" placeholder="Your Full Name" v-model="form.full_name"/>

              <p class="form_label">Please enter your email address </p>
              <input class="form_input" name="email" type="email" placeholder="Your email address" v-model="form.email"/>

              <p class="form_label">Which project are you interested in ?</p> <br>
              
              <input type="radio" id="one" value="emerge" v-model="form.project">
              <label for="emerge">Emerge</label>
              <br>
              <input type="radio" id="evolve" value="evolve" v-model="form.project">
              <label for="evolve">Evolve</label>
              <br>
              <input type="radio" id="effort" value="effort" v-model="form.project">
              <label for="effort">Effort</label>
              <br>
              <input type="radio" id="precise" value="precise" v-model="form.project">
              <label for="precise">Precise</label>

              <p class="form_label">Preferred date for virtual meet</p>
              <input class="form_input" name="date" type="date" v-model="form.date"/>

              <p class="form_label">Message </p>
              <input class="form_input" name="message" type="text" placeholder="Any message you want to send" v-model="form.message"/>

              <button type="submit">Send</button>
            <br>
          </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "DemoForm",
    data(){
        return {
            form: {
                full_name: null,
                email: null,
                project: null,
                message: null,
                date: null
            }
        }
    },
    methods: {
        handle_form_cancel(){
            this.$emit("cancelClicked")
        },
        submitDemoForm(){
            console.log(this.form)
            this.$emit("submitClicked")
            axios.post('https://kduwadi.com/api/demorequest', this.form).then( 
                    (response) => {
                        console.log(response.status)
                    }, (error) => {
                        console.log(error.response.data)
                        alert(error.response.data)
                    }
            )
            
        }
    }
}
</script>

<style>
.demo-form-container{
    position: absolute;
    background: rgba(0,0,0,0.9);
    width: 100%;
    height: 100%;
    top: -30px;
    left: 0;
    z-index: 3;
}

.demo-form{
    position: absolute;
    top: 20vh;
    left: 30%;
    width: 40%;
    /* height: 60vh; */
    background: rgb(10, 68, 51);
    border-radius: 10px;
    padding-bottom: 30px;
}
.demo-form h2{
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

.demo-form h2:hover{
    cursor: pointer;
    background: black;
    color: white;
}

.demo-form h1{
    text-align: center;
    margin-top: 30px;
    font-size: 1.5em;
    color: orange;
}

.form_label{
    margin-left: 10%;
    margin-top: 10px;
    margin-bottom: -20px;
    color: orange;
}

.form_input{
    margin: 30px 10% 0 10%;
    border: none;
    background: transparent;
    width: 80%;
    padding: 10px 0;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    font-size: 1em;
    font-weight: lighter;
}

.demo-form input{
    margin-left: 10%;
    margin-top: 10px;
}

label {
    padding-left: 10px;
}

.demo-form button {
    margin: 20px 35% 0 35%;
    width: 30%;
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 1em;
}

.demo-form button:hover{
    cursor: pointer;
    color: white;
    background: orange;
}

@media (max-width: 700px){
    .demo-form{
        width: 80%;
        left: 10%;
    }
}

</style>