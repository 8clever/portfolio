
import { validateInput } from "./validateInput";
import React from "react";
import _ from "lodash"
import moment from "moment";

export * from "./validateInput";
export * from "./Lightbox";
export * from "./SpyScroll";

export class Component<T, S> extends React.Component<T, S> {

    toggle (name: string) {
        return () => {
            this.change(name)({
                target: {
                    value: !_.get(this.state, name)
                }
            });
        };
    }

    change (field: string, options: object = {}) {
		return (e: any) => {
            e.target.value = validateInput(e.target.value, options);
			let state = _.cloneDeep(this.state);
			_.set(state, field, e.target.value);
			this.setState(state);
		};
	}

    changeDate (field: string) {
        return (date: moment.Moment) => {
            let value = date && date.toDate && date.toDate();
            this.change(field)({ target: { value }});
        };
    }
}