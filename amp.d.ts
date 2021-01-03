declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}

// The elements you list here will be accepted, and only with the attributes that you include here
declare namespace JSX {
	interface AmpImg {
		alt?: string;
		src?: string;
		width?: string;
		height?: string;
		layout?: "fill";
	}
	
	interface AmpFont {
		layout?: "nodisplay";
		"font-family": string;
		timeout: string;
	}

	interface IntrinsicElements {
		'amp-img': AmpImg;
		'amp-font': AmpFont;
	}
}