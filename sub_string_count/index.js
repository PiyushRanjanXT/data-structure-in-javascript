function subStringSearch(str, subStr){
    let count =0;
    for(let i =0; i<str.length; i++){
        if(str[i]===subStr[0]){
            var match = true;
            for(j=1; j<subStr.length; j++){
                if(str[i+j] !=subStr[j]){
                    match =false;
                }
            }
            if(match){
                count++;
            }
        }
    }
    return count;
}