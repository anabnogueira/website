import React from "react";
import styled from 'styled-components'


const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    gap: 2%;
    width: 100%;
    list-style-type: none;
    border-bottom: 2px dotted #eaeaea;
    padding: 0.2em 0.1em;
`;

const ListItemLeft = styled.div`
    width: 23%;
    color: black;
    line-height: 2.3em;
    text-align: left;
`;

const PaletteName = styled.span`
    color: black;
    font-weight: bold;
    font-size: 1.1em;
`;

const ListItemRight = styled.div`
    width: 75%;
    padding: 1em;
    border-radius: 1em;
`;

const ColorUnit = styled.div`
    display: flex;
    gap: 1.4em;
`;

const SingleColor = styled.div`
    display: flex;
    flex-direction: column;
`;

const SingleColorSample = styled.div`
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
`;

const SingleColorDesc = styled.div`
    color: #000000;
    height: 1.5em;
    margin-top: 0.5em;
    line-height: 1em;
    text-align: center;
`;

const Palette = (props) => {
    return (
        <ListItem>
            <ListItemLeft>
                <PaletteName>{props.name}</PaletteName>
            </ListItemLeft>
            <ListItemRight>
                <ColorUnit>
                {props.colors.map(color =>
                <SingleColor>
                    <SingleColorSample key={color} style={{
                        backgroundColor : color
                        }}
                    onClick={() => {navigator.clipboard.writeText(color)}}
                    >
                    </SingleColorSample>
                    <SingleColorDesc key={color}>
                        {color}
                    </SingleColorDesc>
                </SingleColor> 
                )} 
                </ColorUnit>
            </ListItemRight>
        </ListItem>
    );
};

export default Palette;
