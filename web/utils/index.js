export * from "./validateInput";
export * from "./Lightbox";
export * from "./SpyScroll";

import { validateInput } from "./validateInput";
import React from "react";

export class Component extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    toggle (name) {
        return () => {
            this.change(name)({
                target: {
                    value: !_.get(this.state, name)
                }
            });
        };
    }

    change (field, options) {
		return (e) => {
            e.target.value = validateInput(e.target.value, options);
			let state = _.cloneDeep(this.state);
			_.set(state, field, e.target.value);
			this.setState(state);
		};
	}

    changeDate (field) {
        return date => {
            let value = date && date.toDate && date.toDate();
            this.change(field)({ target: { value }});
        };
    }
}