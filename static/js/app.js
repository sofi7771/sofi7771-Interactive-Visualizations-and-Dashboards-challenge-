console.log ("app.js loaded");

function InitDashboard() {
    console.log("InitDashboard()"); 

     //Populate the dropdown according to office hours
      var selector = d3.select("#selDataset");
      
      d3.json("data/samples.json").then(function(data){
          console.log(data);
      });

      


     //update the bargraph
     //update the bubble chart
     //update the demographic information








}

InitDashboard();