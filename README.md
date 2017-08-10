# Zopa's React JS technical test.

## Description
This is a boilerplate for Zopa's React JS technical test.

Please refer to the wiki pages for the details:

Description: https://github.com/ishabo/nopa-connect/wiki

Screens: https://github.com/ishabo/nopa-connect/wiki/Screens

Style guide: https://github.com/ishabo/nopa-connect/wiki/Style-guide

## What's included?
This boilerplate contains skeleton routes and the required images for the test.
There is basic configuration for react, react-router, express, react-redux, sass-loader, jest and some other libs. (check package.json)

There's also a simple structure for client, server and static code. The majority of the work you need to do is under src/app/client and src/app/static/stylesheets.

Feel free to use the current structure or change it as you wish.

## How to run?

Once you fork this branch and git clone it, all you need to do is run:

```sh
npm start -s
```

This will install the dependencies and subsequently start the dev server.

The following URL will open automatically in your default browser:
```
http://localhost:3000/
```

You will notice that there are three screens out of the required four already built. However, the code isn't perfect, and key functionality is missing like bank selection and form validation. Additionally the unit tests are broken.

## Your tasks

1. Make the pages responsive according to the screenshots that we provided
2. Implement a bank selection that persists to the login screen
3. Implement sensible form validation
4. Build the transactions screen using the api end-point `http://localhost:3000/api/transactions`
5. Enhance and refactor the code where you feel it is needed.
6. Fix and expand the unit tests

## Expectation

While we are looking for a junior developer, we understand you might not be able to complete all tasks. Thus, you have the freedom to shine wherever you think you find yourself, but of course, perfection in all areas puts a smile on the face.

So consider the following:
- We are looking for best practices used, a demonstration of an understanding of the whole technology stack that is used.
- Spend as much time as you can.
- Add your unique touch.
- Do not hesitate to impress us visually.
