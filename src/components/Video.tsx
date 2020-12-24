import React from 'react';

interface IProps {
	ratio: string;
	videoUrl: string;
	posterUrl: string;
	className?: string;
}

export class Video extends React.Component<IProps> {

	state = {
		parentStyles: {}
	};

	render() {
		
		return (
			<div 
				className={"video-header " + this.props.className} 
				style={{
					position: "relative",
					paddingTop: this.props.ratio
				}}>
				<video
					preload="none"
					className="absolute"
					poster={this.props.posterUrl}
					playsInline
					autoPlay
					muted
					loop>
					{
						window.innerWidth > 767 ?
						<source src={this.props.videoUrl} type="video/mp4" /> :
						null
					}
				</video>

				{this.props.children}
			</div>
		);
	}
}