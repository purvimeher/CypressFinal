export default class HomePage {

    private readonly BASE_URL_NEW = "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"

    private readonly CSS_CUSTOMER_LOGIN_BUTTON = "button[ng-click='customer()']"
    private readonly CSS_BANK_MANAGER_LOGIN_BUTTON = "button[ng-click='manager()']"

    private readonly CSS_LOGOUT_BUTTON = ".btn.logout"
    

    open(): void {
        cy.visit(this.BASE_URL_NEW)
        cy.get('body').should('be.visible')
        cy.location().then(location => {
            cy.log(location.href); // logs the current URL
            cy.log(location.hostname); // logs the current hostname
            cy.log(location.pathname); // logs the current pathname
            cy.log(location.search); // logs the current search parameters
          });

          cy.title().then(title => {
            console.log(title); // logs the page's title
          });
    }

    click_customer_login(): void {
        cy.get(this.CSS_CUSTOMER_LOGIN_BUTTON).should('be.visible').click()
    }

    click_bank_manager_login(): void {
        let browserName = Cypress.browser.name
        cy.log('Browser Name is : ' +browserName)
        cy.get(this.CSS_BANK_MANAGER_LOGIN_BUTTON).should('be.visible').click()
    }

    click_logout(): void {
        cy.get(this.CSS_LOGOUT_BUTTON).should('be.visible').click()
    }

}
