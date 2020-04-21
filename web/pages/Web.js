import { Entry } from "./Entry";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Entry />
    </BrowserRouter>, 
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}
