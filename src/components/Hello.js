import { render } from '@testing-library/react'
import React from 'react'

const Hello=()=>{
    //jsx way of writing
    return (
        <div className='hello' id='hello'>
            <h1>Hello Welcome react</h1>
        </div>
    )
    // non-jsx way of writing
    // return React.createElement(
    //     'div',
    //     { id:'hello', className:'dummyhello' },
    //     React.create('h1',null,'Hello welcome react')
    // )
    //for this way make class type in App and also write render method there before return statement
}
export default Hello