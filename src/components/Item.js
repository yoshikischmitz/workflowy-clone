import React from 'react'
import ReactDOM from 'react-dom'

class Item extends React.Component {
  setCursor(){
    const node = ReactDOM.findDOMNode(this)
    var range = document.createRange();
    var sel = window.getSelection();

    range.setStart(node.childNodes[1].childNodes[0] || node.childNodes[1], this.props.focus);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    node.childNodes[0].focus();
  }

  componentDidMount(){
    if(this.props.focus >= 0){
      this.setCursor()
    }
  }

  componentDidUpdate(){
    if(this.props.focus >= 0){
      this.setCursor()
    }
  }

  render(){
    let classes = ["itemListEditor"]
    if(this.props.root){
      classes.push("root")
    }
    return(
      <div className="item">
        <div onClick={this.props.handleBulletClick} className={!this.props.root && "itemBullet"} />
        <div 
          className={classes.join(" ")} 
          ref={function(e){if(e != null) e.contentEditable=true;}} 
          onKeyDown={(e) => this.props.handleKeyDown(e, this.props)}
          onInput={this.props.handleInput}
          onFocus={this.props.handleBlur}
          onClick={this.props.handleBlur}
        >
           { this.props.content }
        </div>
        <div className={!this.props.root && "itemListChildren"}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Item
