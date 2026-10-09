Feature: Login features

    Scenario: Login with valid credential

        Given user go to the login page
        | username     | password     |
        | standard_user| secret_sauce | 
        | visual_user  | secret_sauce |
        When user enter username and password value
        Then user go to the dashboard page 
