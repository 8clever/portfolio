import React from "react";
import {
	Component,
	Lightbox,
	SpyScroll
} from "../utils";
import {
	Row,
	Col,
	Collapse,
	Card,
	CardBody,
	CardFooter
} from "reactstrap";
import {
	Image,
	Video
} from "../components";
import MD from "react-markdown";
import { I18n, langStore } from "../store/lang";
import { Observer } from "mobx-react-lite";

export class Index extends Component {
	constructor(props) {
		super(props);
	}

	static async init() {
		return {};
	}

	lightbox = new Lightbox();

	componentDidMount() {
		this.lightbox.init();
	}

	componentDidUpdate() {
		this.lightbox.init();
	}

	render() {
		return (
			<div>
				<SpyScroll id="home" />
				<Video
					ratio={"32.6%"}
					className="d-none d-sm-none d-md-block"
					videoUrl={"/coding_man.mp4"}
					posterUrl={require("../dist/coding_man.jpg").default}>
					<div className="absolute d-flex">
						<div className={"text-center mx-auto my-auto p-5 border text-white"}>
							<div className="display-4 font-weight-bold">
								<I18n string="PURE DEVELOPMENT" />
							</div>
							<I18n string="We create fast, stable, modern technology projects." />
						</div>
					</div>
				</Video>

				<SpyScroll id="our-services" offsetY="-70" />
				<div className="d-md-none d-lg-none mb-5">&nbsp;</div>
				<div className="mb-5" />
				<div className="text-center">
					<h1 className="font-weight-bold">
						<I18n string="Our Services" />
					</h1>
					<Separator />
					<I18n string="We can create projects for any platform which you want." />
				</div>
				<div className="mb-5" />

				<Row noGutters>
					<Col md={{ size: 8, offset: 2 }}>
						<Row noGutters>
							<Col md={4}>
								<SkillCard
									icon={"laptop-code"}
									title="Web"
								/>
							</Col>
							<Col md={4}>
								<SkillCard
									icon={"desktop"}
									title="Desktop"
								/>
							</Col>
							<Col md={4}>
								<SkillCard
									icon={"mobile-alt"}
									title="Mobile"
								/>
							</Col>
						</Row>
					</Col>
				</Row>
				<div className="mb-5" />

				<SpyScroll id="our-skills" offsetY="-70" />
				<Section img={require("../dist/bg1.jpg").default}>
					<div className="mb-5" />
					<div className="text-center">
						<h1 className="font-weight-bold">
							<I18n string="Our Skills" />
						</h1>
						<Separator />
						<I18n string="Some features which we already use in projects." />
						<br />
						<I18n string="We learn new technology each day." />
						<br />
						<I18n string="We belive that we can cover all your needs in projects." />
					</div>

					<div className="mb-5" />
					<div className="px-4">
						<h4 className="text-center">
							<DotPoint /> Nodejs &nbsp;
							<DotPoint /> TypeScript &nbsp;
							<DotPoint /> C# &nbsp;
							<DotPoint /> PHP &nbsp;
							<DotPoint /> GoLang
						</h4>
						<h4 className="text-center">
							<DotPoint /> MongoDB &nbsp;
							<DotPoint /> MySQL &nbsp;
							<DotPoint /> MsSQL &nbsp;
							<DotPoint /> PouchDB &nbsp;
							<DotPoint /> CouchDB &nbsp;
						</h4>
						<h4 className="text-center">
							<DotPoint /> React &nbsp;
							<DotPoint /> Angular &nbsp;
							<DotPoint /> Backbone &nbsp;
							<DotPoint /> Phonegap &nbsp;
							<DotPoint /> Electron &nbsp;
							<DotPoint /> JQuery &nbsp;
							<DotPoint /> RequireJS &nbsp;
							<DotPoint /> Webpack &nbsp;
						</h4>
					</div>
					<div className="mb-5" />
				</Section>

				<SpyScroll id="portfolio" offsetY="-70" />
				<div className="mb-5" />
				<div className="text-center">
					<h1 className="font-weight-bold">
						<I18n string="Portfolio" />
					</h1>
					<Separator />
					<I18n string="Projects which we writed or maintained." />
					</div>
				<div className="mb-5" />

				<Row noGutters>
					<Col lg={{ size: 8, offset: 2 }} md={{ offset: 1, size: 9 }}>
						{
							_.map(CFG.projects, (project, idx) => {
								return (
									<div key={idx}>
										<legend className="text-uppercase text-center cursor-pointer" onClick={this.toggle(project.name)}>
											{project.name}
											{" "}
											{
												this.state[project.name] ?
												<i className="fa fa-minus text-info" /> :
												<i className="fa fa-plus text-info" />
											}
										</legend>

										<Collapse isOpen={!!this.state[project.name]}>
											<Separator />
											<div className="mb-4"></div>

											<Card>
												<CardBody>
													<Observer children={() => (
														<MD
															source={project.description[langStore.lang]}
														/>
													)} />
												</CardBody>
												<CardFooter>
													<Row noGutters className="justify-content-center">
														{
															_.map(project.screens, (src, idx) => (
																<Col md={4} lg={3} sm={6} key={idx}>
																	<Image
																		style={{
																			boxShadow: "0 0 10px rgba(0,0,0,0.1)"
																		}}
																		alt={src}
																		mediabox={project.name}
																		className="mx-auto mb-4"
																		src={require("../dist/portfolio/" + src).default}
																		width={200}
																		height={200}
																	/>
																</Col>
															))
														}
													</Row>
												</CardFooter>
											</Card>
											
										</Collapse>
									</div>
								)}
							)
						}
					</Col>
				</Row>
				<div className="mb-5"></div>

				<SpyScroll id="about-us" offset="-70" />
				<Section img={require("../dist/bg2.jpg").default}>
					<div className="mb-5"></div>
					<div className="text-center">
						<h1 className="font-weight-bold">
							<I18n string="About Us" />
						</h1>
						<Separator />
					</div>
					<div className="mb-5" />

					<Row noGutters>
						<Col md={6} className="px-4">
							<FeatureCard
								color="white"
								icon="clock"
								title={<I18n string="Total Working Hours" />}
								description="10000+"
							/>
						</Col>
						<Col md={6} className="px-4">
							<b><I18n string="Full Name" /></b>: <I18n string="Ivan Vityaev" />
							<br />

							<b>e-mail</b>: godofluck89@gmail.com
							<br />

							<b><I18n string="phone" /></b>: 8 (958) 500-56-02
							<br />

							<b><I18n string="Source Code" /></b>: <a href="https://github.com/8clever/portfolio">
								https://github.com/8clever/portfolio
							</a>
							<br />

							<i 
								onClick={() => {
									window.open("https://vk.com/ivanvityaev", "_blank");
								}} 
								className="fab fa-vk fa-2x text-white" 
							/>
							{" "}

							<i 
								onClick={() => {
									window.open("https://www.facebook.com/indigo.extreem", "_blank")
								}}
								className="fab fa-facebook fa-2x text-white" 
							/>
						</Col>
					</Row>
					<div className="mb-5"></div>
				</Section>

			</div>
		);
	}
}

