@qavDemo
Feature: As qa, I want to check qavdemo site

  Background:
    Given I go to the QavDemo home page
    And I see "QAVBOX Demo" in the title

  @qvaDemoHomePage @test
  Scenario: Check all buttons presence
    Then I should see "10" buttons
    When I click on the "SignUp Form" section button
    Then I should see the following text in h3 header "Work on these below dummy controls to learn automation testing"
    When I fill the signup form