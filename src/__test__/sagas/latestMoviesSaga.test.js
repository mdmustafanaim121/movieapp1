import getDataSaga from "../../sagas";

describe('Testing Latest Movie sagas',()=>{

    it('Should return get latest movies action',()=>{
        expect(getDataSaga().next().value.payload.args[0]).toBe('GET_LATEST_MOVIES')
    })
})