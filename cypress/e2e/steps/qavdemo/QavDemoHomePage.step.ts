import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import QavDemoHomePage from '../../pages/QavDemoHomePage';
import HomePage from '../../pages/HomePage';

let home_page:HomePage;
let listOFButtons:any;
Given(/^I go to the QavDemo home page$/, function () {
    this.home_page = new QavDemoHomePage()
    this.home_page.open()
});

When(/^I click on the SignUp form button$/, function() {
    this.home_page// = new QavDemoHomePage()
    this.home_page.click_start_now_btn()
});


Then(/^I should see "([^"]*)" buttons$/, function(noOfButtons) {
    this.home_page// = new QavDemoHomePage()
    listOFButtons = this.home_page.get_List_Of_Buttons(noOfButtons)

    listOFButtons.each($element => {
        cy.wrap($element).invoke('text').then(ele=>{
            cy.log(ele)
        })
    });
});