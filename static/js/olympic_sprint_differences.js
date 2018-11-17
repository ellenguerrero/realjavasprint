function filterJSON(json, key, value) {
  var result = [];
  json.forEach(function(val,idx,arr){
    if(val[key] == value){
    
      result.push(val)
    }
  })
  return result;
}

// Set dimensions of canvas/graph
var margin = {top: 50, right: 20, bottom: 30, left: 160},
    width = 1000 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

 // Set dimensions of canvas/graph
 var margin = {top: 50, right: 20, bottom: 30, left: 160},
 width = 1000 - margin.left - margin.right,
 height = 550 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().range([0, width])
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
 .orient("bottom")
 .tickValues(d3.range(1948, 2020, 4))
 .tickFormat(d3.format("d"))

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(10);

// Define line
var recordline = d3.svg.line()
    .interpolate("cardinal")
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.value); });

// Adds svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
var data;
// Get data
d3.json("olympic_sprint_differences.json", function(error, json) {
  console.log(json)
 
  json.forEach(function(d) {
        d.value = +d.value;
  });

    d3.select('#inds')
            .on("change", function () {
                var sect = document.getElementById("inds");
                var section = sect.options[sect.selectedIndex].value;

                data = filterJSON(json, 'event', section);

          
          //debugger
          
            data.forEach(function(d) {
                d.value = +d.value;
                d.active = true;
            });
            
            
            //debugger
                updateGraph(data);


                jQuery('h1.page-header').html(section);
            });

    // generate initial graph
    data = filterJSON(json, 'event', '100 meters female');
    updateGraph(data);

});

var color = d3.scale.ordinal().range(["#FF0000", "#00FF00"]);

function updateGraph(data) {
    

    // Scale range of the data
    x.domain([d3.min(data, function(d) { return d.year; }), d3.max(data, function(d) { return d.year})]);
    y.domain([d3.min(data, function(d) { return d.value*.75; }), d3.max(data, function(d) { return d.value*1; })]);


    // Nest entries by record
    dataNest = d3.nest()
        .key(function(d) {return d.record;})
        .entries(data);


        var result = dataNest.filter(function(val,idx, arr){
                  return $("." + val.key).attr("fill") != "#ccc" 
                  // matching the data with selector status
                })
                
                
        var record = svg.selectAll(".line")
          .data(result, function(d){return d.key});

        record.enter().append("path")
            .attr("class", "line");

            record.transition()
            .style("stroke", function(d,i) { return d.color = color(d.key); })
            .attr("id", function(d){ return 'tag'+d.key.replace(/\s+/g, '');}) // assign ID
            .attr("d", function(d){
        
                return recordline(d.values)
            });

            record.exit().remove();

        var legend = d3.select("#legend")
            .selectAll("text")
            .data(dataNest, function(d){return d.key});

        //checkboxes
        legend.enter().append("rect")
          .attr("width", 10)
          .attr("height", 10)
          .attr("x", 0)
          .attr("y", function (d, i) { return 0 +i*15; })  // spacing
          .attr("fill",function(d) { 
            return color(d.key);
            
          })
          .attr("class", function(d,i){return "legendcheckbox " + d.key})
            .on("click", function(d){
              d.active = !d.active;
              
              d3.select(this).attr("fill", function(d){
                if(d3.select(this).attr("fill")  == "#ccc"){
                  return color(d.key);
                }else {
                  return "#ccc";
                }
              })
              
              
             var result = dataNest.filter(function(val,idx, arr){
         return $("." + val.key).attr("fill") != "#ccc" 
       // matching the data with selector status
      })
      
       // Hide or show the lines based on the ID
       svg.selectAll(".line").data(result, function(d){return d.key})
         .enter()
         .append("path")
         .attr("class", "line")
         .style("stroke", function(d,i) { return d.color = color(d.key); })
         .attr("d", function(d){
                return recordline(d.values);
         });
 
        svg.selectAll(".line").data(result, function(d){return d.key}).exit().remove()  
                    
            })
                
    // Add the Legend text
    legend.enter().append("text")
      .attr("x", 15)
      .attr("y", function(d,i){return 10 +i*15;})
      .attr("class", "legend");

        legend.transition()
      .style("fill", "#777" )
      .text(function(d){return d.key;});

        legend.exit().remove();

        svg.selectAll(".axis").remove();

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
};

function clearAll(){
  d3.selectAll(".line")
    .transition().duration(100)
            .attr("d", function(d){
        return null;
      });
  d3.select("#legend").selectAll("rect")
  .transition().duration(100)
      .attr("fill", "#ccc");
};

function showAll(){
  d3.selectAll(".line")
    .transition().duration(100)
            .attr("d", function(d){
        return recordline(d.values);
      });
  d3.select("#legend").selectAll("rect")
  .attr("fill",function(d) {
    if (d.active == true){
       return color(d.key);
     }
   })
};