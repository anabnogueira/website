import React from "react";
import Grid from "./Grid";

import img1 from "./images/embroidery/computer.jpeg"
import img2 from "./images/embroidery/IMG_3131.jpg"
import img3 from "./images/embroidery/poster.jpg"


const Embroidery = () => {
    const desc = "Embroidery";
    let imageset = [img3, img1, img2];

    return (
        <Grid images={imageset} desc={desc}/>
    );
};

export default Embroidery;