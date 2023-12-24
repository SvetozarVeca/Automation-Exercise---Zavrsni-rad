export default class PaymentDonePage {

    successMessageSelector = '.col-sm-9 > p'
    downloadButtonSelector = '.col-sm-9 > .btn-default'
    continueButtonSelector = '[data-qa="continue-button"]'

    validateSuccessfullOrdering() {
        cy.get(this.successMessageSelector).should('be.visible')
    }

    downloadInvoice() {
        cy.wait(500)
        cy.get(this.downloadButtonSelector).click()      
    }

    checkIfFileIsDownloaded(){
        cy.wait(500)
        cy.readFile('cypress/downloads/invoice.txt')
    }

    continueToHomePage() {
        cy.get(this.continueButtonSelector).click()
    }    
}