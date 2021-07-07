import * as actions from '../../actions/upcomingMovieAction'

describe('testing Upcoming Movie actions',()=>{
    test('testing getUpcomingMoviesNow', ()=>{
        expect(actions.getUpcomingMoviesNow().type).toBe('GET_UPCOMING_MOVIES')
    })

    test('testing getUpcomingMovies', ()=>{
        const result = actions.getUpcomingMovies()
        expect(result.return().done).toBe(true)
    })
})