## 1. What is npm?
Npm is a package manager which all

## 2. What is package.json?

Package.json is file contains the dependency versions of a particular project.

## 3. What is package.lock.json?

Package.lock.json is file which keeps track of all the past versions of dependencies and
also the dependency list of every specific dependency.

## 4. What is transitional dependency?

In node modules, we can see the source code file of any particular dependency along with the souce
code file of their dependencies as well. This chain is called transitional dependency.

## 5. What is a bundler?

A bundler is a package which is used to bundle all the components, minify them, optimize them and
then make a proper version of the application.

## 6. Difference between command npm and npx?

npm is a command which is used to do stuffs like installing, uninstalling and other things related
to that package

npx is command to execute the package. Here x stands for executing.

If we do npx parcel index.html, then it will execute parcel and it will build the project and
then host the project at localhost:1234.

## 7. Difference between using react from CDN and using it from npm.

Using it from CDN will create network call to use the react which is not a best way.
Also while upgradation of react, we will have to keep changing the versions in the URL.