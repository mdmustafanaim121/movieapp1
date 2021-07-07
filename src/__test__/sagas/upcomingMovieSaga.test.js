import getUpcomingMovieSaga from "../../sagas/upcomingMovieSaga";

describe('Testing Upcoming movies sagas',()=>{

    it('Should return get upcoming movie saga action',()=>{
        expect(getUpcomingMovieSaga().next().value.payload.args[0]).toBe('GET_UPCOMING_MOVIES')
    })
})