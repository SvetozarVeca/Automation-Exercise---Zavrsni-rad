Cypress.Commands.add('AddProductsToCart', (listOfProducts, productsPage) => {
    listOfProducts.forEach(element => {
        productsPage.hoverOnProductAndAddItToCart(element)
        productsPage.clickOnContinueShopping()
    });
})