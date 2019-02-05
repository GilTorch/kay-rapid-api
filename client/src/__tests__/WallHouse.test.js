import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo';
import { ALL_HOUSES_QUERY } from '../queries/queries';
import WallHouse from '../components/WallHouse';

const data=[
  {
    id:"asdfsadf",
    host:{
      firstName:"TiJean",
      lastName:"Peterson",
      phone1:"48550669"
    }, 
    pricing:{
      basePrice:5000,
      highestPrice:12000,
      currency:"US"
    },
    numBedrooms:4,
    numBaths:5,
    numLivingrooms:2,
    numDiningrooms:1,
    lease:12,
    leaseType:"YEARLY",
    location:{
      address:"Fermathe #52,rue Puzot #2"
    }
  },
  {
    id:"basdfasdfsadf",
    host:{
      firstName:"Jijack",
      lastName:"Petard",
      phone1:"48550669"
    }, 
    pricing:{
      basePrice:5000,
      highestPrice:12000,
      currency:"US"
    },
    numBedrooms:4,
    numBaths:5,
    numLivingrooms:2,
    numDiningrooms:1,
    lease:12,
    leaseType:"YEARLY",
    location:{
      address:"La Plaine #52,rue Puzot #2"
    }
  }
]

const mocks={
  request:{
    query: ALL_HOUSES_QUERY
  }, 
  result:{
    data
  }
}

  describe("<WallHouse/>",()=>{
      it("renders without error",()=>{
        const wrapper=shallow(
          <MockedProvider mocks={mocks} addTypeName={false}>
            <MemoryRouter>
              <WallHouse/>
            </MemoryRouter>
          </MockedProvider>
        )

        expect(wrapper).toBeDefined();
      })
  })