import * as React from 'react'
import { Table } from 'antd'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import { t } from '../../util/Intl'
import moment from 'moment'
import { Layout } from 'antd'

const {Content: AntdContent} = Layout

export class Content extends React.Component<any, any> {
    render(): any {
        return (
            <AntdContent>
                <Table
                    dataSource={[]}
                />
                <p>
                    <FormattedNumber value={1000.12}/>
                </p>
                <p>
                    {t('appleCost', undefined, {price: 1000})}
                </p>
                <p>
                    <FormattedMessage id='appleCost' values={{price: 1000}}/>
                </p>
                <p>
                    <FormattedNumber value={1000} format='USD'/>
                </p>
                <p>
                    <FormattedNumber value={1000} style='currency' currency='USD'/>
                </p>
                <p>
                    <FormattedNumber value={1000} style='currency' currency='GBP'/>
                </p>
                <p>
                    <FormattedNumber value={1000} style='currency' currency='CNY'/>
                </p>
                <p>
                    <FormattedNumber value={1000} style='currency' currency='EUR'/>
                </p>
                <p>
                    <FormattedMessage
                        id='helloWorld'
                        description='say hello to Howard.'
                        defaultMessage='Hello, Howard'
                    />
                </p>
                <p>{t('helloWorld')}</p>
                <p>{t('selfIntroduction', undefined, {name: 'jiaxiang'})}</p>

                <p>
                    {
                        moment().format('LLLL')
                    }
                </p>
            </AntdContent>
        )
    }
}