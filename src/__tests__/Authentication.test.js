import { shallow } from 'enzyme';

import Authentication from ''

describe("<Authentication />"){

    it("should have a sign in button",()=>{
        const wrapper=shallow(<Authentication/>);

        expect(wrapper.find("button")).toHaveLength(1);

        // on click it should 
    })


}