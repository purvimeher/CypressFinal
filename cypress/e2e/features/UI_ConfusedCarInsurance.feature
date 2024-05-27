@CarInsuranceCheck
Feature: As car owner, I want to get car insurance quotes from confused.com

  Background:
    Given I go to the confused home page
    And I see "Confused.com - Get that great feeling when you\'ve just used Confused.com" in the title

  @CarInsuranceCheck @test
  Scenario Outline: Using the search input with the text "<car_registration>" for car insurance
    Given I click on the car insurance button
    When I fill the car registration input with the "<car_registration>"
    Then the text "<car_registration>" should be visible on the registration table

    @myothercar
    Examples:
      | car_registration |
      | AU04YWD          |

    @mycar
    Examples:
      | car_registration |
      | ME10HER          |
