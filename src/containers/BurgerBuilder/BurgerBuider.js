import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuider extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        buying: false
    }

    updatePurchase = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchase(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduct = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduct;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchase(updatedIngredients)
    }

    buyHandler = () => {
        this.setState({ buying: true })
    }

    purchaseCancel = () => {
        this.setState({ buying: false })
    }

    purchaseContinue = () => {
        alert("Ok")
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0  //{salad:true, meat:false....}
        }
        return (
            <Aux>
                <Modal show={this.state.buying} modalClose={this.purchaseCancel}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancel}
                        purchaseContinued={this.purchaseContinue}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <div className="conainer">
                    <div className="row">
                        <div className="div col-sm">
                            <Burger ingredients={this.state.ingredients} />
                        </div>
                        <div className="col-sm">
                            <BuildControls
                                ingredientAdded={this.addIngredientHandler}
                                ingredientRemoved={this.removeIngredientHandler}
                                disabled={disabledInfo}
                                purchasable={this.state.purchasable}
                                price={this.state.totalPrice}
                                ordered={this.buyHandler}
                            />
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default BurgerBuider
