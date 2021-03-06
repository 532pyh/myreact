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
    UNSAFE_componentWillMount(){
        console.log('将要挂载')
    }
    componentDidMount(){
        console.log('挂载好了')
    }
    render() {
        console.log('挂载中')
        return (
            <Fragment>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInput}
                    ref={(e) => this.input = e}
                ></input>
                <button onClick={this.addList}>添加服务</button>
                <ul className='pyh' ref={(e) => this.ul = e}>
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
    handleInput = () => {
        this.setState({
            value: this.input.value
        })
    }
    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.value]
        },() =>{
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
    delItem = (index) => {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default App;