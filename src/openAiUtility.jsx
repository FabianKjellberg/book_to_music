import OpenAi from 'openai';

class OpenAiUtility {

    //här kan ni ändra medelandet för vilket message ni skickar till chatgpt om svaren inte passar bra med sökningarna.
    static async getSentiment(text) {

        //!!!!VIKTIGT!!!!
        //Ni kan inte ladda upp API nyckeln i github. om den laddas upp i github tar openAI automatiskt bort nyckeln och då måste jag skapa en nu för att det ska funka.
        const key = 'something';

        const format = '[term, term, term, term]';

        let isValidFormat = false;
        let responseContent = null;
        let counter = 0;

        while (!isValidFormat) {
            if (counter > 10) {
                console.error("Warning: OpenAi, kunde inte få rätt format efter 10 försök returnerar default tags")
                return "[default, default, default, default]"
            }

            try {
                const openai = new OpenAi({ apiKey: key, dangerouslyAllowBrowser: true });

                const completion = await openai.chat.completions.create({
                    
                    //det är detta messaget som ni kan ändra för att få en annan respons från ChatGPT
                    messages: [
                        {
                            role: 'system',

                            // Meddelande in the working för att få genrer från GPT
                            content:
                                'Follow these 4 steps: ' +
                                '1. Analyze the text between these tags &€%& ' +
                                text +
                                ' &€%&' +
                                ' 2. Respond with 4 music genres that would fit the mood of the content' +
                                ' (single words, so if it\'s a genre consisting of several words, use _ instead of spaces). ' +
                                '3. Follow this format for the response ' +
                                format +
                                ' . 4. When replacing the term from the format, only use words',

                            // fabians OG meddelande
                            /*
                            content:
                                'follow these 4 steps 1. use the text between these tags &€%& ' +
                                text +
                                ' &€%&' +
                                '2. find 4 single words from said text that would be good search terms to find a song. 3. follow this format for the response ' +
                                format +
                                '. 4. when replacing the term from the format, only use words',
                                    */
                        },
                    ],
                    //ändra inte till gpt-4, den kostar aldeles för mycket!!!
                    model: 'gpt-3.5-turbo',
                });
                responseContent = completion.choices[0].message.content;
                isValidFormat = checkFormat(responseContent);
                counter++;

            } catch (error) {
                console.error('Error:', error);
                counter++;
            }
        }
        return responseContent;
    }
}
//Checkar så att formated stämmer, om ni ändrar på formatet så kommer denna inte funka!!
function checkFormat(responseContent) {
    if (responseContent[0] !== '[') return false;
    if (responseContent[responseContent.length - 1] !== ']') return false;
    let terms = responseContent.split(',').length - 1;
    if (terms !== 3) return false;
    return true;
}

export default OpenAiUtility