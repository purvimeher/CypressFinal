export default class MakeAndModelPage {

    private readonly CSS_REGISTRATION = "#vehicleSummaryRegNumber b"

    getSearchResult(text: string): void {
        cy.get(this.CSS_REGISTRATION, { timeout: 30000 }).should('have.text', text)
        cy.screenshot()
    }
}