Feature: Login functionality

    Scenario: Login with valid credentials

        Given user is on login page
        When user enter username and password
        Then user goto dashboard screen

