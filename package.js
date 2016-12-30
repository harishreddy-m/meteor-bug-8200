Package.describe({
  name: 'meteor-package-with-npm-dep',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  Npm.depends({"github":"3.1.1"})
  api.mainModule('meteor-package-with-npm-dep.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-package-with-npm-dep');
  api.mainModule('meteor-package-with-npm-dep-tests.js');
});
