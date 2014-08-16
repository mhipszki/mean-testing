#Testing throughout the MEAN stack

This project is intended to show the concept of adding a new Feature to a MEAN stack application by first turning a User Story with Acceptance Criteria to tests and then gradually add production code fulfilling test cases.

This way we can make sure we have proper requirements (it will turn out if we don't) and that those requirements are completely fulfilled by running our automated test suites anytime.

##About the project

This project was created to be the basis of my talk given at the London MEAN stack meetup on the 13th of August, 2014, see:

http://www.meetup.com/MEAN-Stack/events/198423542/

My slides can be found here:

http://slides.com/martonhipszki/testing-throughout-the-mean-stack-part-1#/

The recording of my talk is available here:

https://skillsmatter.com/skillscasts/5634-unit-testing-throughout-the-mean-stack

I'm about to release several blog posts to explain the scaffolding, the front-end and the back-end related steps in detail on my blog:

http://blog.hipzter.co.uk

trying to help those who are new to the MEAN stack or using the test-first approach to properly create stable applications.

##Getting started

You need the following tools to be set up and working to experiment with this project.

* Node.js 0.10.x + npm 1.4.x
* MongoDB 2.6.x
* Bower 1.2.x
* Grunt 0.4.x
* Yeoman 1.2.x

The project was scaffolded with `yo angular` to keep it slick as most of the MEAN stack generators or boilerplate projects were too *feature heavy* to my taste.

Only the first two Scenario is covered at the moment but more is coming. Please check back to this Github page and keep an eye on my twitter `@mhipszki`.

Going through the commits will help you the best to understand the workflow I've used.

##Running the project

Fork or clone the repo then run `npm install` then `bower install` from the project root folder.

With all packages installed run `grunt serve`

Frontend integration (end-to-end) tests can be run with `grunt e2e`

Frontend unit tests are run on every file save as the `karma` Grunt task is bound to the `watch` task.

##Our User Story

```
As an Administrator I want to register a new Phone so that I can keep track of phones
```

##Acceptance Criteria and scenarios

**Scenario #1**

```
GIVEN that I am an Administrator
WHEN I open home page of the application in the browser
THEN I can click on the Register Phone button in the Navigation Bar
AND I am taken to the Register New Phone form
```

**Scenario #2**

```
GIVEN that I am an Administrator
WHEN I am on the Register New Phone form
THEN I can enter the Phone's Brand, Type, IMEI number and MAC address
AND I can click Submit to register a new Phone in the system
```

**Scenario #3**

```
GIVEN that I am an Administrator
WHEN I click the Submit button
THEN the provided information will be sent to the back-end
AND the provided information will be validated against the rules (see below)
```

**Scenario #4**

```
GIVEN that I am an Administrator
WHEN I submit invalid information
THEN I am prompted with the errors helping me correct my mistake
```

**Scenario #5**

```
GIVEN that I am an Administrator
WHEN I submit correct information
THEN I am prompted with a success message
```

Field validation rules:

* Phone Brand is mandatory, less or equal than 20 characters
* Phone Type is mandatory, less or equal than 30 characters
* Phone IMEI number is mandatory, 15 digits
* Phone MAC address is optional, format is `00:11:22:33:44:55`

The proper User Story with clear Acceptance Criteria helps us to understand the problem.

Trying to translate them to test cases will reveal if there's anything unclear or missing from the requirements, the User Journeys or if there's any technical debt to implement the feature in a reasonable way.

##Starting off on the front-end

Since the User Story explains the Feature from the User's point of view and as we are creating Features for the Users' satisfaction and not for own our purpose, it seems obvious to start turning the Acceptance Criteria to end-to-end tests first to specify the behaviour of the Front-end application which the User interacts with.

Our user journeys can be represented by *Protractor* test suites and our front-end business logic can be covered by *Jasmine* unit tests which we can run using *Karma*.

##Continuing with the back-end

We'll get to a point when we need to persist the data entered on the front-end to our database through our back-end API endpoints.

As we'd like to make sure our API endpoints are only accepting valid data and producing the expected output we can cover them by *Mocha* test suites using *Expect.js* and *Should.js* for assertions.

##Using Promises everywhere

Javascript is asyncronous and we must prevent getting into *callback hell* or the *pyramid of doom* so we rather using Promises both on front-end and back-end side. See more about this here:

http://strongloop.com/strongblog/node-js-callback-hell-promises-generators/


