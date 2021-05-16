module.exports.strToBin = (text) => {
    try{
        let pad = "00000000";
        return unescape(encodeURIComponent(text))
            .split('').map(function(txt) {
                let binary = txt.charCodeAt(0).toString(2);
                return pad.slice(binary.length)+binary;
            }).join(' ');
    }catch(e){
        return e
    }
}

module.exports.binToStr = (text, delimiter=" ") => {
    try{
        let stringeq = []
        text.split(delimiter).forEach(ele => {
            let asciiCounter = 0
            ele = ele.split("").reverse().join("");
            for(let i = 7; i >= 0; i--){
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