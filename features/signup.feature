@signup
Feature: Sign Up Feature

  @valid-signup
  Scenario: As a user, I can sign up into the app
    Given I open the app
    When I go to login page
    And I fill sign up with valid credentials
    Then I Validate the success Sign Up Message

  @invalid-signup
  Scenario: As a user, I cannot sign up into the app with invalid email
    Given I open the app
    When I go to login page
    And I fill sign up with invalid email
    Then I Validate the error message appears
