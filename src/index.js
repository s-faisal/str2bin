module.exports.strToBin = (text) => {
    try{
        var pad = "00000000";
        return unescape(encodeURIComponent(text))
            .split('').map(function(txt) {
                var binary = txt.charCodeAt(0).toString(2);
                return pad.slice(binary.length)+binary;
            }).join(' ');
    }catch(e){
        return e
    }
}

module.exports.binToStr = (text, delimiter=" ") => {
    try{
        var stringeq = []
        text.split(delimiter).forEach(ele => {
            var asciiCounter = 0
            ele = ele.split("").reverse().join("");
            for(var i = 7; i >= 0; i--){
                if(ele.split("")[i] && ele.split("")[i]==1){
                    asciiCounter += Math.pow(((i==0) ? 1 : 2), ((ele.split("")[i] && ele.split("")[i]==1) ? i : 0))
                }
            }
            stringeq.push(String.fromCharCode(asciiCounter))
        })
        return stringeq.join("")
    }catch(e){
        return e
    }
}
