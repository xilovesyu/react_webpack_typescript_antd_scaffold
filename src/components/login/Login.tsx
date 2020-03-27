import * as React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16}
}
const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
}

export class Login extends React.Component<any, any> {
    onFinish = (values: any) => {
        console.log('Success:', values)
        this.props.history.push('/main')
    }

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    render(): any {
        return (
            <Form
                {...layout}
                name='basic'
                initialValues={{remember: true}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}