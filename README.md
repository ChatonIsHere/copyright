# Copyright (@ehsawyer/copyright)
![Build Passing](https://img.shields.io/badge/build-passing-success?style=for-the-badge) ![](https://img.shields.io/npm/v/@ehsawyer/copyright?style=for-the-badge)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

>A small copyright notice generating library

## Getting Started

Extremely simple to use:

```
const copyright = require("@ehsawyer/copyright")
```

### Installing

Installation from NPM with:

```
npm i @ehsawyer/copyright --save
```

Or install from Yarn with:

```
yarn add @ehsawyer/copyright
```

## Usage

```
// Returns "Copyright © Ethan Sawyer 2017-2019"
copyright({
    showFullText    : true,
    symbol          : "©",
    copyrightHolder : "Ethan Sawyer",
    initialYear     : 2017,
    lastUpdatedYear : 2019
})

// Returns "© Ethan Sawyer 2019"
copyright({
    showFullText    : false,
    lastUpdatedYear : "current"
})
```

## Running the tests

Install Jasmine with:

```
npm i jasmine -g
```
Or
```
yarn global add jasmine
```

Then navigate to the package folder and run:

```
jasmine
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ethan "Chaton" Sawyer** - *Main Author* - [@ehsawyer](https://github.com/ehsawyer)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details
