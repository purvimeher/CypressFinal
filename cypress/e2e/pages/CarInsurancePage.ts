export default class CarInsurancePage {

    private readonly CSS_INPUT_SEARCH = "input[data-val-requiredifvisible='Please enter the registration number']"
    private readonly CSS_FIND_CAR_BTN = "#find-vehicle-btn"


    fillSearch(text: string): void {
        cy.get(this.CSS_INPUT_SEARCH,{ timeout: 30000 }).should('be.visible').type(text)
        cy.screenshot()

    }

    clickSearch(): void {
        cy.get(this.CSS_FIND_CAR_BTN).should('be.visible').click()
        cy.screenshot()
        
    }

}