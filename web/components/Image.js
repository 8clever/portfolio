import React from "react";
import ReactDOM from "react-dom";

export class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: "100%",
			height: null,
			isNoImage: false
		};
	}

	imageRef = React.createRef();

	resizeImage = () => {
		const target = ReactDOM.findDOMNode(this.imageRef.current);
		
		if (target === null) {
			return;
		}

		const originalWidth = target instanceof HTMLImageElement ? target.naturalWidth : 0;
		const originalHeight = target instanceof HTMLImageElement ? target.naturalHeight : 0;
		const widthRatio = this.props.width / originalWidth;
		const heightRatio = this.props.height / originalHeight;
		
		if (widthRatio < heightRatio) {
			this.setState({
				width: originalWidth * widthRatio,
				height: originalHeight * widthRatio
			});
		} else {
			this.setState({
				width: originalWidth * heightRatio,
				height: originalHeight * heightRatio
			});
		}
	};

	showNoImage = (e) => {
		if (this.props.noImageSrc == undefined) {
			return;
		}
		this.setState({
			isNoImage: true
		});
	};

	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		mediabox: PropTypes.string,
		src: PropTypes.string,
		alt: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object,
		noImageSrc: PropTypes.string,
		noImageAlt: PropTypes.string,
		backgroundColor: PropTypes.string
	};

	render() {
		const style = {
			wrapper: {
				border: "1px solid #ccc",
				width: this.props.width + 4,
				height: this.props.height + 4,
				backgroundColor: this.props.backgroundColor,
				overflow: "hidden"
			},
			image: {
				width: this.state.width,
				height: this.state.height
			}
		};

		let wrapedStyle = _.assign({}, style.wrapper, this.props.style);
		let className = this.props.className || "";

		className += " d-flex";

		if (this.state.isNoImage) {
			return (
				<div 
					style={wrapedStyle} 
					className={className}>
					<img
						className="mx-auto my-auto"
						ref={this.imageRef}
						src={this.props.noImageSrc} 
						alt={this.props.noImageAlt || 'noimage'} 
						style={style.image}
						onLoad={this.resizeImage}
					/>
				</div>
				
			);
		}

		return (
			<a 
				href={this.props.src}
				data-mediabox={this.props.mediabox || ""}
				style={wrapedStyle} 
				className={className}>
				<img
					className="mx-auto my-auto"
					ref={this.imageRef} 
					src={this.props.src} 
					alt={this.props.alt}
					style={style.image}
					onLoad={this.resizeImage}
					onError={this.showNoImage}
				/>
			</a>
		);
	}
}
