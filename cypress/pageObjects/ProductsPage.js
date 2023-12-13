export default class ProductsPage {

    productsListSelector = '.productinfo.text-center'
    addToCartButton = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
    continueShoppingButtonSelector = '.btn.btn-success.close-modal.btn-block'
    CartPageButtonSelector = 'a[href="/view_cart"] i'

    hoverOnProductAndAddItToCart(productName) {

        cy.get(this.productsListSelector).each(($el, index, $list) => {
            if ($el.find('p').text() === productName) {
                cy.wrap($el.find('a')).click()
            }
        })
    }
    clickOnContinueShopping(){
        cy.get(this.continueShoppingButtonSelector).click()
    }

    goToCartPage(){
        cy.get(this.CartPageButtonSelector).click()
    }


}