/**
 * JS doc comment
 * @param {string} a -- hello
 *
 *
 *
 */
 function main (a) {
    const svg = d3.select('svg')
    const margin = 200
    const width = svg.attr('width') - margin
    const height = svg.attr('height') - margin
  
    /* svg.append("text")
      .attr("transform", "translate(100,0)")
      .attr("x", 0)
      .attr("y", 50)
      .attr("font-size", "24px")
      .text("Global online sales of the art and antiques market 2013-2021");
    */
    const xScale = d3.scaleBand().range([0, width]).padding(0.4)
    const yScale = d3.scaleLinear().range([height, 0])
  
    const g = svg.append('g').attr('transform', 'translate(' + 100 + ',' + 100 + ')')
  
    d3.csv('chart.csv').then(function (data) {
      xScale.domain(data.map(function (d) { return d.year }))
      yScale.domain([0, 15/* d3.max(data, function (d) { return d.value }) */])
  
      g.append('g').attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale))
      g.append('g').call(d3.axisLeft(yScale).tickFormat(function (d) {
        return '$' + d
      }).ticks(10))
  
      g.append('g')
        .call(d3.axisLeft(yScale).tickFormat(function (d) { return '$' + d }))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 10)
        .attr('dy', '-5em')
        .attr('text-anchor', 'end')
        .attr('stroke', 'black')
        .text('Hello my name is Barack Obama')
  
      g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .on('mouseover', onMouseOver) // add listener for event
        .on('mouseout', onMouseOut)
        .attr('x', function (d) { return xScale(d.year) })
        .attr('y', function (d) { return yScale(d.value) })
        .attr('width', xScale.bandwidth())
        .transition()
        .ease(d3.easeExp)
        .duration(500)
        .delay(function (d, i) { return i * 50 })
        .attr('height', function (d) { return height - yScale(d.value) })
    })
    // Mouseover event handler
    function onMouseOver (d, i) {
      d3.select(this).attr('class', 'highlight')
      d3.select(this)
        .transition() // I want to add animation here
        .duration(300)
        .attr('width', xScale.bandwidth() + 5)
        .attr('y', function (d) { return yScale(d.value) - 10 })
        .attr('height', function (d) { return height - yScale(d.value) + 10 })
    }
    // MouseOut event handler
    function onMouseOut (d, i) {
      d3.select(this).attr('class', 'bar')
      d3.select(this)
        .transition()
        .duration(300)
        .attr('width', xScale.bandwidth())
        .attr('y', function (d) { return yScale(d.value) })
        .attr('height', function (d) { return height - yScale(d.value) })
    }
  }
  