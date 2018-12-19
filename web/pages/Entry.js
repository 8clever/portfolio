import { Switch, Route, Redirect, Link } from "react-router-dom";
import queryString from "querystring-es3";

import { Index } from "./Index";

const Routes = [
    {
        exact: true,
        component: Async(Index),
        path: "/",
        withHeader: true
    },
    {
        component: PageNotFound
    }
]

import { 
    Nav, 
    Navbar, 
    NavbarToggler,
    Collapse,
    NavItem,
    UncontrolledAlert,
    NavLink as NavLinkReactstrap
} from "reactstrap";

export const __ = {
    ERROR: {
        UNAUTHORIZED: "unauthorized"
    }
}

export const EntryContext = React.createContext();

let __PrevComponent = null;
let __prevData = null;
function Async (Component) {

    return class extends React.Component {
        constructor (props) {
            super(props);

            this.state = {
                error: null,
                data: null
            };
        }

        static get contextType () {
            return EntryContext;
        }

        componentDidMount () {
            this._mount = true;

            Component.init = Component.init || async function() { return {}; };

            let search = this.props.location.search || "";
            search = search.slice(1, search.length);

            let ctx = {
                query: queryString.parse(search),
                params: this.props.match.params
            };

            Component.init.call(this, ctx).then(data => {
                if (!this._mount) return;
                if (data.redirect) return this.setState({ data });

                data.url = {
                    query: queryString.parse(search),
                    params: this.props.match.params
                };

                __PrevComponent = Component;
                __prevData = data;
                this.setState({ 
                    data
                });
            }).catch(err => {
                if (!this._mount) return;
                
                this.setState({ 
                    error: err 
                });
            });
        }

        componentWillUnmount () {
            this._mount = false;
        }

        render () {
            let { error, data } = this.state;

            if (error && error.subject === __.ERROR.UNAUTHORIZED) {
                return (
                    <Redirect to={"/signin"} />
                );
            }

            if (error) {
                return (
                    <Error error={error} />
                );
            }

            if (data && data.redirect) return <Redirect to={data.redirect} />;

            if (data) {
                return <Component {...data} />;
            }

            if (__PrevComponent && __prevData) {
                return <__PrevComponent {...__prevData} />;
            }

            return (
                <div className="w-100 text-center">
                    <div className="fa fa-spin fa-spinner text-danger"></div>
                    {" "}
                    Loading...
                </div>
            );
        }
    };
}


function NavbarBrand(props) {
    return (
        <Link {...props} className="navbar-brand">
            {props.children}
        </Link>
    )
}

function NavLink (props) {
    return (
        <Link {...props} className="nav-link">
            {props.children}
        </Link>
    )
}

function Error ({ error }) {
    return (
        <div className="w-100 text-center">
            { error.message || "Generic Error" }
            <br />
            <Link to={"/"}>
                <u>go to home</u>
            </Link>
        </div>
    )
}

function AlertError ({ error }) {
    return (
        <UncontrolledAlert color="danger">
            <b>Error!</b>
            <p>
                {error.message || "Generic Error"}
            </p>
        </UncontrolledAlert>
    )
}

function PageNotFound () {
    return (
        <Error error={{ message: "Page Not Found" }} />
    )
}

export class Entry extends React.Component {

    constructor (props) {
        super(props);
        this.isServer = !!props.isServer;
    }

    state = {
        renderKey: 0
    }

    componentDidMount () {
        this._isMounted = true;
    }

    componentWillUnmount () {
        this._isMounted = false;
    }

    catchError = async fn => {
        try {
            await fn();
        } catch(err) {
            let { clientErrors } = _.cloneDeep(this.state);
            clientErrors = clientErrors || [];
            clientErrors.push(err);
            this._isMounted && this.setState({ clientErrors });
        }
    };

    reload = () => {
        let { renderKey } = _.cloneDeep(this.state);
        renderKey++;
        this._isMounted && this.setState({ renderKey });
    };

    render () {
        return (
            <EntryContext.Provider value={this}>
                <div className="d-flex flex-column app-body">

                    {
                        _.map(Routes, (r, key) => {
                            if (!r.withHeader) return null;

                            return <Route 
                                {..._.pick(r, [ "path", "exact" ])} 
                                key={key + this.state.renderKey} 
                                component={Header} 
                            />
                        })
                    }

                    <div className={ "d-flex align-items-center h-100"}>
                        <Switch>
                            {
                                _.map(Routes, (r, key) => <Route key={key + this.state.renderKey} {...r} />)
                            }
                        </Switch>

                        <div className="err-body p-2">
                            {
                                _.map(this.state.clientErrors, (err, idx) => {
                                    return <AlertError 
                                        key={idx}
                                        error={err} 
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </EntryContext.Provider>
        )
    }
}