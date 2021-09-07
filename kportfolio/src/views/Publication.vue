<template>
  <div class="publication-container">
      <h2>Primary Author</h2>
      <div class="paper-container">
          <a href="https://www.nrel.gov/docs/fy21osti/78114.pdf" target="_blank">
              <div class="paper">
              <h3>An Analysis Framework for Distribution
                Network DER Integration in India:
                Distributed Solar in Tamil Nadu</h3>
            <p>2021, NREL Report</p>
            <p>Kapil Duwadi, Killian McKenna, Akshay Jain, Kajal Gaur,
                    Adarsh Nagarajan, David Palchak</p>
          </div>
          </a>
          <a href="https://ieeexplore.ieee.org/abstract/document/8833863" target="_blank">
              <div class="paper">
              <h3>Monte Carlo Analysis of High Penetration Residential Solar Voltage Impacts using High Performance Computing</h3>
                <p>2019, IEEE International Conference on Electro Information Technology (EIT)</p>
            <p>Kapil Duwadi, Aravind Ingalalli, Timothy M Hansen</p>
          </div>
          </a>
          <a href="https://ieeexplore.ieee.org/abstract/document/8973451" target="_blank">
              <div class="paper">
              <h3>Numerical Oscillation Prevention for PV Inverter Controllers in Quasi-Steady-State Simulators</h3>
                <p>2019, IEEE Power & Energy Society General Meeting (PESGM)</p>
            <p>Kapil Duwadi, Fernando B Dos Reis, Rupak Mahat, Robert Fourney, Reinaldo Tonkoski, Timothy M Hansen, Bishnu P Bhattara</p>
          </div>
          </a>
          <a href="https://ieeexplore.ieee.org/abstract/document/8833662/" target="_blank">
              <div class="paper">
              <h3>Sustainability Metrics for Inverter-based Voltage Regulation Methods in PV-rich Low Voltage Grids</h3>
                <p>2019, IEEE International Conference on Electro Information Technology (EIT)</p>
            <p>Kapil Duwadi, Robert Foutney, Reinaldo Tonkoski, Timothy M Hansen</p>
          </div>
          </a>
          <a href="https://ieeexplore.ieee.org/abstract/document/7505303/" target="_blank">
              <div class="paper">
              <h3>Design, modelling and simulation of improved power sharing scheme for parallel operation of VSI</h3>
                <p>2016, 12th IEEE International Conference on Control and Automation (ICCA)</p>
            <p>Kapil Duwadi, Netra Gyawali, Rajesh Karki</p>
          </div>
          </a>
          
      </div>
      <h2>CoAuthor</h2>
      <div class="paper-container">
          <a href="https://www.nrel.gov/docs/fy21osti/79375.pdf" target="_blank">
              <div class="paper">
              <h3>Preparing Distribution Utilities for the Future-Unlocking Demand-Side Management Potential: A Novel Analytical Framework</h3>
            <p>2021, NREL Report</p>
            <p>Killian McKenna, Kapil Duwadi, Shibani Ghosh, Adarsh Nagarajan, David Palchak, Abhishek Ranjan, Avinash Kumar, Jayanta Bora, Krushna Kaant Gupta</p>
          </div>
          </a>
          <a href="https://www.nrel.gov/docs/fy21osti/79069.pdf" target="_blank">
              <div class="paper">
              <h3>Preparing Distribution Utilities for the Future-Evolving Customer Consumption in Renewable Rich Grids: A Novel Analytical Framework</h3>
            <p>2021, NREL Report</p>
            <p>Adarsh Nagarajan, Shibani Ghosh, Kapil Duwadi, Marty Schwarz, Richard Bryce, Ilya Chernyakhovskiy, David Palchak, Jitendra Nalwaya, Mukesh Dadhich, Prashant Agarwal, Manu Sharma</p>
          </div>
          </a>
          <a href="https://www.nrel.gov/docs/fy21osti/80591.pdf" target="_blank">
              <div class="paper">
              <h3>Policy and Regulatory Environment for
                    Utility-Scale Energy Storage: Nepal</h3>
            <p>2021, NREL Report</p>
            <p>Amy Rose, Kapil Duwadi, David Palchak, and Mohit Joshi</p>
          </div>
          </a>
          <a href="https://ieeexplore.ieee.org/abstract/document/9161888" target="_blank">
              <div class="paper">
              <h3>Techno-Economic Analysis of PV Inverter Controllers for Preventing Overvoltage in LV Grids</h3>
                <p>2020 International Symposium on Power Electronics, Electrical Drives, Automation and Motion (SPEEDAM)</p>
            <p>Rupak Mahat, Kapil Duwadi, Fernando B dos Reis, Robert Fourney, Reinaldo Tonkoski, Timothy M Hansen</p>
          </div>
          </a>
          <a href="https://ieeexplore.ieee.org/abstract/document/8666551/" target="_blank">
              <div class="paper">
              <h3>Parallel implementation of AC optimal power flow and time constrained optimal power flow using high performance computing</h3>
                <p>2019, IEEE 9th Annual Computing and Communication Workshop and Conference (CCWC)</p>
            <p>Alex Werner, Kapil Duwadi, Nicholas Stegmeier, Timothy M Hansen, Jung-Han Kimn</p>
          </div>
          </a>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.publication-container {
    margin: 30px 10%;
    color: white;
}

.publication-container h2{
    margin-bottom: 30px;
    margin-top: 30px;
}

.publication-container a{
    text-decoration: none;
    color: white;
}
.paper-container{
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
}
.paper{
    padding: 30px;
    background: rgba(0,0,0,0.5);
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    margin-right: 20px;
    height: 230px;
    margin-top: 20px;
}

.paper h3{
    color: orange;
    padding-bottom: 10px;
}

.paper img{
    height: 400px;
}

.paper p{
    margin-top: 10px;
}

.paper:hover{
    border: 2px solid orange;
    cursor: pointer;
}

@media (max-width: 1200px){
    .paper{
        height: auto;
    }
    .paper-container{
        grid-template-columns: 1fr;
    }
}
</style>