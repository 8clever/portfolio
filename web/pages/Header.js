class Header extends React.Component {

    state = { collapsed: true };
    static contextType = EntryContext;

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand={"md"}>
                    <div className="container">
                        <NavbarBrand to={"/"}>RabbitAir</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLinkReactstrap href="" onClick={this.logout()}>
                                        <span className="fa fa-power-off" /> Logout
                                    </NavLinkReactstrap>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}