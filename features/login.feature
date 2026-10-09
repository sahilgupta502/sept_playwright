Feature: Login

  Scenario: Login with valid credentials

    Given user is on the login page
    When user enters valid user-name and password
    And user clicks on login button
    Then user should see the dashboard