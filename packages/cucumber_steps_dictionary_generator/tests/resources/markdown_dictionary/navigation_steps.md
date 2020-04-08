# 📗 navigation_steps


6 steps defined.

## 📍 Given

#### - I am in the {word} {int} category page

##### Parameters:

 | # | Name | Type | 
 | --- | --- | --- | 
 | 1 | category | string
2 | foo | number
3 | table | TableDefinition | 

## 🎬 When

#### - I navigate to the product page of {ProductSKU}

##### Parameters:

 | # | Name | Type | 
 | --- | --- | --- | 
 | 1 | productSKU | string | 

## ✅ Then

#### - the product with EAN {productEAN} should not be published from Mirakl

##### Parameters:

 | # | Name | Type | 
 | --- | --- | --- | 
 | 1 | ean | string | 

#### - the user should( not)? have a saved card for the next checkout with the following (?:product|products)

##### Parameters:

 | # | Name | Type | 
 | --- | --- | --- | 
 | 1 | notSaved | string
2 | table | TableDefinition | 

#### - I should see the product not found page

#### - the (?:object|model) ([^"].*) should (not )?contain one element with the following properties:

##### Parameters:

 | # | Name | Type | 
 | --- | --- | --- | 
 | 1 | model | string
2 | notContain | boolean
3 | table | TableDefinition | 
