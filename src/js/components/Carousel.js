class Carousel {
	constructor(element) {
		const thisCarousel = this;
		thisCarousel.render(element);
		thisCarousel.initPlugin();
	}

	render(element) {
    const thisCarousel = this;
    thisCarousel.dom = {};
		thisCarousel.dom.wrapper = element;
	}

	initPlugin() {
    const thisCarousel = this;
    
		// eslint-disable-next-line no-undef
		thisCarousel.flickity = new Flickity(thisCarousel.dom.wrapper, {
			cellAlign: "left", 
			contain: true, 
			autoPlay: 5000, 
			wrapAround: true,
			pauseAutoPlayOnHover: true,
			selectedAttraction: 0.005,
			friction: 0.2,
		});
	}
}

export default Carousel;
