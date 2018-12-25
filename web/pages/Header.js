import { 
    Nav, 
    Navbar, 
    Collapse,
    NavItem,
    NavLink as ReactNavLink,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { EntryContext } from "./Entry";
import { SpyScroll } from "../utils";

export class Header extends React.Component {

    state = { 
        collapsed: true, 
        spy: "home",
        pos: false
    };
    static contextType = EntryContext;

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    componentDidMount () {
        window.onscroll = this.onscroll;
        setImmediate(this.onscroll);
    }

    onscroll = () => {
        let { spy, pos } = _.cloneDeep(this.state);
        let spyPos = SpyScroll.getCurrentPosition();
        let scrolled = spyPos !== "home";

        if (spyPos !== spy) this.setState({ spy: spyPos });
        if (pos !== scrolled) this.setState({ pos: scrolled });
    };

    render() {

        return (
            <Navbar 
                style={{
                    transition: "all 0.5s ease-out"
                }}
                expand={"md"} 
                fixed={"top"} 
                className={this.state.pos ? "bg-white" : "" }>
                <div className="container">
                    <NavbarBrand to={"/"}>
                        <img height="43px" src="/logo.png" />
                        &nbsp;
                        <strong className="text-info h2 font-weight-bold">
                            VIP - Software
                        </strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar className="ml-auto">
                            <SpyButton 
                                className="d-none d-sm-none d-md-block"
                                id="home"
                                name="Home"
                                active={this.state.spy === "home"}
                            />
                            <SpyButton 
                                id="our-services"
                                name="Our Services"
                                active={this.state.spy === "our-services"}
                            />
                            <SpyButton 
                                id="our-skills"
                                name="Our Skills"
                                active={this.state.spy === "our-skills"}
                            />
                            <SpyButton 
                                id="portfolio"
                                name="Portfolio"
                                active={this.state.spy === "portfolio"}
                            />
                            <SpyButton 
                                id="about-us"
                                name="About Us"
                                active={this.state.spy === "about-us"}
                            />
                            <NavItem>
                                <ReactNavLink href="https://github.com/8clever/">
                                    <Button
                                        className="border-radius-20"
                                        outline
                                        color="info">
                                        <i className="fab fa-github" />
                                        {" "}
                                        GitHub
                                    </Button>
                                </ReactNavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

function NavbarToggler ({ onClick }) {
    return (
        <div onClick={onClick} className="cursor-pointer d-md-none">
            <i className="fa fa-2x fa-bars text-info"></i>
        </div>
    );
}

function SpyButton ({ id, name, active, className }) {
    return (
        <NavItem>
            <ReactNavLink >
                <Button 
                    className={"border-radius-20 " + className}
                    onClick={() => { 
                        SpyScroll.goTo(id); 
                    }}
                    color="info" 
                    outline={!active}>
                    {name}
                </Button>
            </ReactNavLink>
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