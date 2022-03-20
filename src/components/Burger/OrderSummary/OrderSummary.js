import React, {Component} from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    //This component dose not have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return ( 
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });

        return(
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delecious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        );
    }
} 

export default OrderSummary;