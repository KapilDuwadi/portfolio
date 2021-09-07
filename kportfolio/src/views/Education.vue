<template>
  <div class="education-container">
      <div class="university">
          <div class="universiy-content">
              <a href="https://www.sdstate.edu/" target="_blank"><h2>South Dakota State University</h2></a>
              <h3>MS in Electrical Engineering</h3>
              <a href="https://openprairie.sdstate.edu/cgi/viewcontent.cgi?article=4205&context=etd" target="_blank" class="education-button">Download Thesis</a>
          </div>

          <div class="universiy-content">
              <a href="https://pcampus.edu.np/" target="_blank"><h2>Tribuvan University</h2></a>
              <h3>Bachelor in Electrical Engineering</h3>
              <a href="https://ieeexplore.ieee.org/abstract/document/7505303" target="_blank" class="education-button">Project Paper</a>
          </div>
           <p class="footer">@KapilDuwadi, 2021</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.education-container{
    margin: 50px 10%;
    min-height: 100vh;
}

.university{
    text-align: center;
    color: white;
    position: relative;
}

.universiy-content{
    margin: 20px auto;
    padding-top: 150px;
    height: 300px;
    width: 100%;
    background: rgba(0,0,0,0.1);
}

.universiy-content h2{
    font-size: 2em;
    color: orange;
    margin-bottom: 20px;

}

.universiy-content h3{
    font-size: 1.5em;
    color: white;
    margin-bottom: 30px;
}

.universiy-content a{
    text-decoration: none;
}

.education-button{
    padding: 5px 10px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1.2em;
    background: teal;
    text-decoration: none;
    color: white;
}
.education-button:hover{
    border: 3px solid orange;
    cursor: pointer;
}
</style>