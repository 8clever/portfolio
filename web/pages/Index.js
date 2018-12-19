import { Scroll } from "../components";
import {
    Component
} from "../utils";

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
            <Scroll container>
                HELLO WORLD
            </Scroll>
        );
    }
}
