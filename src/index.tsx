import './index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import { observer, Provider } from 'mobx-react'
import { languageStore } from './store/LanguageStore'
import { IntlProvider } from 'react-intl'
import moment from 'moment'
import { Route } from './route/Route'
import * as allStores from './store'

//import intl from 'intl' //Polyfill for ie and safari
require('intl')
/**
 * For accept hot update without reload page.
 * */
if (module && module.hot) {
    module.hot.accept()
}

/**
 * Shorter formats for money. Use <FormattedNumber value={1000} format='USD'/> instead of
 * <FormattedNumber value={1000} style="currency" currency="USD"/>
 * */
const formats = {
    number: {
        USD: {
            style: 'currency',
            currency: 'USD'
        },
        CNY: {
            style: 'currency',
            currency: 'CNY'
        },
        EUR: {
            style: 'currency',
            currency: 'EUR'
        }
    }
}

@observer
class App extends React.Component<any, any> {
    render(): any {
        if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
            //console.log('you are in development mode.')
        }
        moment.locale(languageStore.momentLanguage)
        return (
            <Provider {...allStores}>
                <IntlProvider
                    locale={languageStore.intlLanguage}
                    key={languageStore.intlLanguage}
                    messages={languageStore.intlMsg}
                    formats={formats}
                >
                    <ConfigProvider locale={languageStore.antdLanguage}>
                        <Route/>
                    </ConfigProvider>
                </IntlProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('content'))