import React from "react";
import Grid from "./Grid";

import img1 from "./images/illustration/1 2.jpg"
import img2 from "./images/illustration/1-final.jpg"
import img3 from "./images/illustration/1.jpg"
import img4 from "./images/illustration/1 3.jpg"
import img5 from "./images/illustration/2.jpg"
import img6 from "./images/illustration/5.jpg"
import img7 from "./images/illustration/A.jpg"
import img8 from "./images/illustration/B.jpg"
import img9 from "./images/illustration/books1.jpg"
import img10 from "./images/illustration/books2.jpg"
import img11 from "./images/illustration/catarina-halftoned-small.jpg"
import img12 from "./images/illustration/color.jpg"
import img13 from "./images/illustration/comic1-small.jpg"
import img14 from "./images/illustration/csf.jpg"
import img15 from "./images/illustration/Final.jpg"
import img16 from "./images/illustration/ob.jpg"
import img17 from "./images/illustration/scan-4.jpg"
import img18 from "./images/illustration/scan-52.jpg"
import img19 from "./images/illustration/taste of cherry.jpg"
import img20 from "./images/illustration/vasco.jpg"



const Illustration = () => {
    const desc = "Illustration";
    let imageset = [img1, img2, img3, img4, img5, img6, img9, img10, img11, img13, img12, img14, img15, img16, img17, img19, img18, img20]
        
    return (
        <Grid images={imageset} desc={desc}/>
    );
};

export default Illustration;