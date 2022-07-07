import React from "react";


// Cloropleth Map component from d3.js
const Map = (props) => {
    if (props.all == true) {
        return (
            <svg id="cloropleth-map" width="1400" height="650">
            </svg>
        );
    }
    else if (props.all == false) {
        return (
            <svg id="cloropleth-map-yearly" width="1400" height="650">
            </svg>
        );
    }
    
};

export default Map;