
// Make a dropdown Button

var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
  .range([ 0, width ])
  .padding(1);
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")

var y = d3.scaleLinear()
  .range([ height, 0]);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")

var Years = ['2006', '2007', '2008', '2009', '2011']

var dropdownButton = d3.select("#my_dataviz")
  .append('select')

dropdownButton 
  .selectAll('myOptions')
 	.data(Years)
  .enter()
	.append('option')
  .text(function (d) { return d; }) 
  .attr("value", function (d) { return d; })

function update() {
 d3.json("/"), function(data) {
  console.log('data :', data[0])
    googletrends.forEach(function(data) {
        data.ranking = +data.ranking;
      });
    
    x.domain(data.map(function(d) { return d.keyword; }));
    xAxis.transition().duration(1000).call(d3.axisBottom(x));

    y.domain([0, d3.max(data, function(d) { return +d[ranking] }) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

    var toolTip = d3.tip()
      .attr("class", "tooltip")
      .offset([80, -60])
      .html(function(d) {
        return (`${d.keyword}<br> Search Rank: ${d.ranking}<br> Top Related Search Query: ${d.related_queries} <br> ${d.image_url}`);
      });
    
    svg.call(toolTip);

    u.on("click", function(data) {
      toolTip.show(data, this);
    })
    u.on("mouseover", function(data, index) {
        toolTip.show(data);
      });

    u.on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Google Search Trends");

    svg.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Search Rank");

      
    function updateYear() {
      var j = svg.selectAll(".myLine")
        .data(data)
        j
        .enter()
        .append("line")
        .attr("class", "myLine")
        .merge(j)
        .transition()
        .duration(1000)
            .attr("x1", function(d) { console.log(x(d.keyword)) ; return x(d.keyword); })
            .attr("x2", function(d) { return x(d.keyword); })
            .attr("y1", y(0))
            .attr("y2", function(d) { return y(d[ranking]); })
            .attr("stroke", "grey");
    
        var u = svg.selectAll("circle")
        .data(data)
        u
        .enter()
        .append("circle")
        .merge(u)
        .transition()
        .duration(1000)
        .attr("cx", function(d) { return x(d.keyword); })
        .attr("cy", function(d) { return y(d[ranking]); })
        .attr("r", 8)
        .attr("fill", "#69b3a2");
    };

    dropdownButton.on("change", function(d) {
      var selectedOption = d3.select(this).property("value")
      updateYear(selectedOption)
      });
  
      var trace1 = {
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y: [219, 146, 112, 127, 124, 180, 236, 207, 236, 263, 350, 430, 474, 526, 488, 537, 500, 439],
        name: 'Rest of world',
        marker: {color: 'rgb(55, 83, 109)'},
        type: 'bar'
      };
      
      var trace2 = {
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y: [16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270, 299, 340, 403, 549, 499],
        name: 'China',
        marker: {color: 'rgb(26, 118, 255)'},
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {
        title: 'US Export of Plastic Scrap',
        xaxis: {tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
          }},
        yaxis: {
          title: 'USD (millions)',
          titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
          },
          tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
          }
        },
        legend: {
          x: 0,
          y: 1.0,
          bgcolor: 'rgba(255, 255, 255, 0)',
          bordercolor: 'rgba(255, 255, 255, 0)'
        },
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1
      };
      
      Plotly.newPlot('myDiv', data, layout);
  // };.catch(function(error) {
  // console.log(error);
  };
  }


