import { 
    Nav, 
    Navbar, 
    NavbarToggler,
    Collapse,
    NavItem,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { EntryContext } from "./Entry";

export class Header extends React.Component {

    state = { collapsed: true };
    static contextType = EntryContext;

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    isActive = (pathname) => {
        return this.props.location.pathname === pathname;
    };

    render() {

        return (
            <div>
                <Navbar expand={"md"}>
                    <div className="container">
                        <NavbarBrand to={"/"}>
                            <strong>VIP - Software</strong>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar className="ml-auto">
                                <NavButton pathname={"/"} name="Home" active={this.isActive("/")} />
                                <NavButton pathname={"/about"} name="About Us" active={this.isActive("/about")} />
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

function NavButton (props) {
    return (
        <NavItem>
            <NavLink to={props.pathname} >
                <Button 
                    color="info" 
                    style={{
                        borderRadius: 20
                    }}
                    outline={!props.active}>
                    {props.name}
                </Button>
            </NavLink>
        </NavItem>
    );
}

function NavbarBrand(props) {
    return (
        <Link {...props} className="navbar-brand">
            {props.children}
        </Link>
    );
}

function NavLink (props) {
    return (
        <Link {...props} className="nav-link">
            {props.children}
        </Link>
    );
}