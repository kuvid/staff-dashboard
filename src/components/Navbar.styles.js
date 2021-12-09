import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Container} from '../GlobalStyles';

export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: #6A0AC7;
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: left;
align-items: center;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
height: 80px;


@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 2rem;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0rem 2rem;
height: 100%;
transition: all .2s ease;

&:hover {
    color: #E38B06;
    transform: traslateY(-3rem);

}
&:active {
    transform: traslateY(3rem);
    color: #E38B06;
}

@media only screen and (max-width:1000px){
    display: block;
    text-align: center;
    transition: all .2s ease;
}
`;
