import React, { Component, Fragment } from 'react'
import Item from './item.js'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '服务一',
            list: ['服务一', '服务二'],
        }
    }
    render() {
        return (
            <Fragment>
                <input type="text" value={this.state.value} onChange={this.handleInput.bind(this)}></input>
                <button onClick={this.addList}>添加服务</button>
                <ul className='pyh'>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Item
                                    key={item + index}
                                    content={item}
                                    index={index}
                                    delItem={this.delItem}
                                ></Item>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInput(e) {
        this.setState({
            value: e.target.value
        })
    }
    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.value]
        })
    }
    delItem =(index)=> {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default App;