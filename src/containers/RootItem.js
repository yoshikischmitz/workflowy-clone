import {connect} from 'react-redux'
import ItemContainer from './ItemContainer'

const mapStateToProps = (state) => {
	return {
		id: state.root,
		depth: 0,
		parent: state.items[state.root].parent
	}
}

const RootItem = connect(mapStateToProps, null)(ItemContainer)
export default RootItem
