import React from 'react';
import { shallow } from 'enzyme';

import NavigationButton from '../components/NavigationButton';
import Icon from '../components/Icon';



// Structural testing
describe('<Navigation />', () => {
    const wrapper = shallow(<NavigationButton />);

    // should render an Icon
    expect(wrapper.find(<Icon/>)).toBeDefined();


 } )
