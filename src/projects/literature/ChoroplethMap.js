import React from "react";

import GeoJSON from "./world.geojson";
import * as d3 from "d3";

// Last data input for 2022:
// Romancero Gitano by Federico Garcia Llorca

const ChoroplethMap = ({ datainput, dimensions }) => {
  const svgRef = React.useRef(null);
  const { width, height, margin } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  React.useEffect(() => {
    // Create root container where we will append all other chart elements
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear svg content before adding new elements

    // Map and projection
    const path = d3.geoPath();

    const projection = d3
      .geoMercator()
      .scale(120)
      .center([-30, 10])
      .translate([width / 2, height / 2]);

    // Data and color scale
    let data = new Map();
    const colorScale = d3
      .scaleThreshold()
      .domain([0, 1, 2, 4, 5, 10, 20, 30, 40, 50])
      .range([
        "#c5d9eb",
        "#bdd5e8",
        "#7dafd1",
        "#518cbf",
        "#3c75b1",
        "#295c9f",
        "#163871",
        "#0c2651",
        "#061938",
      ]);

    // Load external data and boot
    Promise.all([
      d3.json(GeoJSON),
      d3.csv(datainput, function (d) {
        data.set(d.code, +d.count);
      }),
    ]).then(function (loadData) {
      let topo = loadData[0];
      // Draw the map
      svg
        .append("g")
        .selectAll("path")
        .data(topo.features)
        .join("path")
        // draw each country
        .attr("d", d3.geoPath().projection(projection))
        // set the color of each country
        .attr("fill", function (d) {
          d.total = data.get(d.id) || 0;
          return colorScale(d.total);
        })
        .style("stroke", "white")
        .attr("class", function (d) {
          return "Country";
        })
        .on("mouseover", mouseOver)
        .on("mouseleave", mouseLeave);
    });

    let mouseOver = function (d) {
      d3.select(this).transition().duration(0).style("opacity", 0.2);

      // get data on hovered country
      let countryHovered = d3.select(this).data();

      document.getElementById("#lit-country-name").innerHTML =
        countryHovered[0].properties.name;
      document.getElementById("#lit-country-count").innerHTML =
        countryHovered[0].total;
    };

    let mouseLeave = function (d) {
      d3.select(this)
        .transition()
        .duration(0)
        .style("opacity", 1)
        .style("stroke", "white");

      document.getElementById("#lit-country-name").innerHTML = "Country";
      document.getElementById("#lit-country-count").innerHTML = "—";
    };
  }, [datainput, height, width]); // Redraw chart if data changes

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default ChoroplethMap;
