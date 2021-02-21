import React, { Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler
} from 'reactstrap';
import Link from 'next/link';

const Navi = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="primary" dark expand="md" className="fixed-top">
            <NavbarBrand href="/">
                <img src="https://galacticblue.net/img/gb-logo-3-long-dark.png" height="42" alt="GalacticBlue" border="0" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2" />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link href="/"><a className="px-4 nav-link">home</a></Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/about/"><a className="px-4 nav-link">about</a></Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/portfolio/"><a className="px-4 nav-link">examples</a></Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/contact/"><a className="px-4 nav-link">contact</a></Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navi;