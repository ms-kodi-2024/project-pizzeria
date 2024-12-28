import { select, templates } from '../settings.js';
import Carousel from './Carousel.js';

class Home {
  constructor(element) {
    const thisHome = this;
		thisHome.render(element);
		thisHome.initWidgets();
	}

  render(element) {
    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    const generatedHTML = templates.homePage();
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
  
  initWidgets() {
    const thisHome = this;
    thisHome.dom.carousel = this.dom.wrapper.querySelector(select.containerOf.carousel);
    thisHome.carousel = new Carousel(thisHome.dom.carousel);
  }
}

export default Home;