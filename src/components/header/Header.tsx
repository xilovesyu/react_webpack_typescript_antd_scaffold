import * as React from 'react'
import { Button, Layout, Menu } from 'antd'
import { inject, observer } from 'mobx-react'
import { ColorChangeModal } from '../theme/ColorChangeModal'
import { HEADER_STORE, headerStore, themeStore } from '../../store'

const { Header: AntdHeader } = Layout

@inject('languageStore', HEADER_STORE)
@observer
export class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }
    render(): any {
        return (
            <AntdHeader>
                <Button onClick={() => {
                    this.props.languageStore.toCN()
                }}>中文</Button>
                <Button onClick={() => {
                    this.props.languageStore.toFr()
                }}>French</Button>
                <Button onClick={() => {
                    this.props.languageStore.toEN()
                }}>English</Button>
                <Button onClick={() => {
                    themeStore.setThemeMode('dark')
                }}>
                    Dark
                </Button>
                <Button onClick={() => {
                    themeStore.setThemeMode('light')
                }}>
                    Light
                </Button>
                <Menu
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
                <Menu
                    mode='horizontal'
                    style={{ float: 'right' }}
                    onClick={(param: any) => {
                        if(param.key === '1') {
                            headerStore.setColorPanelOpen(true)
                        }
                    }}
                >
                    <Menu.Item key='1'>change color</Menu.Item>
                </Menu>
                <ColorChangeModal visible={headerStore.colorPanelOpen}/>
            </AntdHeader>
        )
    }
}