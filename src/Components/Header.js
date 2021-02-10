import React from "react";
import {Link, withRouter} from 'react-router-dom';
import styled from "styled-components";

const Menuheader = styled.header`
    width: 100%;
    height: 50px;
    position:fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(20,20,20, 0.8);
    box-shadow: 0px 1px 3px 2px rgba(0,0,0, 0.8);
    z-index: 1111;
`;
const List = styled.ul`
    display:flex;
    height: 100%;
`;


const Item = styled.li`
    width: 80px;
    border-bottom: 3px solid ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom 0.4s ease-in-out;
`;

const Slink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Header(props){
    // props.location.pathname
    const { location : {pathname}} = props;
    // console.log(props)
    return (
    <Menuheader>
        <List>
            <Item current={pathname === "/" }>
                <Slink to='/'>Movies</Slink>
            </Item>
            <Item current={pathname === "/tv" }>
                <Slink to='/tv'>TV</Slink>
            </Item>
            <Item current={pathname === "/search" }>
                <Slink to='/search'>Search</Slink>
            </Item>
        </List>
    </Menuheader>
    )
}

export default withRouter(Header);
