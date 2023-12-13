export default class SignupPage {

    enterAccountInfoHeaderSelector = ':nth-child(1) > b'
    mrTitleSelector = ':nth-child(3) > .top'
    mrsTitleSelector = ':nth-child(4) > .top'
    nameSelector = '[data-qa="name"]'
    passwordSelector = '[data-qa="password"]'
    pickDaySelector = '[data-qa="days"]'
    pickMonthSelector = '[data-qa="months"]'
    pickYearSelector = '[data-qa="years"]'
    signupForNewsletterSelector = '#newsletter'
    specialOffersSelector = '#optin'
    firstNameSelector = '[data-qa="first_name"]'
    lastNameSelector = '[data-qa="last_name"]'
    companySelector = '[data-qa="company"]'
    addressSelector = '[data-qa="address"]'
    address2Selector = '[data-qa="address2"]'
    countrySelector = '[data-qa="country"]'
    stateSelector = '[data-qa="state"]'
    citySelector = '[data-qa="city"]'
    zipcodeSelector = '[data-qa="zipcode"]'
    mobileNumberSelector = '[data-qa="mobile_number"]'
    createAccountButtonSelector = '[data-qa="create-account"]'

    checkIfFormHeaderIsVisible() {
        cy.get(this.enterAccountInfoHeaderSelector).should('be.visible')
    }

    fillInFormAndCreateAccount(user) {
        if (user.title === "Mr.") {
            cy.get(this.mrTitleSelector).click()
        } else if (user.title === 'Mrs.') {
            cy.get(this.mrsTitleSelector).click()
        }
        cy.get(this.nameSelector).clear().type(user.userName)
        cy.get(this.passwordSelector).type(user.password)
        cy.get(this.pickDaySelector).select(user.day)
        cy.get(this.pickMonthSelector).select(user.month)
        cy.get(this.pickYearSelector).select(user.year)
        cy.get(this.signupForNewsletterSelector).click()
        cy.get(this.firstNameSelector).type(user.firstName)
        cy.get(this.lastNameSelector).type(user.lastName)
        cy.get(this.companySelector).type(user.company)
        cy.get(this.addressSelector).type(user.address1)
        cy.get(this.address2Selector).type(user.address2)
        cy.pause()
        if ((user.country === "United States") || (user.country === "Canada") || (user.country === "Australia") || (user.country === "Israel") || (user.country === "New Zeland") || (user.country === "Singapore")) {
            cy.get(this.countrySelector).select(user.country)
        }
        cy.get(this.stateSelector).type(user.state)
        cy.get(this.citySelector).type(user.city)
        cy.get(this.zipcodeSelector).type(user.zipCode)
        cy.get(this.mobileNumberSelector).type(user.mobileNumber)
        cy.pause()
        cy.get(this.createAccountButtonSelector).click()
    }
}