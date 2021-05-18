var cli = function() {
    const yargs = require("yargs");
    const str2bin = require("./index");

    const options = yargs
        .usage("Usage: str2bin <option>")
        .strict()
        .option("s", { alias: "strtobin", describe: "Pass your string", type: "string"})
        .option("b", { alias: "bintostr", describe: "Pass your binary string", type: "string"})
        .option("d", { alias: "delimiter", describe: "Pass your delimiter", type: "string"})
        .alias('h', 'help')
        .alias('v', 'version')
        .argv;

    if(options.s || options.strtobin){
        console.log(str2bin.strToBin(options.strtobin))
    }
    if(options.b || options.bintostr){
        var delimiter = (options.delimiter) ? options.delimiter : " "
        console.log(str2bin.binToStr(options.bintostr, delimiter))
    }
};
exports.cli = cli;