class GoogleUtility {

    static async getSentiment(text) {
        const apiKey = 'AIzaSyCJKnk4DTZU_qdOu6tNbn-CLCslw7JFc3c';
        const url = `https://language.googleapis.com/v2/documents:/v2/documents:analyzeSentiment?key=${apiKey}`;


        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    document: {
                        content: text,
                        type: 'PLAIN_TEXT',
                    },
                }),
            });

            const data = await response.json();

            console.log('Sentiment Analysis Result:', data);
            return data;
        } catch (error) {
            console.error('Error in API request:', error);
            throw error;
        }
    }
}

export default GoogleUtility;