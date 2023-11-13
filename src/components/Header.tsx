import React from "react";
import {
	Nav,
	Navbar,
	Collapse,
	NavItem,
	NavLink as ReactNavLink,
	Button
} from "reactstrap";
import { SpyScroll } from "../utils";
import { observer } from "mobx-react-lite";
import { langStore, I18n, Lang } from "../store/lang";
import Link, { LinkProps } from "next/link";
import { github } from "./Footer";
import { config } from '../../config'

const size = "lg";

export const Header = observer(() => {
	const [ collapsed, setCollapsed ] = React.useState(true);
	const [ spy, setSpy ] = React.useState("home");

	const toggleNavbar = () => setCollapsed(!collapsed);

	const onscroll = () => {
		const spyPos = SpyScroll.getCurrentPosition();
		setSpy(spyPos);
	};

	React.useEffect(() => {
		window.onscroll = onscroll;
		setTimeout(onscroll);
	}, []);

	return (
		<Navbar
			style={{
				background: "#1d1d1d",
				transition: "all 0.5s ease-out"
			}} 
			expand={size}>
			<div className="container">
				<NavbarBrand href={ config.basePath + "/"}>
					<div style={{
						display: "flex",
					}}>
						<img 
							className="d-none d-sm-block"
							style={{
								marginRight: 5
							}}
							alt='8clever' 
							height="43px" 
							src={ config.basePath + "/favicon.ico" } />
						<h1 
							style={{
								display: "inline-block",
								margin: 0
							}}
							className="text-info h2 font-weight-bold">
							VIP - Software
						</h1>
					</div>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar className="ml-auto">
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
						<NavItem>
							<ReactNavLink href={github}>
								<Button
									tag="div"
									style={{
										whiteSpace: "nowrap"
									}}
									className="border-radius-20"
									outline
									color="info">
									<i className="fab fa-github"/> GitHub
								</Button>
							</ReactNavLink>
						</NavItem>
						<NavItem>
							<ReactNavLink>
								<Button
									onClick={() => {
										const keys = Object.keys(langStore.langsMap);
										const idx = keys.findIndex(k => k === langStore.lang) + 1;
										const lang = (keys[idx] || keys[0]) as Lang;
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

interface NavbarTogglerProps {
	onClick: () => void;
}

function NavbarToggler({ onClick }: NavbarTogglerProps) {
	return (
		<div onClick={onClick} className={`cursor-pointer d-${size}-none`}>
			<i className="fa fa-2x fa-bars text-info"></i>
		</div>
	);
}

interface SpyButtonProps {
	id: string;
	name: string;
	active?: boolean;
	className?: string;
}

function SpyButton({ id, name, active, className }: SpyButtonProps) {
	return (
		<NavItem>
			<ReactNavLink >
				<Button
					style={{
						whiteSpace: "nowrap"
					}}
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

interface NavbarBrandProps extends LinkProps {
	children?: React.ReactNode
}

function NavbarBrand(props: NavbarBrandProps) {
	return (
		<Link {...props} className="navbar-brand">
			{props.children}
		</Link>
	);
}