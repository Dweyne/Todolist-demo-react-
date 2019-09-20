import React, { Component, Fragment } from 'react'
import List from './list'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: '',
      undoList: [],
      doneList: []
    }
  }

  // 输入值监听
  inputChange = (e) => {
    const val = e.target.value
    this.setState({
      inputVal: val
    })
  }

  // 添加到未完成
  addList = () => {
    const list = [...this.state.undoList]
    if (this.state.inputVal) {
      list.push(this.state.inputVal)
    }
    this.setState({
      undoList: list,
      inputVal: ''
    })
  }

  // 点击列表
  toggleItem = (index, type) => {
    let undoList = [...this.state.undoList]
    let doneList = [...this.state.doneList]
    if (type === 'done') {
      let done = undoList.splice(index, 1)
      doneList.push(done)
    } else if (type === 'undo') {
      let undo = doneList.splice(index, 1)
      undoList.push(undo)
    }
    this.setState({
      doneList,
      undoList
    })
  }

  // 回车添加
  onEnter = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      this.addList()
    }
  }

  // 删除
  delete = (e, index, type) => {
    e.stopPropagation()
    let undoList = [...this.state.undoList]
    let doneList = [...this.state.doneList]
    if (type === 'done') {
      undoList.splice(index, 1)
    } else if (type === 'undo') {
      doneList.splice(index, 1)
    }
    this.setState({
      doneList,
      undoList
    })
  }

  render() {
    const { inputVal, undoList, doneList } = this.state
    return (
      <Fragment>
        <div>
          <input value={inputVal} type="text" onChange={this.inputChange} onKeyUp={this.onEnter} />
          <button onClick={this.addList}>add</button>
        </div>
        <h3>undo</h3>
        <ul>
          {
            <List list={undoList} type={'done'} toggleItem={this.toggleItem} deleteItem={this.delete} />
          }
        </ul>
        <h3>done</h3>
        <ul>
        {
            <List list={doneList} type={'undo'} toggleItem={this.toggleItem} deleteItem={this.delete} />
          }
        </ul>
      </Fragment>
    )
  }
}
