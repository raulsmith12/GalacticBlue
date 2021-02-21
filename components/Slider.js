import React from 'react';
import sliderItems from './sliderItems';
import { UncontrolledCarousel } from 'reactstrap';

const Slider = () => <UncontrolledCarousel controls={false} indicators={false} items={sliderItems} />;

export default Slider;