import {
    Component,
    Lightbox,
    SpyScroll
} from "../utils";
import {
    Row,
    Col,
    Collapse
} from "reactstrap";
import { 
    Image, 
    Video
} from "../components";

export class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    static async init () {
        return {};
    }

    lightbox = new Lightbox();

    componentDidMount () {
        this.lightbox.init();
    }

    componentDidUpdate () {
        this.lightbox.init();
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <SpyScroll id="home" />
                <Video 
                    className="d-none d-sm-none d-md-block"
                    videoUrl={"/coding_man.mp4"}
                    posterUrl={"/coding_man.jpg"}>
                    <div className="navbar-absolute h-100 d-flex flex-column">
                        <div className="text-center mx-auto my-auto text-white">
                            <h1>
                                PURE DEVELOPMENT
                            </h1>
                            We create fast, stable, modern technology projects.
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
                    <hr className="separator border-info" />
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
                        <hr className="separator border-info" />
                        Some skills which we already use in projects.
                        <br/>
                        We learn new technology each day.
                        <br/>
                        We belive that we can cover all your needs in projects.
                    </div>
                    <div className="mb-5" />

                    <p className="text-center">
                        Nodejs, TypeScript, C#, PHP, GoLang 
                    </p>
                    <p className="text-center">
                        MongoDB, MySQL, MsSQL, PouchDB, CouchDB
                    </p>
                    <p className="text-center">
                        React, AngularJS, Backbone, Phonegap, Electron, JQuery, RequireJS, Webpack
                    </p>
                    <div className="mb-5" />
                </Section>

                <SpyScroll id="portfolio" offsetY="-70" />
                <div className="mb-5" />
                <div className="text-center">
                    <h1 className="font-weight-bold">
                        PORTFOLIO
                    </h1>
                    Projects which we writed or maintained.
                </div>
                <div className="mb-5" />
                
                <Row noGutters>
                    <Col lg={{ size: 8, offset: 2 }} md={{ offset: 1, size: 9 }}>
                        {
                            _.map(CFG.projects, (project, idx) => (
                                <div key={idx} className="text-center">
                                    <legend className="text-uppercase cursor-pointer" onClick={this.toggle(project.name)}>
                                        {project.name}
                                        {" "}
                                        {
                                            this.state[project.name] ?
                                            <i className="fa fa-minus text-info"/> :
                                            <i className="fa fa-plus text-info"/>    
                                        }
                                    </legend>
                                    
                                    <Collapse isOpen={!!this.state[project.name]}>
                                        <hr className="separator border-info" />
                                        <div className="mb-4"></div>

                                        <Row noGutters className="justify-content-center">
                                            {
                                                _.map(project.screens, (src, idx) => (
                                                    <Col md={4} lg={3} sm={6} key={idx}>
                                                        <Image 
                                                            style={{
                                                                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                                                            }}
                                                            mediabox={`project-image-${idx + 1}`}
                                                            className="mx-auto mb-4"
                                                            src={src}
                                                            width={200}
                                                            height={200}
                                                        />
                                                    </Col>
                                                ))
                                            }
                                        </Row>
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
                        <hr className="separator border-info" />
                    </div>
                    <div className="mb-5" />

                    <Row noGutters>
                        <Col md={6} className="text-center">
                            <FeatureCard
                                color="white"
                                icon="clock"
                                title="Working Hours"
                                description="6773"
                            />
                        </Col>
                        <Col md={6}>
                            <b>Full Name</b>: Ivan Vityaev
                            <br/>
                            <b>e-mail</b>: godofluck89@gmail.com
                            <br/>
                            <b>phone</b>: 8 (906) 648-28-37
                        </Col>
                    </Row>
                    <div className="mb-5"></div>
                </Section>
               
            </div>
        );
    }
}

function Section ({ children, img }) {
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

function Icon ({ size, icon, set = "", color = "info" }) {
    return (
        <div className="icon text-center">
            <div className="d-flex h-100">
                <i className={`fa${set} fa-${icon} fa-${size}x mx-auto my-auto text-${color}`} />   
            </div>
        </div>
    );
}

function FeatureCard ({ icon, set, title, description, color }) {
    return (
        <div className="d-flex">
            <div className="w-100 text-right">
                <Icon 
                    color={color}
                    set={set}
                    icon={icon}
                    size="2"
                />
            </div>
            <div className="py-3 px-2 w-100 text-left">
                <b>{title}:</b> {description}
            </div>
        </div>
    );
}

function SkillCard ({ icon, title, description }) {
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
