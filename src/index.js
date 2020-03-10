import './index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import youtube from './images/youtube.svg'
import { helloWorld as tsHello } from './someTs'
import {TsComponent} from './TsComponent'

if(module && module.hot) {
    module.hot.accept()
}

// class
class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

const cat = new Animal('Lucy')
console.log('cat:', cat)

// array includes
const array = [1,2,4,6,7]
array.includes(4)

// promise
const promise = new Promise(((resolve) => {
    resolve('test')
}))
promise.then((value) => {
    console.log('aaaa'+value)
})
// arrow function
const helloWorld = (name) => {
    return `Hello world, ${name}`
}
helloWorld()

//spread rest
const baseArray = [1, 3, 5]
const b = [2, 4, 6, ...baseArray]
console.log(b)

const CustomInput = () => {
    return (
        <div>
            <input className='grey-input' placeholder={'123'}/>
        </div>
    )
}

const CustomImage = () => {
    return (
        <div>
            <img src={youtube} alt={'youtube'} />
        </div>
    )
}

class DynamicCustomImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            text: ''
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({visible:!this.state.visible})}>
                    Click me
                </button>
                {
                    this.state.visible && (
                        <>
                            <img src={require('./images/youtube.svg')} alt={'youtube'} />
                            <span>{this.state.text}</span>
                            <button onClick={() => {
                                import('./dynamicJs').then((fn => {
                                    const helloWorld = fn.default
                                    this.setState({text: helloWorld()})
                                }))
                            }}>
                                Show msg.
                            </button>
                        </>
                    )
                }
            </div>
        )
    }
}
const CustomComponent = () => {
    return (
        <ul>
            <li>
                <label>aaa</label>
                <span>mmmm</span>
            </li>
        </ul>
    )
}
//eslint
console.log('a === b : ', 1 === 2)

ReactDOM.render(
    <>
        aaaa
        <CustomInput />
        <CustomImage />
        eeee
        <CustomComponent />
        <DynamicCustomImage />
        {
            tsHello()
        }
        <TsComponent name={'lucy'}/>
    </>,
    document.getElementById('content')
)