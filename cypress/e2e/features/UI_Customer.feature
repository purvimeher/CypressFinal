@Customer
Feature: As a Bank Manager Add new Customers on the Banking app

  Background:
    Given I go to the Banking page
    And I see "XYZ Bank" in the title
    And I click on the Bank Manager Login button

  @addCustomer @test
  Scenario: Add new Customers
    Given I click on the Add Customer tab
    When I fill input data to add customers
      | firstname | lastname | postalcode |
      | Homer     | Simpson  | RG30 5DX   |
      | Bart      | Simpson  | RG6 3DX    |
    Then I click on Add Customer button
