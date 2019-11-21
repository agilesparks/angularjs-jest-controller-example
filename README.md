This is based on:

https://curtistimson.co.uk/post/angularjs/angularjs-jest-unit-testing

It is based on the repository taken from: https://github.com/curtistimson/angularjs-jest-example

This post: https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1 (and the one before/after it, see links inside) explains a lot of the stuff, based on  running on Karma. The same principles are for jest.

I have added examples 3,4 and 6 (1 and 2 are at the original repository mentioned above) for working with controllers.
5 is a class controller that needs some parameters, needs the angular model to be pre defined and needs a fake function (PushGACode)


```
git clone git@github.com:agilesparks/angularjs-jest-controller-example.git
```

### Npm install dependencies

```
npm i
```

### Run tests
```
npm test
```
