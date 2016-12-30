// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-package-with-npm-dep.js.
import { name as packageName } from "meteor/meteor-package-with-npm-dep";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-package-with-npm-dep - example', function (test) {
  test.equal(packageName, "meteor-package-with-npm-dep");
});
