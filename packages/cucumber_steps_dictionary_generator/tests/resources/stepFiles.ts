import { StepFile } from '../../types/StepFile';

export const stepFiles: StepFile[] = [
  {
    steps: [
      {
        parameters: [
          ['category', 'string'],
          ['foo', 'number'],
          ['table', 'TableDefinition']
        ],
        pattern: 'I am in the {word} {int} category page',
        type: 'Given'
      },
      {
        parameters: [['ean', 'string']],
        pattern: 'the product with EAN {productEAN} should not be published from Mirakl',
        type: 'Then'
      },
      {
        parameters: [
          ['notSaved', 'string'],
          ['table', 'TableDefinition']
        ],
        pattern:
          'the user should( not)? have a saved card for the next checkout with the following (?:product|products)',
        type: 'Then'
      },
      {
        parameters: undefined,
        pattern: 'I should see the product not found page',
        type: 'Then'
      },
      {
        parameters: [
          ['model', 'string'],
          ['notContain', 'boolean'],
          ['table', 'TableDefinition']
        ],
        pattern: 'the (?:object|model) ([^"].*) should (not )?contain one element with the following properties:',
        type: 'Then'
      },
      {
        parameters: [['productSKU', 'string']],
        pattern: 'I navigate to the product page of {ProductSKU}',
        type: 'When'
      }
    ],
    uri: '/step_definitions/navigation_steps.ts'
  },
  {
    steps: [
      {
        parameters: [
          ['quantity', 'number'],
          ['productSKU', 'string']
        ],
        pattern: 'I should see {int} unit(s) for {ProductSKU} product in the cart',
        type: 'Then'
      },
      {
        parameters: [
          ['quantity', 'number'],
          ['foo', 'number'],
          ['baz', 'boolean']
        ],
        pattern: 'I should see {int} {float} product(s) in the {boolean} cart',
        type: 'Then'
      },
      {
        pattern: 'the cart should be stored with the same address info for all products and sellers',
        type: 'Then'
      }
    ],
    uri: '/step_definitions/checkout/cart_steps.ts'
  }
];
