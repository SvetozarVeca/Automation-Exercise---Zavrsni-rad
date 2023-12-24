export default class HomePage {

    signUp_LogInButtonSelector = '.shop-menu > .nav > :nth-child(4) > a'
    userLoggedInInfoSelector = 'b'
    deleteAccountButtonSelector = 'a[href="/delete_account"]'
    productsPageButtonSelector = 'a[href="/products"]'
    navBarItemsSelector = '.navbar-nav a'
    logOutButtonSelecor = '.shop-menu > .nav > :nth-child(4) > a'


    goToSignUpLogInPage() {
        cy.get(this.signUp_LogInButtonSelector).click()
    }

    checkIfRightUserIsLoggedIn(username) {
        cy.get(this.userLoggedInInfoSelector).should('have.text', username)
    }

    deleteAccount() {
        cy.get(this.deleteAccountButtonSelector).click()
    }

    goToProductsPage() {
        cy.get(this.productsPageButtonSelector).click()
    }

    LogOut() {
        cy.get(this.logOutButtonSelecor).click()
    }

    LogOutIfSomeUserIsLoggedIn() {
        cy.get(this.navBarItemsSelector).each(($el, index, $list) => {
            if ($el.text() === ' Logout') {
                cy.wrap($el).click({force:true})
            }
        })
    }
}