import OpenAi from 'openai'

class OpenAiUtility {


    static async getSentiment(text) {
        const key = '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';

        try {
            const openai = new OpenAi({apiKey: key, dangerouslyAllowBrowser: true})

            const completion = await openai.chat.completions.create({


                messages: [{ role: "system", content: "anwer in format [emotion1(ex. happy, sad), probability1(0-1)] repeated. Analyse this text:" + text}],
                model: "gpt-3.5-turbo",
            });

            console.log(completion.choices[0]);
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

export default OpenAiUtility;