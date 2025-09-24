Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can sign up into the app

    Given I open the app
    When I go to login page
    And I fill sign up with valid credentials
    Then I Validate the success Sign Up Message
