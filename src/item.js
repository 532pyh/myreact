import React, { Component} from 'react';

class Item extends Component {

    render() {
        return (
            <li>
                <span>{this.props.content}</span>
                <button onClick={this.handleDel}>删除</button>
            </li>
        )
    }

    handleDel = ()=>{
        console.log(this.props.index)
        this.props.delItem(this.props.index)
    }
}

export default Item