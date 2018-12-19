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
                                <NavButton pathname={"/"} name="Home" />
                                <NavButton pathname={"/about"} name="About Us" />
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
                    outline={!isActive(props.pathname)}>
                    {props.name}
                </Button>
            </NavLink>
        </NavItem>
        
    );
}

function isActive(pathname) {
    return pathname === window.location.pathname;
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