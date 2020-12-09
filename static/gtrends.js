(function() {

  var header    = document.querySelector('h1');
  // var selectBox = document.querySelector('select');
  // var runButton = document.querySelector('button');

  // On SelectBox Change
  // selectBox.addEventListener('change', function() {
  //   triggerAnimation();
  // })

  // // On "run animation" button clicked
  // runButton.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   triggerAnimation();
  // })

  function triggerAnimation() {

    var animation = selectBox.value;
    header.className = "";
    setTimeout(function() {
      header.className = "animated " + animation;
    }, 10);

  }

})();

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

//};.catch(function(error) {
//console.log(error);
};
}


