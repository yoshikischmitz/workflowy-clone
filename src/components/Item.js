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
		return(
			<div>
				<div className={this.props.parent && "itemBullet"} />
				<div 
					className="itemListEditor" 
					ref={function(e){if(e != null) e.contentEditable=true;}} 
					onKeyDown={this.props.handleKeyDown}
					onInput={this.props.handleInput}
					onFocus={this.props.handleBlur}
					onClick={this.props.handleBlur}
				>
					 { this.props.content }
				</div>
				<div className={this.props.parent && "itemListChildren"}>
					{ this.props.children }
				</div>
			</div>
		)
	}
}

export default Item
