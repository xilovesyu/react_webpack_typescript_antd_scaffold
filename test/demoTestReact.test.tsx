import * as React from 'react'
import { shallow, configure } from 'enzyme'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('Jest-React-TypeScript', () => {
    const renderer = shallow(<div>hello world</div>)
    expect(renderer.text()).toEqual('hello world')
})
