import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
// import HomePage from '../../pages/ConfusedHomePage'
import ConfusedHomePage from '../../pages/ConfusedHomePage';

Given(/^I go to the confused home page$/, function () {
    this.home_page = new ConfusedHomePage()
    this.home_page.open()
});

Given(/^I click on the car insurance button$/, function() {
    this.home_page = new ConfusedHomePage()
    this.home_page.click_start_now_btn()
});