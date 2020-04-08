@feature_tag
Feature: Apples basket

  Scenario: Duplicate the given number of apples
    Given I have 4 apples in the basket
    When I buy 5 more
    Then I should have 9 apples in the basket
