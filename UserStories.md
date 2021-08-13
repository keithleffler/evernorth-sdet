# Evernorth SDET coding exercise
## User Stories

Keith Leffler
12 August 2021

## Functional tests

### /index.html page tests

1. 'Smoke test: Verify the main page is up and running':  This is a basic smoke test to verify that the page is loading, and the /entries API call is executed.
2. 'Smoke test: Verify that the header elements exist': This test verfies the existence and visibility of the navigation elements in the top banner, and verifies navigation between /index.html and /cart.html.
3. '/index.html functional test: A user can click on a product and  view the product detail': When the user clicks on a product, then the page navigates to /prod.html.
4. 'prod.html functional test: A user can add an item to the cart."  When the user clicks on "Add to cart", a call is made to /addtocart"
### /cart.html page tests

## Integration (API) tests

### /bycat endpoint tests

1. 'POST /bycat returns 200 OK and correctly formatted results for valid categories'.  Given a valid request with a known category, verify that /bycat returns 200 OK and correctly structured data in the response.  This is a basic positive test.
2. 'POST /bycat returns 200 OK and an empty array for an unknown category and valid body':  Given a valid request with an "unknown" category, verify that /bycat returns 200 OK and a correctly structured response with no items.  This verifies that the API can handle categories that don't appear in the sample page.
3. 'POST /bycat returns 200 OK and an error message for an invalid request body'': Given a request with an invalid request body, verify that the /bycat entpoint returns 200 OK and an error message.  This verifies that the API can handle an incorrectly structured request body.

### /entries endpoint tests

1. 'GET /entries returns 200 OK and valid response body': Verify that the /entries endpoint returns 200 OK and a list of correctly structured entries.  This is a basic positive test for the endpoint.

### /pagination endpoint tests

1. 'POST /pagination returns 200 OK, correctly formatted data, and the listed number of entries': Given a valid request, verify that the /pagination endpoint returns 200 OK and correctly structure data.  Verify that the 
cords returned matches the ScannedCount field.  This verifies consistency between fields in the response.




