import './index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './components/header/Header'
import { Layout } from 'antd'
import { Footer } from './components/footer/Footer'

/**
 * For accept hot update without reload page.
 * */
if(module && module.hot) {
    module.hot.accept()
}

const App = () => {
    return (
        <div>
            <Layout>
                <Header/>
                <Footer/>
            </Layout>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('content'))