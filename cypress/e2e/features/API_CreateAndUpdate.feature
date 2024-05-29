@User @test
Feature: Create, Update and Get User

  @CreateUser
    Scenario: Perform api test to create user
    Given I access api request end point to create user

  @UpdateUser
    Scenario: Perform api test to update user
    Given I access api request end point to update user

  @GetUser
    Scenario: Perform api test to fetch user
    Given I access api request end point to get single user