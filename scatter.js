
function initializeScatterView(data, siteType){

			var vis = d3.select("#viz");

			var xRange = d3.scale.linear().range([40, 400]).domain([0
							,
							d3.max(data, function (d) {
								return d.maleValue}
							)]);
			var yRange = d3.scale.linear().range([400, 40]).domain([0,
							d3.max(data, function (d) {
								return d.femaleValue
							})]);
			var xAxis = d3.svg.axis().scale(xRange);
			var yAxis = d3.svg.axis().scale(yRange).orient("left");
			vis.append("svg:g").call(xAxis).attr("transform", "translate(0,400)");
			vis.append("svg:g").call(yAxis).attr("transform", "translate(40,0)");
		console.log(data);
			var circles = vis.selectAll("circle").data(data);
		circles
			.enter()
			.insert("circle");
	

		circles
			.attr("cx", function (d) { return xRange(d.maleValue) })
			.attr("cy", function (d) { return yRange(d.femaleValue) })

	
		circles
			.attr("r", 4)
			.style("fill", "red");
			  





//axes labels
		vis.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 45)
     .attr("x",-10)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("% female users");


      vis.append("g")
      // .attr("class", "x axis")
      // .call(xAxis)
    .append("text")
      .attr("y", 375)
     .attr("x",400)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("% male users");




for (i=0; i<data.length; i++){
      vis.append("g")
      // .attr("class", "x axis")
      // .call(xAxis)
  .append("text")
      .data(data)
      .attr("y", function(d){ console.log(data[i].site); return yRange(data[i].femaleValue)})
     .attr("x",function(d){return xRange(data[i].maleValue)})
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(function(d){return data[i].site;});

  }

}

function updateScatterView (category,site) {


  document.getElementById("label").innerHTML = category+" breakdown for "+site;
    var category = "gender";
	 var site = "all"
   var type= "scatter";

  var data = getDataRows(category,site);

    // setup button events

	var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
		.rangeRound([height, 0]);

	var color = d3.scale.ordinal()
		.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.tickFormat(d3.format(".2s"));

	var svg = d3.select("#viz")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	  .append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");



	
	initializeScatterView(data, site);
	
	
}
