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
import { I18n } from "../store/lang";

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
					posterUrl={"/coding_man.jpg"}>
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
						OUR SERVICES
					</h1>
					<Separator />
					We can create projects for any platform which you want.
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
				<Section img="/bg1.jpg">
					<div className="mb-5" />
					<div className="text-center">
						<h1 className="font-weight-bold">
							OUR SKILLS
						</h1>
						<Separator />
						Some skills which we already use in projects.
						<br />
						We learn new technology each day.
						<br />
						We belive that we can cover all your needs in projects.
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
						PORTFOLIO
					</h1>
					<Separator />
					Projects which we writed or maintained.
                </div>
				<div className="mb-5" />

				<Row noGutters>
					<Col lg={{ size: 8, offset: 2 }} md={{ offset: 1, size: 9 }}>
						{
							_.map(CFG.projects, (project, idx) => (
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
												<MD
													source={project.description}
												/>
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
																	mediabox={project.name}
																	className="mx-auto mb-4"
																	src={src}
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
							))
						}
					</Col>
				</Row>
				<div className="mb-5"></div>

				<SpyScroll id="about-us" offset="-70" />
				<Section img="/bg2.jpg">
					<div className="mb-5"></div>
					<div className="text-center">
						<h1 className="font-weight-bold">
							About Us
						</h1>
						<Separator />
					</div>
					<div className="mb-5" />

					<Row noGutters>
						<Col md={6} className="px-4">
							<FeatureCard
								color="white"
								icon="clock"
								title="Total Working Hours"
								description="10000+"
							/>
						</Col>
						<Col md={6} className="px-4">
							<b>Full Name</b>: Ivan Vityaev
							<br />

							<b>e-mail</b>: godofluck89@gmail.com
							<br />

							<b>phone</b>: 8 (958) 500-56-02
							<br />

							<b>Source Code</b>: <a href="https://github.com/8clever/portfolio">
								https://github.com/8clever/portfolio
							</a>
							<br />

							<a href="https://vk.com/ivanvityaev">
								<i className="fab fa-vk fa-2x text-white" />
							</a>
							{" "}

							<a href="https://www.facebook.com/indigo.extreem">
								<i className="fab fa-facebook fa-2x text-white" />
							</a>
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
