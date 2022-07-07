import React from "react";
import Grid from "./Grid";

import img1 from "./images/analog-photos/14.jpg"
import img2 from "./images/analog-photos/26.jpg"
import img3 from "./images/analog-photos/CNV000007.jpg"
import img4 from "./images/analog-photos/CNV000009.JPG"
import img5 from "./images/analog-photos/CNV000011.jpg"
import img6 from "./images/analog-photos/CNV000014.JPG"
import img7 from "./images/analog-photos/CNV000015.JPG"
import img8 from "./images/analog-photos/CNV000016.jpg"
import img9 from "./images/analog-photos/CNV000017.JPG"
import img10 from "./images/analog-photos/CNV000019.JPG"
import img11 from "./images/analog-photos/CNV000021.JPG"
import img12 from "./images/analog-photos/CNV000028.jpg"
import img13 from "./images/analog-photos/CNV000031 2.jpg"
import img14 from "./images/analog-photos/CNV000031.jpg"
import img15 from "./images/analog-photos/CNV000032 2.jpg"
import img16 from "./images/analog-photos/CNV000033 2.JPG"
import img17 from "./images/analog-photos/CNV000033.JPG"
import img18 from "./images/analog-photos/CNV000034 2.jpg"
import img19 from "./images/analog-photos/CNV000034.png"
import img20 from "./images/analog-photos/CNV000039.jpg"
import img21 from "./images/analog-photos/CNV000041 2.jpg"
import img22 from "./images/analog-photos/CNV000041.jpg"
import img23 from "./images/analog-photos/CNV000111.jpg"
import img24 from "./images/analog-photos/CNV000118.jpg"


const Analog = () => {
    const desc = "Analog Photos";
    let imageset = [img23, img24, img1, img4, img3, img2, img5, img6, img7, img8, img9, img10, img11, img13, img15, img21, img14, img16, img22, img18, img20, img19]

    return (
        <Grid images={imageset} desc={desc}/>
    );
};

export default Analog;