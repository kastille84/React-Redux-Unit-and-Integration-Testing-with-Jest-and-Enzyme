import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {findByTestAttr, testStore} from '../utils'

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    //console.log(wrapper.debug())
    return wrapper;
}

describe("App Component", () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: "Example Title 1",
                    body: 'Some text'
                },
                {
                    title: "Example Title 2",
                    body: 'Some text'
                },
                {
                    title: "Example Title 3",
                    body: 'Some text'
                },
            ]
        }
        wrapper = setUp(initialState);
    })

    it("Should render without errors", ()=> {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })

    it('exampleMethod_updateState Method should update the hideBtn state  as expected', ()=> {
        //create an instance of the class
        const classInstance = wrapper.instance();
        //trigger that method
        classInstance.exampleMethod_updateState();
        //see what that state is
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })
    it('exampleMethod_returnsAValue should return a value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(3);
        expect(newValue).toBe(4);
    })
})