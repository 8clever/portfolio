

export class Video extends React.Component {

	state = {
		parentStyles: {}
	};

	static propTypes = {
		ratio: PropTypes.string.isRequired,
		videoUrl: PropTypes.string.isRequired,
		posterUrl: PropTypes.string.isRequired
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
					className="absolute"
					poster={this.props.posterUrl}
					playsInline
					autoPlay
					muted
					loop>
					<source src={this.props.videoUrl} type="video/mp4" />
				</video>

				{this.props.children}
			</div>
		);
	}
}