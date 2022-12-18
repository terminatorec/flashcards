const func = (words:string,separator:string) =>{
    try {
        let wordsAndTranslates = words.split(/\n/)
        let finishArray = []
        for (let i = 0; i < wordsAndTranslates.length; i++) {
            let detect = wordsAndTranslates[i].split(separator)

            // console.log('detect',i,detect)
            if( !detect[0] || !detect[1]){
                throw new Error();  
            }
            let element = {
                word:detect[0],
                translate:detect[1],
                seeWord:true,
                index:i
            }
            finishArray.push(element)
            
        }
        return finishArray
    } catch (error) {
        alert('wrong format')
    }
}

export default func