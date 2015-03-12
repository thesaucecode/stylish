# stylish

#### What can go wrong with importing sass bootstrap via an atmosphere package?

1. If you don't keep all your sass in one file, you will undoubtedly run into an issue with the order that your sass files are loaded.  (Meteor loads depth first).
2. It is a pain to maintain relative paths to each file of common styling you wish to import.

#### Why use this as a local package?

1. Explicit ordering of the interpretation of sass files.
2. Tidying up of client template and javascript folders.

#### Usage

Clone this github repository into your [working_directory]/packages/ directory.


Each time you add a new file to the client/styles directory, be sure to add the file to package.js and import.scss.
