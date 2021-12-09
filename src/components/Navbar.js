import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import 
{
    Nav,
    NavbarContainer,
    Menu,
    MenuItem,
    MenuLink,
} from './Navbar.styles';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const logout = () => {
        localStorage.clear();
        setClick(false);
    }
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
                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink style={{"width":"12vw","height":"10vh","fontSize":"2vw","paddingLeft":0}} onClick={closeMenu} to="/dashboard">Dashboard</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink style={{"width":"65vw","height":"10vh","fontSize":"2vw"}} onClick={closeMenu} to="/admin">Admin</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink style={{"width":"5vw","height":"10vh","fontSize":"2vw"}} onClick={logout} to="/">Logout</MenuLink>
                            </MenuItem>
                            </Menu>
                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;