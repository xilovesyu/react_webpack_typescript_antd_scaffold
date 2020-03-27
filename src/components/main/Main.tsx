import * as React from 'react'
import { Layout } from 'antd'
import { Header } from '../header/Header'
import { Content } from '../content/Content'
import { Footer } from '../footer/Footer'
import { observer } from 'mobx-react'

@observer
export class Main extends React.Component<any, any> {
    render(): any {
        return (
            <Layout>
                <Header/>
                <Content/>
                <Footer/>
            </Layout>
        )
    }
}