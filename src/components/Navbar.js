import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
} from './Navbar.styles';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/login">
                            KUvid Dashboard
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink style={{"width":"15vw","height":"10vh","fontSize":"2vw"}} onClick={closeMenu} to="/dashboard">Dashboard</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink style={{"width":"5vw","height":"10vh","fontSize":"2vw"}} onClick={closeMenu} to="/admin">Admin</MenuLink>
                            </MenuItem>
                            </Menu>
                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;