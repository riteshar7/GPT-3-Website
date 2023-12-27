const env = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { OpenAI } = require('openai');


env.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API
})

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req, res) => {
    const {prompt} = req.body;
    console.log(prompt);
    const completion = await openai.completions.create({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature: 0,
        prompt: prompt,
    })

    res.send(completion.data.choices[0].text);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${process.env.PORT}`);
})