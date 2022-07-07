import React from "react";
import { NavLink } from "react-router-dom" ;
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink)`
    font-family: 'Josefin Sans', sans-serif;
    background: transparent;
    border: 0.15em solid black;
    color: black;
    padding: 0.3em 0.5em 0.1em 0.5em;
    font-size: 1.6em;
    text-decoration: none;
    display: block;
    -mox-border-radius: 0.9em;
    border-radius: 0.9em;
    -moz-box-shadow: inset 0 0 2px #656565 , 0 0 2px #656565;
    -webkit-box-shadow: inset 0 0 2px #656565 , 0 0 2px #656565;
    box-shadow: inset 0 0 2px #656565 , 0 0 2px #656565;
    line-height: 1.1em;
`;

const Nav = () => {
    const menuDown = useSpring({ to: { y: 0, opacity: 1 }, from: { y: -200, opacity: 0 }, delay: 100, config: { duration: 800 }})
    return (
        <animated.div style={menuDown} id="nav">
            <StyledNavLink to="/info">Info</StyledNavLink>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
            <StyledNavLink to="/crafts">Crafts</StyledNavLink>
        </animated.div>
    );
};

export default Nav;