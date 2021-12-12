# Edlib
  ![](https://img.shields.io/badge/license-MIT-brightgreen)
## Description
A lightweight and super fast C/C++ library for sequence alignment using edit distance.
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
You can use Edlib in your project either by directly copying header and source files from edlib/, or by linking Edlib library. In any case, the only thing that you have to do in your source files is to include edlib.h.
## Usage
The main function of edlib is edlibAlign. Given two sequences (and their lengths), it will find edit distance, alignment path, or its end and start locations.
## License
Licensed under MIT License; you may not use this file except in compliance with the License. You may obtain a copy of MIT License at https://www.mit.edu/~amini/LICENSE.md
## Contributing
Feel free to send pull requests and raise issues. When developing, you may want to use -D CMAKE_BUILD_TYPE=Debug flag when calling cmake in order to get debugging flags passed to compiler.
## Tests
Check Building to see how to build binaries (including binary runTests). To run tests, just run ./runTests. This will run random tests for each alignment method, and also some specific unit tests.
## Questions
Find me on github at [Martinsos](https://github.com/Martinsos) or reach out to me via email at martinsos@gmail.com if you have any questions!
  