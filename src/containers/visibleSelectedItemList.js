import {connect} from 'react-redux'
import {fetchItemList, addItem} from '../index.js'
import { SelectedItemList } from '../components.js'



const mapStateToProps = state => {
    
    return {
        
        selectedItemList: state.SelectedItemReducer
        
    }
    
}

const mapDispatchToProps = dispatch => {
return{
       onChange : (id) => {
           
           dispatch(addItem(id))    
       
           
       }
  }
}

 export const VisibleSelectedItemList =  connect(
      mapStateToProps,
      mapDispatchToProps

  )(SelectedItemList)

  export default VisibleSelectedItemList