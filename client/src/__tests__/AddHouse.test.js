import { shallow } from 'enzyme';
import AddHouse from '../components/AddHouse'

describe(<AddHouse/>,()=>{
    const Wrapper=shallow(<AddHouse/>);
    expect(Wrapper).toContain(<form className="add-form"></form>)
})