import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import QavDemoHomePage from '../../pages/QavDemoHomePage';


let home_page:QavDemoHomePage;
let listOFButtons:any;

Given(/^I go to the QavDemo home page$/, function () {
    this.home_page = new QavDemoHomePage()
    this.home_page.open()
});

When(/^I click on the SignUp form button$/, function() {
    this.home_page.click_start_now_btn()
});


When(/^I click on the "([^"]*)" section button$/, function(sectionName) {

    listOFButtons.each($element => {
        if($element.text()== sectionName){
            cy.wrap($element).click()
        }
    });
});

Then(/^I should see "([^"]*)" buttons$/, function(noOfButtons) {
    listOFButtons = this.home_page.get_List_Of_Buttons(noOfButtons)
    
});