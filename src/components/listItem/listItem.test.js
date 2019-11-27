import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../../utils';
import ListItem from './index';

describe("ListItem Component", () => {

    describe("Checking PropTypes", () => {

        it("Should not throw a warning", ()=> {
            const expectedProps = {
                title: "Example Title",
                desc: "Some text"
            }
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe("Component Renders", () => {

        let wrapper;
        beforeEach(()=> {
            const props = {
                title: "Example Title",
                desc: "Some text"
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it("Should render without error", ()=> {
            const component = findByTestAttr(wrapper, 'ListItemComponent');
            expect(component.length).toBe(1);
        })
        it("Should render a title", ()=> {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })
        it("Should render a desc", () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1)
        })
    })

    describe("Component should NOT render", () => {
        let wrapper;
        beforeEach(()=> {
            const props = {
                desc: "Some text"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it("Should not render if no title prop", ()=> {
            const component = findByTestAttr(wrapper, "ListItemComponent");
            expect(component.length).toBe(0)
        })
    })
})