import * as React from 'react'
import { Button, Layout, Menu } from 'antd'
import { inject, observer } from 'mobx-react'

const { Header: AntdHeader } = Layout

@inject('languageStore')
@observer
export class Header extends React.Component<any, any> {
    render(): any {
        return (
            <AntdHeader
                style={{background: '#fff'}}
            >
                <Button onClick={() => {
                    this.props.languageStore.toCN()
                }}>中文</Button>
                <Button onClick={() => {
                    this.props.languageStore.toFr()
                }}>French</Button>
                <Button onClick={() => {
                    this.props.languageStore.toEN()
                }}>English</Button>

                <Menu
                    theme='light'
                    mode='horizontal'
                    defaultSelectedKeys={['2']}
                    style={{ float: 'right' }}
                >
                    <Menu.SubMenu
                        title={'Settings'}
                    >
                        <Menu.Item key='1'>option1</Menu.Item>
                        <Menu.Item key='2'>option2</Menu.Item>
                        <Menu.Item key='3'>option3</Menu.Item>
                        <Menu.Item key='4'>option4</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </AntdHeader>
        )
    }
}