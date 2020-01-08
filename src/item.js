import React, { Component} from 'react';
import Proptypes from 'prop-types'
class Item extends Component {

    render() {
        return (
            <li>
                <span>{this.props.name}给你做{this.props.content}</span>
                <button onClick={this.handleDel}>删除</button>
            </li>
        )
    }

    handleDel = ()=>{
        this.props.delItem(this.props.index)
    }
}
Item.propTypes={
    index:Proptypes.number,
    content:Proptypes.string,
    delItem:Proptypes.func,
    name:Proptypes.string.isRequired
}
Item.defaultProps={
    name:'王小丫'
}
export default Item