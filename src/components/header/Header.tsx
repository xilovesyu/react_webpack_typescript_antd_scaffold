import * as React from 'react'
import { Button, Layout } from 'antd'
import { inject, observer } from 'mobx-react'

const { Header: AntdHeader } = Layout

@inject('languageStore')
@observer
export class Header extends React.Component<any, any> {
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
            </AntdHeader>
        )
    }
}