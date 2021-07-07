import * as actions from '../../actions/actions'

describe('testing Latest movie actions',()=>{
    test('testing getMoviesNow', ()=>{
        expect(actions.getMoviesNow().type).toBe('GET_LATEST_MOVIES')
    })

    test('testing getLatestMovies', ()=>{
        const result = actions.getLatestMovies()
        expect(result.return().done).toBe(true)
    })
})