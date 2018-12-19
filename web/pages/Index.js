import {
    Component
} from "../utils";
import {
    Row,
    Col
} from "reactstrap";

export class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    static async init () {
        return {};
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur.
                </div>

                <div className="mb-5" />
                
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
                
                <div className="mb-5" />

                <Section img="/bg1.jpg">
                    <div className="mb-5" />
                    <div className="text-center">
                        <h1 className="font-weight-bold">
                            SOME FEATURES
                        </h1>
                        <hr className="separator border-info" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur.
                    </div>
                    <div className="mb-5" />

                    <Row noGutters>
                        <Col md={6}>
                            <FeatureCard 
                                set="b"
                                icon="react"
                                title="React"
                            />
                        </Col>
                        <Col md={6}>
                            <FeatureCard 
                                set="b"
                                icon="angular"
                                title="Angular"
                            />
                        </Col>
                        <Col md={6}>
                            <FeatureCard 
                                icon="desktop"
                                title="Electron"
                            />
                        </Col>
                        <Col md={6}>
                            <FeatureCard 
                                icon="mobile-alt"
                                title="phonegap"
                            />
                        </Col>
                    </Row>
                    <div className="mb-5" />
                </Section>

                <div className="mb-5" />
                <div className="text-center">
                    <h1 className="font-weight-bold">
                        PORTFOLIO
                    </h1>
                    <hr className="separator border-info" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur.
                </div>
                <div className="mb-5" />


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
