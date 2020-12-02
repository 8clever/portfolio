import React from "react";
import _ from "lodash";

interface IProps {
    id: string;
    offsetY?: number | string;
}

export class SpyScroll extends React.Component<IProps> {

    static goTo (id: string) {
        let element = document.getElementById(id);
        if (!element) return null;

        let rect = element.getBoundingClientRect();
        let offset = parseInt(element.getAttribute("data-offsety") || "0");
        let anchorY = window.scrollY + rect.y + offset;

        setTimeout(function () {
			window.scrollTo({
                top: anchorY,
                behavior: "smooth"
            });
		}, 400);
    }

    static getCurrentPosition () {
        let elems = document.querySelectorAll(".spy-scroll");
        let currentPosition = "";

        _.each(elems, elem => {
            let rect = elem.getBoundingClientRect();
            let offset = parseInt(elem.getAttribute("data-offsety") || "0");

            if (rect.y + offset <= 1) currentPosition = elem.id;
        });

        return currentPosition;
    }

    render () {
        return (
            <div 
                id={this.props.id} 
                className="spy-scroll" 
                data-offsety={this.props.offsetY || 0}
            />
        );
    }
}