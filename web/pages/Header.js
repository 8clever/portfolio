import React from "react";
import {
	Nav,
	Navbar,
	Collapse,
	NavItem,
	NavLink as ReactNavLink,
	Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { SpyScroll } from "../utils";
import { observer } from "mobx-react-lite";
import { langStore, I18n } from "../store/lang";

export const Header = observer(() => {
	const [ collapsed, setCollapsed ] = React.useState(true);
	const [ spy, setSpy ] = React.useState("home");
	const [ bgWhite, setBgWhite ] = React.useState(false);

	const toggleNavbar = () => setCollapsed(!collapsed);

	const onscroll = () => {
		const spyPos = SpyScroll.getCurrentPosition();
		setSpy(spyPos);
		setBgWhite(spyPos !== "home");
	};

	React.useEffect(() => {
		window.onscroll = onscroll;
		setImmediate(onscroll);
	}, []);

	return (
		<Navbar
			style={{
				transition: "all 0.5s ease-out"
			}}
			expand={"md"}
			fixed={"top"}
			className={bgWhite ? "bg-white" : ""}>
			<div className="container">
				<NavbarBrand to={"/"}>
					<img height="43px" src="/logo.png" />
					&nbsp;
					<strong className="text-info h2 font-weight-bold">
						VIP - Software
					</strong>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar className="ml-auto">
						<SpyButton
							className="d-none d-sm-none d-md-block"
							id="home"
							name="Home"
							active={spy === "home"}
						/>
						<SpyButton
							id="our-services"
							name="Our Services"
							active={spy === "our-services"}
						/>
						<SpyButton
							id="our-skills"
							name="Our Skills"
							active={spy === "our-skills"}
						/>
						<SpyButton
							id="portfolio"
							name="Portfolio"
							active={spy === "portfolio"}
						/>
						<SpyButton
							id="about-us"
							name="About Us"
							active={spy === "about-us"}
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
						<NavItem>
							<ReactNavLink>
								<Button
									onClick={() => {
										const keys = Object.keys(langStore.langsMap);
										const idx = keys.findIndex(k => k === langStore.lang) + 1;
										const lang = keys[idx] || keys[0];
										langStore.setLang(lang);
									}}
									className="border-radius-20"
									outline
									color="info">
									<LangView />
								</Button>
							</ReactNavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</div>
		</Navbar>
	);
});

const LangView = observer(() => {
	return <span>{langStore.langsMap[langStore.lang]}</span>;
});

function NavbarToggler({ onClick }) {
	return (
		<div onClick={onClick} className="cursor-pointer d-md-none">
			<i className="fa fa-2x fa-bars text-info"></i>
		</div>
	);
}

function SpyButton({ id, name, active, className }) {
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
					<I18n string={name} />
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