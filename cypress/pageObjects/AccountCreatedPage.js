export default class AccountCreatedPage {

    successMessageSelector = 'b'
    continueButtonSelector = '[data-qa="continue-button"]'

    checkIfAccountIsCreatedMessageIsVisible() {
        cy.get(this.successMessageSelector).should('be.visible')
    }

    continueFromAccountIsCreatedPage() {
        cy.get(this.continueButtonSelector).click()
    }
}