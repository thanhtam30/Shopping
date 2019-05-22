
import * as Types from '../actions/Types'
const initalState={
  cart:[]
};
export default (state=initalState,action)=>{
  switch (action.type) {
    case Types.GET_CART:
    return {...state,
      cart:action.payload,
      totalAmount:totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }   
    case Types.DELETE_CART_ITEM:
    return {...state,
      cart: action.payload,
      totalAmount: totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }
   case Types.UPDATE_CART:

    return {...state,
      cart:action.payload,
      totalAmount: totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }
    
   case Types.ADD_TO_CART:
    return {...state,
      cart:action.payload,
      totalAmount: totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }
     case Types.DELETE_CART_ITEM:
    return {...state,
      cart: action.payload,
      totalAmount: totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }
    case Types.CLEAR_CART:
   return {
     ...state,
     cart:[],
     totalAmount:0,
     totalQty:0
   }
    default:
      return state;
  }
}

export function totals(payloadArr){
// // CALCULATE TOTALS


  const totalAmount = payloadArr.map((cartArr)=>{
    return cartArr.Gia * cartArr.quantity;
  }).reduce((a, b)=> {
    return a + b;
  }, 0); //start summing from index0


  const totalQty = payloadArr.map((qty)=>{
    return qty.quantity;
  }).reduce((a, b) =>{
    return a + b;
  }, 0);

  return {amount:totalAmount, qty:totalQty}
}

