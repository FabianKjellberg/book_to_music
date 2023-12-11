import OpenAi from 'openai'

class OpenAiUtility {

    static async getSentiment(text) {
        try {
            const openai = new OpenAi({apiKey: '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', dangerouslyAllowBrowser: true})

            const completion = await openai.chat.completions.create({
                

                messages: [{ role: "system", content: "what is 10 + 10?" }],
                model: "gpt-3.5-turbo",
            });

            console.log(completion.choices[0]);
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

export default OpenAiUtility;