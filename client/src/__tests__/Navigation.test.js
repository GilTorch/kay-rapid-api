import React from 'react';
import Navigation from '../components/Navigation';
import { shallow } from 'enzyme';
import NavigationButton from '../components/NavigationButton';


// Structural testing
describe('<Navigation />', () => {
    const wrapper = shallow(<Navigation />);
   it('should have three buttons', () => {
     expect(wrapper.find(NavigationButton)).toHaveLength(3);
   });

  //  it("buttons should have correct label",()=>{
  //    expect(wrapper.text()).toContain("Akey")
  //    expect(wrapper)
  //  });

  //  it('buttons should be clickable',()=>{
  //      expect(wrapper.find('button')).simulate('click');
  //      expect(wrapper.state().count).toEqual(1);
  //  })

 } )
