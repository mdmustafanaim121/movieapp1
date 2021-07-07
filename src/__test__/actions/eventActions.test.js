import * as actions from '../../actions/eventsAction'

describe('testing Nearby events actions',()=>{
    test('testing getEventsNow', ()=>{
        expect(actions.getEventsNow().type).toBe('GET_EVENTS')
    })

    test('testing getNearbyEvents', ()=>{
        const result = actions.getNearbyEvents()
        expect(result.return().done).toBe(true)
    })
})