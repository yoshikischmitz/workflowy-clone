import BreadCrumb from '../components/BreadCrumb'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	let currentNode = state.root
	let entries = []

	while(state.items[currentNode].parent){
		currentNode = state.items[currentNode].parent
		const item = state.items[currentNode]
		entries.push({
			id: item.id,
			content: item.content
		})
	}

	return {
		entries: entries.reverse()
	}
}

const HeaderBreadCrumb = connect(mapStateToProps, null)(BreadCrumb)

export default HeaderBreadCrumb
