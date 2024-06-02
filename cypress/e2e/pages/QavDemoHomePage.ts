export default class QavDemoHomePage {


    private readonly SIGN_UP_BTN = "a[href='/demo/signup']"
    private readonly LINK_BTNS = ".myhmenu a"


    open(): void {
        //custom commands added to cypress for resuablitity
        // cy.get(this.BASE_URL_NEW)
        cy.visit(Cypress.config('baseUrl'))
        cy.screenshot()
    
    }

    click_start_now_btn(): void {
        cy.get(this.SIGN_UP_BTN).should('be.visible').click()
        cy.screenshot()
    }

    get_List_Of_Buttons(noOfButtons:number):any{

        cy.get(this.LINK_BTNS).should('have.length',noOfButtons)
        return cy.get(this.LINK_BTNS)
    }
}
