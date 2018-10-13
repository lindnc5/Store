import {connect} from 'react-redux'
import {fetchItemList} from '../index.js'
import { ItemSelecter } from '../components.js'



const mapStateToProps = state => {
    
    
    console.log("mappin date state")
    
    return {
        
        itemList: state.ItemReducer.itemList
        
    }
    
}

const mapDispatchToProps = dispatch => {
return{
       onChange : (id) => {
           
           dispatch(fetchItemList(id))
           
           
       
           
       }
  }
}

 export const VisibleItemList =  connect(
      mapStateToProps,
      mapDispatchToProps
  )(ItemSelecter)

  export default VisibleItemList
  
