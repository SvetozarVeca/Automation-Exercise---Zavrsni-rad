export default class PaymentPage {

    nameSelector = 'input[name="name_on_card"]'
    cardNumberSelector = 'input[name="card_number"]'
    cvcSelector = 'input[placeholder="ex. 311"]'
    monthSelector = 'input[placeholder="MM"]'
    yearSelector = 'input[placeholder="YYYY"]'
    submitButtonSelector = '#submit'

    FillInCardForm(card) {
        cy.get(this.nameSelector).type(card.name)
        cy.get(this.cardNumberSelector).type(card.cardNumber)
        cy.get(this.cvcSelector).type(card.cvc)
        cy.get(this.monthSelector).type(card.month)
        cy.get(this.yearSelector).type(card.year)
    }

    ClickPayAndConfirm() {
        cy.get(this.submitButtonSelector).click()
    }
}