@login
Feature: Login Feature

  @valid-login
  Scenario: I logged with valid credentials

    Given I open the app
    When I go to login page
    And I fill login with valid credentials
    Then I Validate the success login message
  
  @invalid-email-login
  Scenario: I logged with invalid email

    Given I open the app
    When I go to login page
    And I fill login with invalid email
    Then I Validate the invalid email message
