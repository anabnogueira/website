import React from "react";
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { useState } from "react";
import "./literature.css";

import ChoroplethMap from "./ChoroplethMap";
import BookData from './data/book-data-all.csv';
import BookData2018 from './data/book-data-2018.csv';
import BookData2019 from './data/book-data-2019.csv';
import BookData2020 from './data/book-data-2020.csv';
import BookData2021 from './data/book-data-2021.csv';
import BookData2022 from './data/book-data-2022.csv';


const LitDisplay= styled.div`
    width: 80%;
    left: 10%;
    position: relative;
    font-size: 1.2em;
`;

const LitCountry= styled.div`
    display: inline-block;
    background-color: #efefef;
    width: 40%;
    border-radius: 1em;
    height: 3em;
    line-height: 3em;
    margin-right: 1em;
`;

const LitCount= styled.div`
    display: inline-block;
    background-color: #efefef;
    width: 20%;
    border-radius: 1em;
    line-height: 3em;
    margin-left: 1em;
`;

const LiteratureMenu= styled.div`
    display: block;
    font-size: 1em;
    width: 12%;
    position: absolute;
    top: 0;
    left: 6%;
`;

const LiteratureTitle= styled.div`
    font-family: menlo, meslo lg,monospace;
    font-size: 1.4em;
    border-bottom: 0.2em solid black;
    line-height: 3em;
`;

const LiteratureList= styled.ul`
    font-family: menlo, meslo lg,monospace;
    font-size: 1em;
    color: #656565;
    line-height: 3em;
    list-style-type: none;
`;

const StyledFooter = styled.footer`
    position: fixed;
    height: 100px;
    width: 100%;
    text-align: center;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
`;

const Literature = () => {
    const [currentData, setYear] = useState(BookData);

    const menuShow = useSpring({ to: { y: 0, opacity: 1 }, from: { y: 200, opacity: 0 }, delay: 100, config: { duration: 800 }})
    const titleShow = useSpring({ to: { opacity: 1 }, from: {  opacity: 0 }, delay: 100, config: { duration: 1000 }})
    
    const dimensions = {
        width: 1000,
        height: 650,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
      };


    return (
        <div className="flex" style={{overflowY : "hidden"}}>
            <animated.div style={titleShow}>
                <LiteratureMenu>
                    <LiteratureTitle>Literature Map</LiteratureTitle>
                    <LiteratureList>
                        <li className="literature-year" onClick={(e) => setYear(BookData)}>All Years</li>
                        <li className="literature-year" onClick={(e) => setYear(BookData2022)}>2022</li>
                        <li className="literature-year" onClick={(e) => setYear(BookData2021)}>2021</li>
                        <li className="literature-year" onClick={(e) => setYear(BookData2020)}>2020</li>
                        <li className="literature-year" onClick={(e) => setYear(BookData2019)}>2019</li>
                        <li className="literature-year" onClick={(e) => setYear(BookData2018)}>2018</li>
                    </LiteratureList>
                </LiteratureMenu>
            </animated.div>
            <div id="map-container">
                <ChoroplethMap datainput={currentData} dimensions={dimensions} />
            </div>
            <div className="main">
                <animated.div style={menuShow}>
                    <StyledFooter>
                    <LitDisplay>
                        <LitCountry><span className="emoji">🌎</span><span id="#lit-country-name">Country</span></LitCountry>
                        <LitCount><span className="emoji">#️⃣</span><span id="#lit-country-count">-</span></LitCount>
                    </LitDisplay>
                    </StyledFooter>
                </animated.div>
            </div>
        </div>
    );
        
};

export default Literature;
