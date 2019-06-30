import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import NavigationButton from '../components/NavigationButton';

describe('<NavigationButton/>',()=>{
    it('renders and matches snapshot',()=>{
        const wrapper = mount(
                <NavigationButton name="Favori" iconName="heart" highlighted={false}/>
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('has the proper color when highlighted props set to false', ()=>{
        const wrapper = mount(
            <NavigationButton name="Favori" iconName="heart" highlighted={false}/>
        );
        expect(wrapper).toHaveStyleRule('color', '#606060ff');
    })

    it('has the proper color when highlighted props set to true', ()=>{
        const wrapper = mount(
            <NavigationButton name="Favori" iconName="heart" highlighted={true}/>
        );
        expect(wrapper).toHaveStyleRule('color', '#ff9900ff');
    })
})