import * as React from 'react'
import { Button, Table } from 'antd'

export class Content extends React.Component<any, any> {
    render(): any {
        return (
            <div>
                something
                <Button type='primary'>Click me</Button>
                <Table
                    dataSource={[]}
                />
            </div>
        )
    }
}