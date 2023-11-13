import React from 'react';

interface IProps {
	videoUrl: string;
	posterUrl: string;
	className?: string;
	children?: React.ReactNode;
}

export function Video (props: IProps) {
	const { className, posterUrl, videoUrl, children } = props;
	return (
		<div 
			className={"video-header " + className} 
			style={{
				position: "relative",
			}}>
			<video
				preload="none"
				poster={posterUrl}
				playsInline
				autoPlay
				muted
				loop>
				<source src={videoUrl} type="video/mp4" />
			</video>
			{children}
		</div>
	)
}