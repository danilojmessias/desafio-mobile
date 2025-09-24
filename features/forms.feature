Feature: Forms Feature

  @forms
  Scenario: As a user, I can fill forms in the app

    Given I open the app
    When I go to forms page
    And I fill input text
    Then I validate the result text
