Feature: Bootcamp E2E

  Background:
    Given User opens home page
    * User closes promo banner if it appears

  Scenario: Search bar
    When User enters word 'Windows' in search bar
    * User clicks search button
    Then At least one item appears in search result

  Scenario: Internet shop logo button
    When User opens 'Today's Best Deals' tab
    * User clicks on Logo
    Then User is on the main page
