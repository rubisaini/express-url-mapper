# express-url-mapper

It is use to navigate new url from old one. For example if we want to migrate our old system to new one then we have to migrate oul old site url to new url so in this case we can use this module .

### Dependence
  - `node`
  - `express`
  - `querystring`
  - `Linux` operating system

### Installation Guide
Just run this command into your project directory.
```sh
npm install express-url-mapper
```
### Some Guidelines
This module needs to parameters, first parameter is express instance and second is the list of the objects which have old, new url along with the redirection code.
like:
```sh
[
{
oldUrl: "myApp/abc.html",
newUrl: 'myApp/xyz',
redirectionType: 301
}]
```

#### NPM
```sh
npm install express-url-mapper
```

#### Issue Tracking
It's open community, so all are welcome to contribute or open `issue` || `suggestion` || `comments`