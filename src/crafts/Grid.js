import React from "react";
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const StyledTitle= styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
`;

const Grid = (props) => {
    const animationShow = useSpring({ to: { y: 0, opacity: 1 }, from: { y: 100, opacity: 0 }, delay: 100, config: { duration: 1000 }})

    return (
        <div className="flex">
            <div className="main">
                <StyledTitle>{props.desc}</StyledTitle>
            </div>
            <div id="grid-images">
            <ul>
                { props.images.map((el, index) => (<li key={index} ><animated.span style={animationShow}><img src={el} alt="" loading="lazy"/></animated.span></li>)) }
            </ul>
            </div>
        </div>
    );
        
};

export default Grid;