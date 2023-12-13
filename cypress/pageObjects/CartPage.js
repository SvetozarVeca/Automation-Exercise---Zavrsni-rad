export default class CartPage {

    itemsInCartSelector = 'tbody tr'
    checkoutButtonSelector = '.btn.btn-default.check_out'

    validateHowManyItemsAreInCart(numberOfProducts) {
        cy.get(this.itemsInCartSelector).should('have.length', numberOfProducts)
    }

    removeProductFromCartByName(itemName) {
        cy.pause()
        cy.get(this.itemsInCartSelector).each(($el, index, $list) => {
            if ($el.find('h4').text() === itemName) {
                cy.wrap($el.find('.cart_delete a')).click()
            }
        })
    }

    proceedToCheckout() {
        cy.pause()
        cy.get(this.checkoutButtonSelector).click()
    }

    checkHowManyProductsAreInCart(productsNumber) {
        cy.get(this.itemsInCartSelector).should('have.length', productsNumber)
    }
}