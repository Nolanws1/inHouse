import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  SET_CURRENT_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  ADD_ITEM,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
  SET_CURRENT_LAYOUT,
  REMOVE_LAYOUT,
  UPDATE_LAYOUT,
  ADD_LAYOUT,
  SET_CURRENT_WAREHOUSE,
  REMOVE_WAREHOUSE,
  UPDATE_WAREHOUSE,
  ADD_WAREHOUSE,
  SET_CURRENT_INVENTORY,
  REMOVE_INVENTORY,
  UPDATE_INVENTORY,
  ADD_INVENTORY,
  SET_CURRENT_BINQTY,
  REMOVE_BINQTY,
  UPDATE_BINQTY,
  ADD_BINQTY,
  DD_BIN,
  DD_WAREHOUSE,
  DD_SHELF,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPost: action.post,
      loading: false
    };

  case UPDATE_POSTS:
    return {
      ...state,
      posts: [...action.posts],
      loading: false
    };

  case ADD_POST:
    return {
      ...state,
      posts: [action.post, ...state.posts],
      loading: false
    };

  case REMOVE_POST:
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post._id !== action._id; 
      })
    };

    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.item,
        loading: false
      };
  
    case UPDATE_ITEM:
      return {
        ...state,
        items: [...action.items],
        loading: false
      };
  
    case ADD_ITEM:
      return {
        ...state,
        items: [action.post, ...state.items],
        loading: false
      };
  
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => {
          return item._id !== action._id; 
        })
      };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.post, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((post) => {
        return post._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

    case SET_CURRENT_LAYOUT:
      return {
        ...state,
        currentLayout: action.layout,
        loading: false
      };
  
    case UPDATE_LAYOUT:
      return {
        ...state,
        layouts: [...action.layouts],
        loading: false
      };
  
    case ADD_LAYOUT:
      return {
        ...state,
        layouts: [action.layout, ...state.layouts],
        loading: false
      };
  
    case REMOVE_LAYOUT:
      return {
        ...state,
        layouts: state.layouts.filter((layout) => {
          return layout._id !== action._id; 
        })
      };

      case SET_CURRENT_WAREHOUSE:
        return {
          ...state,
          currentWarehouse: action.warehouse,
          loading: false
        };
    
      case UPDATE_WAREHOUSE:
        return {
          ...state,
          warehouses: [...action.warehouses],
          loading: false
        };
    
      case ADD_WAREHOUSE:
        return {
          ...state,
          warehouses: [action.warehouse, ...state.warehouses],
          loading: false
        };
    
      case REMOVE_WAREHOUSE:
        return {
          ...state,
          warehouses: state.warehouses.filter((warehouse) => {
            return warehouse._id !== action._id; 
          })
        };
        case SET_CURRENT_INVENTORY:
          return {
            ...state,
            currentInventory: action.inventory,
            loading: false
          };
      
        case UPDATE_INVENTORY:
          return {
            ...state,
            inventories: [...action.inventories],
            loading: false
          };
      
        case ADD_INVENTORY:
          return {
            ...state,
            inventories: [action.inventory, ...state.inventories],
            loading: false
          };
      
        case REMOVE_INVENTORY:
          return {
            ...state,
            inventories: state.inventories.filter((inventory) => {
              return inventory._id !== action._id; 
            })
          };

          case SET_CURRENT_BINQTY:
            return {
              ...state,
              currentBinQuantity: action.binQuantity,
              loading: false
            };
        
          case UPDATE_BINQTY:
            return {
              ...state,
              binQuantities: [...action.binQuantities],
              loading: false
            };
        
          case ADD_BINQTY:
            return {
              ...state,
              binQuantities: [action.binQuantity, ...state.binQuantities],
              loading: false
            };
        
          case REMOVE_BINQTY:
            return {
              ...state,
              binQuantities: state.binQuantities.filter((binQuantity) => {
                return binQuantity._id !== action._id; 
              })
            };
          case DD_WAREHOUSE:
            return {
              ...state,
              ddWarehouse: [...action.ddWarehouse],
              loading: false
            };
          case DD_BIN:
            return {
              ...state,
              ddBin: [...action.ddBin],
              loading: false
            };
          case DD_SHELF:
            return {
              ...state,
              ddShelf: [...action.ddShelf],
              loading: false
            };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    items: [],
    currentItem: {
      _id: 0,
      itemNumber: "",
      itemName: "",
      category: "",
      qty: 0
    },
    layouts: [],
    currentlayout: {
      _id: 0,
      warehouseCode: "",
      bin: "",
      shelfNo: 0,
      binLocation: "",
    },
    warehouses: [],
    currentWarehouse: {
      _id: 0,
      warehouseCode: "",
    },
    inventories: [],
    currentInventory: {
      _id: 0,
      ID: 0,
      warehouseCode: "",
      bin: "",
      shelfNo: 0,
      binLocation: "",
      itemNumber: "",
      qty: 0,
      trxType: "",
      modifiedDate: "",
    },
    binQuantities: [],
    currentBinQuantity: {
      _id: 0,
      warehouseCode: "",
      bin: "",
      itemNumber: "",
      binQty: 0,
      modifiedDate: "",
    },
    favorites: [],
    ddWarehouse:[],
    ddBin:[],
    ddShelf:[],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
