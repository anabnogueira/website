import React from "react";
import { ColorData } from "./ColorData";
import Palette from "./Palette";
import styled from "styled-components"

const StyledTitle= styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
`;

const ColorPalettes = () => {

    return (
        <div className="flex">
            <div className="main">
                <StyledTitle>Color Palettes</StyledTitle>
                <ul>
                {ColorData.map(palette => <Palette key={palette.name} name={palette.name} colors={palette.colors}>{palette.name}</Palette>)}
                </ul>
            </div>
        </div>
    );
};

export default ColorPalettes;
