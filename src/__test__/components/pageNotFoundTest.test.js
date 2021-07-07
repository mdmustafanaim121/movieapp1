import PageNotFound from '../../component/pageNotFound' 
import renderer from "react-test-renderer";
import React from "react";


describe('Testing Page Not Found Component',()=>{
    it('Should return page not found snapshot',()=>{
        const result = renderer.create(<PageNotFound />).toJSON()
        expect(result).toMatchSnapshot()
    })
})