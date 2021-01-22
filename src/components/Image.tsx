import React from "react";
import _ from "lodash";

interface ImageProps {
	width: number;
	height: number;
	mediabox?: string;
	src?: string;
	alt?: string;
	className?: string;
	style?: React.CSSProperties;
	noImageSrc?: string;
	noImageAlt?: string;
	backgroundColor?: string;
}

export const Image = (props: ImageProps) => {
	const { src, mediabox, style } = props;
	return (
		<a 
			href={src}
			data-mediabox={mediabox || ""}>
			<div 
				className="mx-auto mb-3 img-thumbnail"
				style={{
					...style,
					width: 300,
					height: 300,
					background: `url("${src}")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}} />
		</a>
	)
}
