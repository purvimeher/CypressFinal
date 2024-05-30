import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

var currentResponse;

Given(/^I access api request end point to get users$/, function () {
	const url='https://reqres.in/api/users?page=1)'
    cy.request(url).as('currentResponse').its("status").should('equal',200)
    console.log(currentResponse)
});

Given(/^I access api request end point to get single user "([^"]*)"$/, (user) => {
    cy.request('https://reqres.in/api/users/'+user).as('currentResponse').its("status").should('equal',200)
});

Given(/^I access api request end point to create user "([^"]*)"$/, function(user) {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body:{
            name: user,
            job: "test analyst"
        }
    })
    .as('currentResponse')
    .its('status')
    .should('equal', 201)
    cy.debug()
});

Given(/^I access api request end point to update user "([^"]*)"$/, function(user) {
	cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body:{
            name: user,
            job: "zion resident"
        }
    })
    .as('currentResponse')
    .its('status')
    .should('equal', 200)
});

Given(/^I access api request end point to register user$/, function() {
	cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body:{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    })
    .then(function(response){
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
        console.log(response.body);
    });
});