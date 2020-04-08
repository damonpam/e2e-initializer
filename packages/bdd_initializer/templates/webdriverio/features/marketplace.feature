Feature: Amazon

  The checkout is the process that a customer must go through when checking out the items in the cart.
  To achieve that, we have different selectable items offered by several marketplace's shops.

    Scenario: 01 - Client lands to home page
        Given I am in the home page
        Then the page title should be "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"
        And I should see the Amazon logo
        And the search box should be empty

