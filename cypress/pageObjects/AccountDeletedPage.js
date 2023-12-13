export default class AccountDeletedPage{

    successMessageSelector = 'b'
    continueButtonSelector = '[data-qa="continue-button"]'

    checkIfSuccessMessageIsDisplayed(){
        cy.get(this.successMessageSelector).should('be.visible')
    }

    continueFromAccountIsDeletedPage(){
        cy.get(this.continueButtonSelector).click()
    }
}