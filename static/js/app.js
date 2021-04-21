console.log ("app.js loaded");
function DrawBargraph(sampleId){
    console.log('DrawBargraph($({sampleId})');
}
function DrawBargraph(sampleId){
    console.log('DrawBargraph($({sampleId})');
}
function ShowMetadata(sampleId){
    console.log('ShowMetadata($({sampleId})');
}

function optionchanged(newSampleId){
    console.log('User selected $(newSampleId');

    DrawBargraph(newSampleId);
    DrawBubblechart(newSampleId);
    ShowMetadata(newSampleId);

}


function InitDashboard() {
    console.log("InitDashboard()"); 

     //Populate the dropdown according to office hours
      var selector = d3.select("#selDataset");
      
      d3.json("data/samples.json").then(function(data){
          console.log(data);

        var sampleNames = data.names;
        sampleNames.forEach(sampleId => {
             selector.append("option")
                   .text(sampleId)
                   .property("value", sampleId);
        });

        var id = sampleNames[0];

        DrawBargraph(id);
        DrawBubblechart(id);
        ShowMetadata(id);







      });

      


     //update the bargraph
     //update the bubble chart
     //update the demographic information








}

InitDashboard();