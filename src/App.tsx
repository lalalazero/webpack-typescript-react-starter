import React from 'react'
import './style.css'
import './style-less.less'
import './style-sass.sass'
import './style-scss.scss'

const App = () => {
    return (
        <div className='box-green'>
            <div className='box-purple'>
                <p className='app'>Hello React in <span className='bold'>TypeScript</span> ~~</p>
            </div>
        </div>
    )
}

export default App