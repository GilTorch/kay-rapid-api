import React from 'react';
import Icon from '../components/Icon';
import { shallow } from 'enzyme';


// Structural testing
describe('<Navigation />', () => {
    
   it('should render correctly', () => {
    const wrapper = shallow(<Icon />);
     expect(wrapper).toBeDefined();
   });


   it('should have a FontAwesome component inside of it',()=>{
       const wrapper=shallow(
           <div className="navigation-icon">
             <FontAwesome name="rocket" size="2x"/>
           </div>
       );
    
       expect(wrapper.contains(<FontAwesome name="rocket" size="2x"/>)).toBeTruthy();
   })

  //  it("buttons should have correct label",()=>{
  //    expect(wrapper.text()).toContain("Akey")
  //    expect(wrapper)
  //  });

//    it('buttons should be clickable',()=>{
//        expect(wrapper.find('button')).simulate('click');
//        expect(wrapper.state().count).toEqual(1);
//    })

 } )
