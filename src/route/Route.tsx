import * as React from 'react'
import { HashRouter, Route as R } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { Main } from '../components/main/Main'

export class Route extends React.Component<any, any> {
    render(): any {
        return (
            <div>
                <HashRouter
                    getUserConfirmation={(message, callback) => {
                        // this is the default behavior
                        const allowTransition = window.confirm(message)
                        callback(allowTransition)
                    }}
                >
                    <R exact path='/' component={Login} />
                    <R exact path='/main' component={Main} />
                </HashRouter>
            </div>
        )
    }
}
