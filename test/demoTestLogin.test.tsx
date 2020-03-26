import * as React from 'react'
import { shallow, configure, mount } from 'enzyme'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Adapter from 'enzyme-adapter-react-16'
import { Input, Spin } from 'antd'

configure({ adapter: new Adapter() })

const Login = (props: {loading: boolean}) => {
    return (
        <div>
            <Spin spinning={props.loading}>
                <Input />
            </Spin>
        </div>
    )
}
test('Jest-React-Login', () => {
    const renderer = mount(<Login loading={true}/>)
    renderer.setProps({loading: false})
    console.log(renderer.html())
    const input = renderer.find('input')
    input.simulate('change', {target: {value: 'I am a good boy.'}})
    console.log(input.html())
})