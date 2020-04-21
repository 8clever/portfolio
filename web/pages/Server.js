import React from "react";
import { Entry } from "./Entry";
import { StaticRouter } from "react-router-dom";

export class Server extends React.Component {
    render () {
        return (
            <StaticRouter 
                context={this.props.context}
                location={this.props.req.url}>
                <Entry/>
            </StaticRouter>
        );
    }
}