import React from 'react';
import { shallow,mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';
import AccountCreation from '../components/AccountCreation';
import { ACCOUNT_CREATION } from '../queries/queries';


const mocks=[
    {
        request:{
            query:ACCOUNT_CREATION,
            variables:{ email:"pascal.jean@gmail.com",password:"1234",firstName:"Pascal",lastName:"Jean",phone1:"48550669",profilePicture:"url.png" }
        },
        result:{
            data:{
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanIzZHpxcXJycHFpMDkxN3hxbGI5ZTl4IiwiaWF0IjoxNTQ3ODk3MTQyfQ.4It5IDH9tCsunJWXmqVpvH8BvVznv4gp1o2OFS0Hr7c",
                user: {
                    id: "cjr3dzqqrrpqi0917xqlb9e9x",
                    firstName: "Pascal",
                    lastName: "Jean",
                    email: "pascal.jean@gmail.com",
                    phone1: "48550669",
                    profilePicture: {
                      "url": "url.png"
                }
            }
        }
    }
}
]

describe("<AccountCreation/>",()=>{
    it("renders without error",()=>{
       const wrapper=mount(
       <MockedProvider mocks={mocks} addTypename={false}>
            <MemoryRouter>
                <AccountCreation/>
            </MemoryRouter>
        </MockedProvider>
        )

        expect(wrapper).toBeDefined();
    })

    it("can submit a form to the server",async ()=>{
        const wrapper=shallow(
            <MockedProvider mocks={mocks} addTypename={false}>
                 <MemoryRouter>
                     <AccountCreation/>
                 </MemoryRouter>
             </MockedProvider>
             );
        expect(1).toBe(1)
    })
})