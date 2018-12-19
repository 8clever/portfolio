import { Entry } from "./Entry";
import { StaticRouter } from "react-router-dom";

export class Server extends React.Component {
    render () {
        return (
            <StaticRouter {...this.props} >
                <Entry {...this.props} />
            </StaticRouter>
        )
    }
}