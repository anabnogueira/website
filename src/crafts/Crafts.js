import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from 'styled-components'
import './crafts.css';
import Analog from "./Analog";
import Digital from "./Digital";
import Illustration from "./Illustration";
import Embroidery from "./Embroidery";


const StyledTitle= styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
`;

const StyledContainer= styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4em;
`;

const StyledChoice= styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.2em;
    color: white;
    width: 45%;
    height: 200px;
    font-weight: 500;
    border-radius: 0 15% 0 15%;
    padding: 0.2em 0 0 0.4em;
    box-sizing: border-box;
    text-decoration: none;
    &:hover {
        background-color: transparent;
        border: 4px dashed black;
        color: black;
    }
`;


const Crafts = () => {
    return (
        <div className="full-width">
                <Routes>
                    <Route path="/illustration" element={<Illustration/>} />
                    <Route path="/analog-photography" element={<Analog/>} />
                    <Route path="/digital-photography" element={<Digital/>} />
                    <Route path="/embroidery" element={<Embroidery/>} />
                    <Route exact path="/" element={<CraftsList/>} />
                </Routes>
        </div>
    );
}



const CraftsList = () => {

    return (
        <div className="flex">
            <div className="main">
                <StyledTitle>Crafts</StyledTitle>
                <StyledContainer>
                    <StyledChoice to="/crafts/illustration" className="bg-pink">Illustration</StyledChoice>
                    <StyledChoice to="/crafts/analog-photography" className="bg-yellow">Analog Photography</StyledChoice>
                    <StyledChoice to="/crafts/digital-photography" className="bg-blue">Digital Photography</StyledChoice>
                    <StyledChoice to="/crafts/embroidery" className="bg-purple">Embroidery</StyledChoice>
                </StyledContainer>
            </div>
        </div>
    );
        
};

export default Crafts;