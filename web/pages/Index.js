import {
    Component,
    Lightbox
} from "../utils";
import {
    Row,
    Col
} from "reactstrap";
import { Image } from "../components";

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

        return (
            <div>
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
                                    <legend className="text-uppercase">{project.name}</legend>
                                    <hr className="separator border-info" />
                                    <div className="mb-4"></div>
                                    <Row>
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
                                    <div className="mb-5"></div>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
               
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

function Icon ({ size, icon, set = "" }) {
    return (
        <div className="icon text-center">
            <div className="d-flex h-100">
                <i className={`fa${set} fa-${icon} fa-${size}x mx-auto my-auto text-info`} />   
            </div>
        </div>
    );
}

function FeatureCard ({ icon, set, title, description }) {
    return (
        <div className="d-flex">
            <div className="w-100 text-right">
                <Icon 
                    set={set}
                    icon={icon}
                    size="2"
                />
            </div>
            <div className="py-3 px-2 w-100">
                {title}
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
