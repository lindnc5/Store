import { connect } from 'react-redux'
import { addItem, removeItem } from '../index.js'
import { SelectedItemList } from '../components.js'




const mapStateToProps = state => {

    var uniqueItems = [];
    const map = new Map();
    for (const item of state.SelectedItemReducer) {
        if (!map.has(item.name)) {
            map.set(item.name, true);
            uniqueItems.push({
                sku: item.sku,
                name: item.name,
                image: item.image,
                salePrice: item.salePrice,
                customerTopRated: item.customerTopRated
            });
        }
    }


    uniqueItems.forEach((element, index) => {
        var i
        var count = 0;
        for (i = 0; i < state.SelectedItemReducer.length; i++) {
            if (state.SelectedItemReducer[i].sku == element.sku) {
                count++;
            }
        }
        uniqueItems[index] = Object.assign({ amount: count }, uniqueItems[index])



    });


    return {
        selectedItemList: uniqueItems
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onPlusClick: (id) => {
            var item = Object.assign({}, id)
            delete item.amount
            dispatch(addItem(item))
        },
        onMinusClick: (id) => {
            dispatch(removeItem(id))
        }
    }
}

export const VisibleSelectedItemList = connect(
    mapStateToProps,
    mapDispatchToProps

)(SelectedItemList)

export default VisibleSelectedItemList