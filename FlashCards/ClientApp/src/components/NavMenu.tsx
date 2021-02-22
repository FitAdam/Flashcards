import React from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { VscDebugAlt } from "react-icons/vsc";

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 navbar-dark bg-dark" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            < VscDebugAlt />
                            Flash-Cards</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-white" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white" to="/flash-cards">Learn with us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white" to="/about">About</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} className="text-white" to="/SignUpForm"></NavLink>
                                </NavItem>
                                

                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
