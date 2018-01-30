import {connect} from 'react-redux'
import ItemContainer from './ItemContainer'

const mapStateToProps = (state, ownProps) => {
	return {
		id: state.root,
		depth: 0
	}
}

const RootItem = connect(mapStateToProps, null)(ItemContainer)
export default RootItem
