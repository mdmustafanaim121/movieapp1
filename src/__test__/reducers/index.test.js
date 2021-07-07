import reducer from '../../reducers/index'
import * as actionType from '../../constants/action-types'

describe('testing reducers',()=>{
    const initialState = {
        movies: [],
      };
    test('testing reducer without action object',()=>{
        expect(reducer(undefined,{})).toMatchObject(initialState)
    })

    test('testing reducer action GET_LATEST_MOVIES should return true',()=>{
        const action={
            type:actionType.GET_LATEST_MOVIES
        }
        expect(reducer({},action).isLoading).toBe(true)
    })

    test('testing reducer action GET_LATEST_MOVIES_SUCCESS should return true',()=>{
        const action={
            type:actionType.GET_LATEST_MOVIES_SUCCESS
        }
        const initialState = {
            movies: {name:'Black Panther' },
          };
        expect(reducer(initialState.movies,action).name).toBe('Black Panther')
    })

    test('testing reducer action GET_LATEST_MOVIES_FAILURE should return true',()=>{
        const action={
            type:actionType.GET_LATEST_MOVIES_FAILURE,
            errMsg:'404 url not found'
        }
        const initialState = {
            movies: {name:'Black Panther' }          };
        expect(reducer(initialState.movies,action).error).toBe(action.errMsg)
    })


    test('testing reducer action GET_EVENTS should return true',()=>{
        const action={
            type:actionType.GET_EVENTS
        }
        expect(reducer({},action).isLoading).toBe(true)
    })

    test('testing reducer action GET_EVENTS_SUCCESS should return true',()=>{
        const action={
            type:actionType.GET_EVENTS_SUCCESS
        }
        const initialState = {
            movies: {name:'Black Panther' },
          };
        expect(reducer(initialState.movies,action).name).toBe('Black Panther')
    })

    test('testing reducer action GET_EVENTS_FAILURE should return true',()=>{
        const action={
            type:actionType.GET_EVENTS_FAILURE,
            errMsg:'404 url not found'
        }
        const initialState = {
            movies: {name:'Black Panther' }          };
        expect(reducer(initialState.movies,action).error).toBe(action.errMsg)
    })


    test('testing reducer action GET_UPCOMING_MOVIES should return true',()=>{
        const action={
            type:actionType.GET_UPCOMING_MOVIES
        }
        expect(reducer({},action).isLoading).toBe(true)
    })

    test('testing reducer action GET_UPCOMING_MOVIES_SUCCESS should return true',()=>{
        const action={
            type:actionType.GET_UPCOMING_MOVIES_SUCCESS
        }
        const initialState = {
            movies: {name:'Black Panther' },
          };
        expect(reducer(initialState.movies,action).name).toBe('Black Panther')
    })

    test('testing reducer action GET_UPCOMING_MOVIES_FAILURE should return true',()=>{
        const action={
            type:actionType.GET_UPCOMING_MOVIES_FAILURE,
            errMsg:'404 url not found'
        }
        const initialState = {
            movies: {name:'Black Panther' }          };
        expect(reducer(initialState.movies,action).error).toBe(action.errMsg)
    })
})