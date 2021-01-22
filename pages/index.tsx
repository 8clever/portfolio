import React from "react";
import { Layout } from "../src/components/Layout";
import {
	Component,
	Lightbox,
	SpyScroll
} from "../src/utils";
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
} from "../src/components";
import MD from "react-markdown";
import { I18n, langStore, Lang } from "../src/store/lang";
import { Observer } from "mobx-react-lite";
import _ from "lodash";

import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { GetStaticProps } from "next";

// server side only
import fs from "fs";
import path from "path";
import { config } from "../config";

const bg1 = "/images/bg1.jpg";
const splash = "/images/coding_man.jpg";
const coding_man = "/coding_man.mp4";

interface IProps {
	portfolio: Portfolio[]
}

interface IState {
	[key: string]: boolean;
}

export class Index extends Component<IProps, IState> {

	state: IState = {}

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
				<SpyScroll id="home" offsetY={0} />
				<Video
					className="d-none d-sm-none d-md-block"
					videoUrl={coding_man}
					posterUrl={splash}>
					<div className="absolute d-flex">
						<div className={"text-center m-auto p-5 border text-white"}>
							<div className="display-4 font-weight-bold">
									<I18n string="PURE DEVELOPMENT" />
							</div>
							<I18n string="We create fast, stable, modern technology projects." />
						</div>
					</div>
				</Video>

				<SpyScroll id="our-services" offsetY={0} />
				<div className="d-md-none d-lg-none mb-5">&nbsp;</div>
				<div className="mb-5" />
				<div className="text-center">
					<h2 className="font-weight-bold">
						<I18n string="Our Services" />
					</h2>
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

				<SpyScroll id="our-skills" offsetY={0} />
				<Section img={bg1}>
					<div className="mb-5" />
					<div className="text-center">
						<h2 className="font-weight-bold">
							<I18n string="Our Skills" />
						</h2>
						<Separator />
						<I18n string="Features which we already use in projects." />
					</div>

					<div className="mb-5" />
					<div className="px-4">
						<div className="text-center h4">
							<DotPoint /> Nodejs &nbsp;
							<DotPoint /> TypeScript &nbsp;
							<DotPoint /> C# &nbsp;
						</div>
						<div className="text-center h4">
							<DotPoint /> MongoDB &nbsp;
							<DotPoint /> MySQL &nbsp;
							<DotPoint /> PouchDB &nbsp;
							<DotPoint /> CouchDB &nbsp;
						</div>
						<div className="text-center h4">
							<DotPoint /> React &nbsp;
							<DotPoint /> Webpack &nbsp;
							<DotPoint /> MobX &nbsp;
							<DotPoint /> Unity3D &nbsp;
						</div>
					</div>
					<div className="mb-5" />
				</Section>

				<SpyScroll id="portfolio" offsetY={0} />
				<div className="mb-5" />
				<div className="text-center">
					<h2 className="font-weight-bold">
						<I18n string="Portfolio" />
					</h2>
					<Separator />
					<I18n string="Projects which we writed or maintained." />
					</div>
				<div className="mb-5" />

				<Row noGutters>
					<Col lg={{ size: 8, offset: 2 }} md={{ offset: 1, size: 10 }}>
						{
							_.map(this.props.portfolio, (project, idx) => {
								const isOpen = !!this.state[project.name];

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

										<Collapse isOpen={isOpen}>
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
																<Col key={idx}>
																	{
																		isOpen ?
																		<Image
																			alt={src}
																			mediabox={project.name}
																			className="mx-auto mb-4"
																			src={"/portfolio/" + src}
																			width={200}
																			height={200}
																		/> : null
																	}
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

interface SectionProps {
	children?: React.ReactNode,
	img: string;
}

function Section({ children, img }: SectionProps) {
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

interface IconProps {
	size: number | string;
	icon: string;
	set?: string;
	color?: string;
}

function Icon({ size, icon, set = "", color = "info" }: IconProps) {
	return (
		<div className="icon text-center">
			<div className="d-flex h-100">
				<i className={`fa${set} fa-${icon} fa-${size}x mx-auto my-auto text-${color}`} />
			</div>
		</div>
	);
}

interface SkillCardProps {
	icon: string;
	title: string;
	description?: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
	return (
		<div className="text-center">
			<Icon
				size={2}
				icon={icon}
			/>

			<div className="font-weight-bold h4">
				{title}
				{description}
			</div>
		</div>
	);
}

interface Portfolio {
	description: {
			[key: string]: string;
	};
	name: string;
	screens: string[];
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
	const portfolioPath = path.resolve("public/portfolio");
	const langs = Object.keys(langStore.langsMap) as Lang[];

	const portfolioDictionary = _.map(fs.readdirSync(portfolioPath), project => {
		const projectDir = path.join(portfolioPath, project);
		const files = fs.readdirSync(projectDir);
		const screens = _.filter(files, f => {
				return (
						/.png/.test(f) ||
						/.jpg/.test(f)
				)
		});
		const description: {[key: string]: string} = {};
	
		langs.forEach(lang => {
				description[lang] = fs.readFileSync(`${projectDir}/info.${lang}.txt`).toString();
		});
	
		return {
			description,
			name: project,
			screens: _.map(screens, s => `${project}/${s}`)
		};
	});

	return {
		props: {
			portfolio: portfolioDictionary
		}
	}
}

const IndexPage = (props: IProps) => (
	<Layout 
		structuredData={{
			"@type": "Organization",
			"@context": "https://schema.org",
			url: config.domain,
			logo: config.domain + "/logo.png"
		}}
    title="VIP Software, Ivan Vityaev, Web Development, Puzzle Games"
    description="VIP Software. Ivan Vityaev. We create fast, stable, and modern technology projects. React, Typescript, Node.js, MongoDB">
    <Header />
		<Index {...props} />
		<Footer />
  </Layout>
)

export default IndexPage
