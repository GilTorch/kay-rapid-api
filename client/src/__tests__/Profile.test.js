import React from 'react';
import Profile from '../page/Profile';
import Authentication from '../components/Authentication';
import UserInfo from '../components/UserInfo';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils';
import { READ_AUTH_INFO } from '../queries/queries';
import { shallow,mount,render } from 'enzyme';
import  wait  from 'waait';

const userAuthInfo={
    email: "alimao@hotmail.com",
    firstName: "Ulysse",
    lastName: "Alimao",
    profilePicture: "https://res.cloudinary.com/dejyp5iex/image/upload/v1545577847/lakayou/d8cdjno6gagzy78ctww8.jpg",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJj"
}

const userAuthInfo1={
    email:null,
    firstName:null,
    lastName:null,
    profilePicture:null,
    token:null
}


const mocks = [
    {
      request: {
        query: READ_AUTH_INFO,
      },
      result: {
        data: {
            userAuthInfo:{...userAuthInfo}
        },
      },
    },
  ];

  const mocks1= [
    {
      request: {
        query: READ_AUTH_INFO,
      },
      result: {
        data: {
            userAuthInfo:{...userAuthInfo1}
        },
      },
    },
  ];
  
  it('renders without error', () => {
    const wrapper=shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Profile />
      </MockedProvider>,
    );

    expect(wrapper).toBeDefined()
  });

  it('renders <Authentication/> when cache has no data about the user',async ()=>{
    const wrapper=mount(
        <MockedProvider mocks={mocks1} addTypename={false}>
            <MemoryRouter>
                <Profile />
            </MemoryRouter>
        </MockedProvider>,
      );

    //   const userInfoWrapper=shallow(<Authentication/>)

        await wait(0)

      expect(wrapper.update().find(Authentication)).toHaveLength(1)
  })

  it('renders <UserInfo/> when cache has data about the user',async ()=>{
    const wrapper=mount(
        <MockedProvider mocks={mocks} addTypename={false}>
            <MemoryRouter>
                <Profile />
            </MemoryRouter>
        </MockedProvider>,
      );

    //   const userInfoWrapper=shallow(<Authentication/>)

        await wait(0)

      expect(wrapper.update().find(UserInfo)).toHaveLength(1)
  })