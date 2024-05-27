export default class ConfusedHomePage {

    private readonly BASE_URL_NEW = "https://www.confused.com/"

    private readonly START_NOW_BTN = "a[data-mi-click-label='homepage-hero-car-insurance-GAQ']"


    open(): void {
        cy.visit(this.BASE_URL_NEW)
        cy.get('body').should('be.visible').debug()
        cy.screenshot()
        cy.get('#button-save-all').should('be.visible').click()
    }

    click_start_now_btn(): void {
        cy.get(this.START_NOW_BTN).should('be.visible').click()
        cy.screenshot()
    }

}