function DotPoint() {
	return (
		<small>
			<i className="fa fa-circle small" />
		</small>
	);
}

function Separator() {
	return (
		<hr className="separator border-info" />
	);
}

function Section({ children, img }) {
	return (
		<div style={{
			background: `url(${img}) fixed no-repeat`,
			backgroundSize: "cover",
			color: "#fff",
			overflow: "hidden",
			position: "relative"
		}}>
			{children}
		</div>
	);
}

function Icon({ size, icon, set = "", color = "info" }) {
	return (
		<div className="icon text-center">
			<div className="d-flex h-100">
				<i className={`fa${set} fa-${icon} fa-${size}x mx-auto my-auto text-${color}`} />
			</div>
		</div>
	);
}

function FeatureCard({ icon, set, title, description, color }) {
	return (
		<div className="d-flex">
			<div className="w-50 text-right">
				<Icon
					color={color}
					set={set}
					icon={icon}
					size="2"
				/>
			</div>
			<div className="p-3 w-100 text-left">
				<b>{title}:</b> {description}
			</div>
		</div>
	);
}

function SkillCard({ icon, title, description }) {
	return (
		<div className="text-center">
			<Icon
				size={2}
				icon={icon}
			/>

			<h5 className="font-weight-bold">
				{title}
				{description}
			</h5>
		</div>
	);
}
