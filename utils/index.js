import checkPropTypes from 'check-prop-types';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../src/reducers/index';
import {middleware} from '../src/createStore'

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

export const checkProps = (component, expectedProps)  => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, "props", component.name);
    return propsErr;
}

//func used to create our TEST store for testing
export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState)
}