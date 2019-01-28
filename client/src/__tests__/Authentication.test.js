import React from 'react';
import Authentication from '../components/Authentication';
import { shallow,mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter,Link } from 'react-router-dom';

describe("<Authentication/>",()=>{

    it ('should have a message that prompts users to connect',()=>{
        const wrapper=shallow(<Authentication/>)
        expect(wrapper.find('.signin-card__message')).toHaveLength(1)
    })

    it ('should have a connexion button',()=>{
        const wrapper=shallow(<Authentication/>)
        expect(wrapper.find('.success-button')).toHaveLength(1)
    })

    it ('should match the snapshot',()=>{
        const wrapper=renderer
        .create(
        <MemoryRouter initialEntries={['/profile']}>
            <Authentication/>
        </MemoryRouter>
        )
        .toJSON()
        expect(wrapper).toMatchSnapshot();
    })

    it ('should go to signin screen when clicked',()=>{
        const wrapper=mount(
                <Authentication/>
        )

        expect(wrapper.find(<Link to="/authentication/sign-in-with-social-media"/>)).toHaveLength(1)
        
    })
})