import * as React from 'react'
import { useState } from 'react'

const FunctionComponent = (props: {name: string}) => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div>
            <span>{`hello world ${props.name}, you searched ${searchValue}`}</span>
            <input value={searchValue} onChange={(e: any) => {setSearchValue(e.target.value)}}/>
        </div>
    )
}

interface TsComponentProps {
    name: string;
}
interface TsComponentState {
    searchValue: string;
}

export class TsComponent extends React.Component <TsComponentProps, TsComponentState> {
    constructor(props: any) {
        super(props)
        this.state = {
            searchValue: 'sss'
        }
    }

    handleInputChange = (e: any) => {
        e.preventDefault()
        this.setState({
            searchValue: e.target.value
        })
    }
    render(): any {
        const name = this.props.name
        const searchValue = this.state.searchValue
        return (
            <div>
                <FunctionComponent name={'beecham'}/>
                <span>{`hello world ${name}, you searched ${searchValue}`}</span>
                <input value={searchValue} onChange={this.handleInputChange} />
            </div>
        )
    }
}
