import './Login.less'
import * as React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

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
            <div className='login-form-outer'>
            <Form
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

                <Form.Item
                    name='remember'
                    valuePropName='checked'
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    className='form-item-login'
                >
                    <Button className='login-button' type='primary' htmlType='submit' block shape={'round'}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </div>
        )
    }
}