export default class CheckoutPage{

    fullNameSelector = 'ul[id="address_delivery"] li[class="address_firstname address_lastname"]'
    messageBoxSelector = ' textarea[name="message"]'
    placeOrderButtonSelector = '.btn.btn-default.check_out'

    checkUserCredentialsInAddressForm(user){
        cy.get(this.fullNameSelector).should('have.text',`${user.title} ${user.firstName} ${user.lastName}`)
    }

    writeCommentsinMessageBox(message){
        cy.get(this.messageBoxSelector).type(message)
    }

    ClickOnPlaceOrder(){
        cy.get(this.placeOrderButtonSelector).click()
    }
}