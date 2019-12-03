import React from 'react';
import {findByTestAttr,checkProps} from '../../../utils';
import {shallow} from 'enzyme'
import SharedButton from './index';

describe("SharedButton Component", () => {

    describe("Checking Proptypes", () => {
        it("Should NOT throw a warning", () => {
            const expectedProps = {
                buttonText: 'Example Button text',
                emitEvent: () => {

                }
            }

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe("Renders", () => {
        let wrapper;
        let mockFunc;
        beforeEach(()=> {
            mockFunc = jest.fn();
            const props = {
                buttonText: "Example Button Text",
                emitEvent: mockFunc
            };
            wrapper = shallow(<SharedButton {...props} />)
        })

        it("Should Render a button", ()=> {
            const button = findByTestAttr(wrapper, "buttonComponent");
            expect (button.length).toBe(1);
        })

        it('Should emit callback on click event', ()=> {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })
    })

})