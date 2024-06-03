export default class SignUpFormPage {
    private readonly H3_HEADER_ELE = "div[id='container']>h3"

    private readonly FULLNAME = "#username"
    private readonly EMAIL = "#email"
    private readonly TELEPHONE = "#tel"
    private readonly Fax = "#fax"

    private H3_HEADER: string;


    getHThreeHeaderElement(text) {

        cy.get(this.H3_HEADER_ELE, { timeout: 5000 }).then(($value) => {

            this.H3_HEADER = $value.text();
            expect(this.H3_HEADER).equal(text)

        })
    }

    userFillsUpForm(){
        cy.get(this.FULLNAME).type("Jaibaba")
        cy.get(this.EMAIL).type("Jaibaba")
        cy.get(this.TELEPHONE).type("123")
        cy.get(this.Fax).type("123",{force: true})

    }
}