//all integration tests are going in here
import moxios from 'moxios';
import {testStore} from '../../utils'
import {fetchPosts} from '../actions'

describe("fetchPosts action", () => {

    beforeEach(()=> {
        //install moxios, aka intercepts axios and stops if from making a request
        moxios.install();        
    })

    afterEach(()=> {
        //restores axios into its former state
        moxios.uninstall();
    })

    test("Store is updated correctly", () => {

        const expectedState = [
            {
                title: "Example title 1",
                body: "Some Text"
            },
            {
                title: "Example title 2",
                body: "Some Text"
            },
            {
                title: "Example title 3",
                body: "Some Text"
            }
        ]

        const store = testStore();

        moxios.wait(()=> {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts())
            .then(()=> {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState)
            })
    })

})