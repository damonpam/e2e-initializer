#@ignore
#Feature: Manor
#
#    The checkout is the process that a customer must go through when checking out the items in the cart.
#    To achieve that, we have different selectable items offered by several marketplace's shops.
#
#    Scenario: 01 - Client lands to home page
#        Given I am in the home page
#        Then the page title should be "Nicht gefunden | Manor Site"
#        And I should see the Manor logo
#        And the search box should be empty
#
#    Scenario: 02 - Client searches for a specific product
#        Given I am in the home page
#        When I search for the product "potatoes"
#        Then I should see "potatoes" in the results
