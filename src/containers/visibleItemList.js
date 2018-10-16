import { connect } from 'react-redux'
import { fetchItemList, addItem } from '../index.js'
import { ItemSelecter } from '../components.js'



const mapStateToProps = state => {

    return {

        itemList: state.ItemReducer

    }

}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (id) => {

            dispatch(addItem(id))


        }
    }
}

export const VisibleItemList = connect(
    mapStateToProps,
    mapDispatchToProps

)(ItemSelecter)

export default VisibleItemList

