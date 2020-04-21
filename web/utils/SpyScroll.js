import React from "react";

export class SpyScroll extends React.Component {

    static goTo (id) {
        let element = document.getElementById(id);
        let rect = element.getBoundingClientRect();
        let offset = parseInt(element.getAttribute("offsety"));
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
            let offset = parseInt(elem.getAttribute("offsety"));

            if (rect.y + offset <= 1) currentPosition = elem.id;
        });

        return currentPosition;
    }

    static propTypes = {
        id: PropTypes.string.isRequired
    };

    render () {
        return (
            <div 
                id={this.props.id} 
                className="spy-scroll" 
                offsety={this.props.offsetY || 0}
            />
        );
    }
}