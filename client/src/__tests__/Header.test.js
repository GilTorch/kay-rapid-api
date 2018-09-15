import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('<Header/>',()=>{
    //Header should have a title
    it('should have a title property',()=>{
        const wrapper=shallow(<Header title="Profile"/>)
        expect(wrapper.props().title).toEqual("Profile");
    })
})