import React, { Component, Fragment } from 'react'

export default class List extends Component {
    render() {
        const { list, type, toggleItem, deleteItem } = this.props
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return (
                            <li key={item + index} onClick={() => toggleItem(index, type)}>{item}<i onClick={(e) => deleteItem(e, index, type)} title="删除" style={{marginLeft: 50, cursor: 'pointer'}}>X</i></li>
                        )
                    })
                }
            </Fragment>
        )
    }
}
