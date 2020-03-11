import * as React from 'react'
import { Layout } from 'antd'

const { Header: AntdHeader } = Layout

export class Header extends React.Component<any, any> {
    render(): any {
        return (
            <AntdHeader>
                Header
            </AntdHeader>
        )
    }
}