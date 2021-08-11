//testValues.ts

/* Define constants used in tests.  I would use a database or external file to list the valid entries  a production site,
 but this is sufficient for a demo.

 I'm taking the categories from dev tools in Chrome.  I'd want to know more rules on allowed values or patterns for
 something larger.

*/

export const testValues = {
    apiURL : "https://api.demoblaze.com",
    validCategories: ['laptop', 'phone', 'monitor'],
    invalidCategories: ['foo', '', '12345' ]
}
