import React, { Component, Fragment } from 'react'

export default class List extends Component {
    render() {
        const { list, type, toggleItem } = this.props
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return (
                            <li key={item + index} onClick={() => toggleItem(index, type)}>{item}</li>
                        )
                    })
                }
            </Fragment>
        )
    }
}
