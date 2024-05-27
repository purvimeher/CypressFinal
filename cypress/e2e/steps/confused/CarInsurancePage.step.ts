import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import CarInsurancePage from '../../pages/CarInsurancePage'
import MakeAndModelPage from '../../pages/MakeAndModelPage'


When(/^I fill the car registration input with the "([^"]*)"$/, function (search_text) {
	console.log(search_text);
    this.car_insurance_page = new CarInsurancePage()
    this.car_insurance_page.fillSearch(search_text)
    this.car_insurance_page.clickSearch()
});

Then(/^the text "([^"]*)" should be visible on the registration table$/, function (search_result){
	console.log(search_result);
    this.make_and_model_page = new MakeAndModelPage()
    this.make_and_model_page.getSearchResult(search_result)
});