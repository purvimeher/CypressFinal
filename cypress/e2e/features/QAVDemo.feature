@qavDemo
Feature: As qa, I want to check qavdemo site

  Background:
    Given I go to the QavDemo home page
    And I see "QAVBOX Demo" in the title

  @qvaDemoHomePage @test
  Scenario: Check all buttons presence
    Then I should see "10" buttons
    When I click on the SignUp form button