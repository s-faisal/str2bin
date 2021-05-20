# String to Binary

JavaScript library / CLI commands to convert any String to Binary Code and vice-versa.

## Installation

To install via npm
```bash
npm i str2bin
```

To install via yarn
```bash
yarn add str2bin
```

## Usage

```nodejs
const str2bin = require("str2bin")
str2bin.strToBin(string) 
str2bin.binToStr(binaryCode, delimiter) 

str2bin.strToBin("hello") 
## returns "01101000 01100101 01101100 01101100 01101111"

str2bin.binToStr("01101000 01100101 01101100 01101100 01101111") 
## returns "hello"

str2bin.binToStr("01101000-01100101-01101100-01101100-01101111", "-") 
## returns "hello"
```

## Command line usage

Install the package globally

```bash
npm i -g str2bin ##using NPM 
OR
yarn global add str2bin ##using yarn
```

```nodejs
## str2bin -s "string_that_needs_to_be_converted"
str2bin -s "hello"
## returns "01101000 01100101 01101100 01101100 01101111"

## str2bin -b "binary_string_that_needs_to_be_converted"
str2bin -b "01101000 01100101 01101100 01101100 01101111"
## returns 'hello'

## str2bin -b "binary_string_that_needs_to_be_converted" -d "delimiter"
str2bin -b "01101000-01100101-01101100-01101100-01101111" -d "-"
## returns "hello"
```