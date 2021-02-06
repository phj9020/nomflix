import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Menuheader = styled.header`
    width: 100%;
    height: 50px;
    position:fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(20,20,20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.8);
`;
const List = styled.ul`
    display:flex;
    height: 100%;
`;


const Item = styled.li`
    width: 80px;
`;

const Slink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Header(){
    return (
    <Menuheader>
        <List>
            <Item>
                <Slink to='/'>Movies</Slink>
            </Item>
            <Item>
                <Slink to='/tv'>TV</Slink>
            </Item>
            <Item>
                <Slink to='/search'>Search</Slink>
            </Item>
        </List>
    </Menuheader>
    )
}

export default Header;
