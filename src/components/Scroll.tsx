import React from "react";

interface ScrollProps {
	container?: boolean;
	children?: React.ReactChild
}

export const Scroll = (props: ScrollProps) => {
	return (
		<div className="w-100 h-100 scroll">
			{
				props.container ?
				<div className="container pt-3">
					{props.children}
				</div> :
				props.children
			}
		</div>
	);
}

export default Scroll;