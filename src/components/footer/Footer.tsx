import * as React from 'react'
import { Layout } from 'antd'
import youtube from '../../images/youtube.svg'

const { Footer: AntdFooter } = Layout

const Footer = React.memo(() => {
    return (
        <AntdFooter>
            footer
            <img src={youtube} alt={'youtube'} />
        </AntdFooter>
    )
})

Footer.displayName = 'Footer'

export {Footer}