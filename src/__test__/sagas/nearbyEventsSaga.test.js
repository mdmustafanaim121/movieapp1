import getEventsSaga from "../../sagas/nearbyEventsSaga";

describe('Testing Near by events sagas',()=>{

    it('Should return get Events saga action',()=>{
        expect(getEventsSaga().next().value.payload.args[0]).toBe('GET_EVENTS')
    })
})