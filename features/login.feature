Feature: Login page

  Scenario: As a user, I can log into the secure area

    Given I open the app
    When I go to login page
    And I fill login with valid credentials
    Then I Validate the success login message
