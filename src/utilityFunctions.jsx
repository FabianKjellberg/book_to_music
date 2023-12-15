class UtilityFunctions {
    //Denna klassen behöver ni inte ändra något i. ev om ni vill lägga till egna statiska funktioner kan ni göra det här

    //ger ett nummer på hur många ord är i en text
    static wordCount(text) {
        return text.split(" ").length
    }

    //splittrar upp en string till en array of strings där varje string högst får ha "wordsPerChunk" antal ord per sträng
    static splitStringByWords(inputString, wordsPerChunk) {
        const words = inputString.split(' ');
        const result = [];

        for (let i = 0; i < words.length; i += wordsPerChunk) {
            const chunk = words.slice(i, i + wordsPerChunk).join(' ');
            result.push(chunk);
        }

        return result;
    }
}
export default UtilityFunctions;