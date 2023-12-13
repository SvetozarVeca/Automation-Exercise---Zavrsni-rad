import HomePage from "../pageObjects/HomePage"
import LoginPage from "../pageObjects/LoginPage"
import SignupPage from "../pageObjects/SignupPage"
import AccountCreatedPage from "../pageObjects/AccountCreatedPage"
import ProductsPage from "../pageObjects/ProductsPage"
import CartPage from "../pageObjects/CartPage"
import CheckoutPage from "../pageObjects/CheckoutPage"
import PaymentPage from "../pageObjects/PaymentPage"
import PaymentDonePage from "../pageObjects/PaymentDonePage"

describe("E2E suite", () => {

    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const signUpPage = new SignupPage()
    const accountCreatedPage = new AccountCreatedPage()
    const productsPage = new ProductsPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()
    const paymentPage = new PaymentPage()
    const paymentDonePage = new PaymentDonePage()
    const url = 'https://automationexercise.com/'

    before(() => {
        cy.fixture('userData').then(function (user) {
            this.user = user
        })
        cy.fixture('products').then(function (products) {
            this.products = products
        })
        cy.fixture('cardDetails').then(function (card) {
            this.card = card
        })
        cy.visit(url)
    })

    it("e2e", function () {
        cy.url().should('eq', url)

        homePage.LogOutIfSomeUserIsLoggedIn()
        homePage.goToSignUpLogInPage()
        loginPage.checkNewUserSignUpFormisVisible()
        loginPage.createNewUser(this.user.userName, `test@test${Math.floor(Math.random() * 10000)}.com`)

        signUpPage.checkIfFormHeaderIsVisible()
        signUpPage.fillInFormAndCreateAccount(this.user)

        accountCreatedPage.checkIfAccountIsCreatedMessageIsVisible()
        accountCreatedPage.continueFromAccountIsCreatedPage()

        homePage.checkIfRightUserIsLoggedIn(this.user.userName)
        homePage.goToProductsPage()

        cy.AddProductsToCart(this.products.listOfProducts, productsPage)
        productsPage.goToCartPage()
        cartPage.checkHowManyProductsAreInCart(this.products.listOfProducts.length)
        cartPage.removeProductFromCartByName(this.products.listOfProducts[1])
        cartPage.proceedToCheckout()

        checkoutPage.checkUserCredentialsInAddressForm(this.user)
        checkoutPage.writeCommentsinMessageBox('Some comment')
        checkoutPage.ClickOnPlaceOrder()

        paymentPage.FillInCardForm(this.card)
        paymentPage.ClickPayAndConfirm()

        paymentDonePage.validateSuccessfullOrdering()
        paymentDonePage.downloadInvoice()
        paymentDonePage.checkIfFileIsDownloaded()
        paymentDonePage.continueToHomePage()

        cy.url().should('eq', url)
        cy.pause()
        homePage.LogOutIfSomeUserIsLoggedIn()

    })
})