export default class LoginPage{

    newUserSignUpFormSelector = '.row > :nth-child(3)'
    signUpNameSelector = '[data-qa="signup-name"]'
    signUpEmailSelector = '[data-qa="signup-email"]'
    signUpButtonSelector = '[data-qa="signup-button"]' 
    logInEmailSelector = 'input[data-qa="login-email"]' 
    logInPasswordSelector = '[data-qa="login-password"]'
    logInButtonSelector = 'button[data-qa="login-button"]'

    checkNewUserSignUpFormisVisible(){
        cy.get(this.newUserSignUpFormSelector).should('be.visible')
    }

    createNewUser(userName,password){
        cy.get(this.signUpNameSelector).type(userName)
        cy.get(this.signUpEmailSelector).type(password)
        cy.get(this.signUpButtonSelector).click()
    }

    logIn(email,password){
        cy.get(this.logInEmailSelector).type(email)
        cy.get(this.logInPasswordSelector).type(password)
        cy.get(this.logInButtonSelector).click()
    }

}