

export class Video extends React.Component {

    state = {
        parentStyles: {
            minHeight: 300
        }
    };

    static propTypes = {
        videoUrl: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired
    };

    videoRef = React.createRef();

    componentDidMount () {
        window.onresize = this.setSize;
        setTimeout(this.setSize, 0);
    }

    setSize = () => {
        let { parentStyles } = _.cloneDeep(this.state);
        let video = this.videoRef.current.getBoundingClientRect();
        parentStyles.height = video.height;
        this.setState({
            parentStyles
        });
    };

    render () {
        return (
            <div className={"video-header " + this.props.className} style={this.state.parentStyles}>
                <video 
                    ref={this.videoRef}
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