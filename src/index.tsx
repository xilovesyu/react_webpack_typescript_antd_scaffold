import './index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './components/header/Header'
import { ConfigProvider, Layout } from 'antd'
import { Footer } from './components/footer/Footer'
import { Content } from './components/content/Content'
import { observer, Provider } from 'mobx-react'
import { languageStore } from './store/LanguageStore'
/**
 * For accept hot update without reload page.
 * */
if(module && module.hot) {
    module.hot.accept()
}

@observer
class App extends React.Component<any, any> {
    render(): any {
        return (
            <Provider languageStore={languageStore}>
                <ConfigProvider locale={languageStore.language}>
                    <Layout>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </Layout>
                </ConfigProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('content'))