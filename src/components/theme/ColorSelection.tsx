import * as React from 'react'
import { Button, Modal } from 'antd'
import { headerStore, themeStore } from '../../store'
import { ChromePicker } from 'react-color'

export class ColorSelection extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            pickerVisible: false,
            color: themeStore.primaryColor
        }
    }

    handleColorChange = (color: any) => {
        this.setState({color: color.hex})
    }

    handleColorChangeCompleted = (color: any) => {
        this.setState({color: color.hex})
    }

    render(): any {
        return (
            <div>
                <Button
                    onClick={() => {
                        this.setState({
                            pickerVisible: true
                        })
                    }}
                    style={{background: this.state.color}}
                />
                <span>{this.props.title}</span>
                {
                    this.state.pickerVisible &&
                    <>
                        <div
                            role={'none'}
                            tabIndex={-1}
                            onClick={() => {
                                this.setState({pickerVisible: false})
                                this.props.handleColorChange(this.state.color)
                            }}
                            style={{
                                position: 'fixed', top: '0px',
                                right: '0px',
                                bottom: '0px',
                                left: '0px'
                            }}
                        >
                            only close
                        </div>
                        <ChromePicker
                            color={this.state.color}
                            onChange={this.handleColorChange}
                            onChangeComplete={this.handleColorChangeCompleted}
                        />
                    </>
                }
            </div>
        )
    }
}