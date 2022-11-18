import React, { useContext } from "react";
import { createContext } from "react";
import { CartContext } from "./context";
// import { MenuSelect } from './menu./menuitems'

class Cart extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 1
      };
    }
  
    increment = () => {
      this.setState({count: this.state.count + 1});
    }
  
    decrement = () => {
      this.setState({count: this.state.count - 1});
    }
  
    render() {
      return (
        <CartContext.Provider value={{count: this.state.count, increment: this.increment, decrement: this.decrement}}>
          <Display />
        </CartContext.Provider>
      );
    }
  }


const Display=(props) => {
    return (
        <React.Fragment>
            <h1>Hello</h1>
            <Test count={props.count} />
        </React.Fragment>
    )
};
const Test = () => {
    return(
        <CartContext.Consumer>
        {(context) => {
            return(
                <div>
                    <button onClick={context.increment}>+</button>
                    <h1>{context.count}</h1>
                    <button onClick={context.decrement}>-</button>
                </div>
            )
        }
        }
        </CartContext.Consumer>
    )
}

export default Cart