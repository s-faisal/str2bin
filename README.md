# String to Binary

JavaScript library to convert any String to Binary Code and vice-versa

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
str2bin.strToBin(String) 
str2bin.binToStr(BinaryCode, delimiter) 

str2bin.strToBin("hello") 
# returns '01101000 01100101 01101100 01101100 01101111'

str2bin.binToStr("01101000 01100101 01101100 01101100 01101111") 
# returns 'hello'

str2bin.binToStr("01101000-01100101-01101100-01101100-01101111", "-") 
# returns 'hello'
```
