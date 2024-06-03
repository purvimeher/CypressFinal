import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import SignUpFormPage from '../../pages/SignUpFormPage';

let signUpForm_Page: SignUpFormPage;

Then(/^I should see the following text in h3 header "([^"]*)"$/, function (txt) {
    this.signUpForm_Page = new SignUpFormPage()
    this.signUpForm_Page.getHThreeHeaderElement(txt)
});

When(/^I fill the signup form$/, function(){
    this.signUpForm_Page.userFillsUpForm()

});