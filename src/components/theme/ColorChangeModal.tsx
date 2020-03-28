import './ColorSelection.less'
import * as React from 'react'
import { Button, Modal } from 'antd'
import { observer } from 'mobx-react'
import { headerStore, themeStore } from '../../store'
import { ColorSelection } from './ColorSelection'

@observer
export class ColorChangeModal extends React.Component<any, any> {

    render(): any {
        return (
            <Modal
                className={'color-modal'}
                visible={headerStore.colorPanelOpen}
                title={'select your primary key.'}
                zIndex={10}
                onCancel={() => {
                    headerStore.setColorPanelOpen(false)
                }}
                footer={[
                    <Button key={'1'} onClick={() => {
                        headerStore.setColorPanelOpen(false)
                    }}>
                        Close
                    </Button>
                ]}
            >
                {themeStore.loading ? 'changing color' : ''}
                    <ColorSelection title={'primary color'} handleColorChange={(color: any) => {
                        themeStore.setPrimaryColor(color)
                    }}/>
            </Modal>
        )
    }
}