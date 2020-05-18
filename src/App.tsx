import React from 'react'
import { Button } from 'antd'
import Hello from './components/Hello'
import HelloClass from './components/HelloClass'
import HelloHOC from './components/HelloHOC'
import './style.css'
import './style-less.less'
import './style-sass.sass'
import './style-scss.scss'

const App = () => {

    return (
        <div className='box-green'>
            <div className='box-purple'>
                <p className='app'>Hello React in <span className='bold'>TypeScript</span> ~~</p>
                <Button type="primary">Ant Design</Button>
            </div>
            <div style={{ padding: 10 }}>
                <p style={{ color: 'red'}}>Hello</p>
                <Hello name="anne"></Hello>
                <p style={{ color: 'red'}}>HelloClass</p>
                <HelloClass name="anne-class"></HelloClass>
                <p style={{ color: 'red'}}>HelloHOC</p>
                <HelloHOC loading={false}></HelloHOC>
            </div>
        </div>
    )
}

export default App