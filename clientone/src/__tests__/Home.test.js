/**
 * Home should have
 *  logo of the app
 *  domain name of the website
 *  a search input
 *  Multiple cards with name of the communes of port-au-prince
 *  a floating button to post a house
 *  a navigation menu with three icon buttons
 *      -home 
 *      -favorites
 *      -Profile 
 *  
 */

 import React from 'react';
 import Home from '../page/Home';

import { shallow,mount } from 'enzyme';

import Navigation from '../components/Navigation';

import renderer from 'react-test-renderer';

// Structural testing
describe('<Home />', () => {
    it('should have the app logo', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper.find('.app-logo')).toHaveLength(1);
    });

    it('should have the domain name as a title under the logo', () => {
        const wrapper = mount(<Home title="www.lakayou.com" />);
        expect(wrapper.props().title).toEqual('www.lakayou.com');
      });
      
      it('should have a search input field', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('input[type="search"]')).toHaveLength(1);
      });

      it('should have a search button', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('input[type="button"]')).toHaveLength(1);

      });

      it('should have a navigation menu', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper).toBeDefined();
      });

      // // regression testing
      // const wrapper=renderer.create(<Home/>);
      // const tree=wrapper.toJSON();
      // expect(tree).toMatchSnapshot();
 })


