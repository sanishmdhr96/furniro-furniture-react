const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')
const stripe = require('stripe')(
    'sk_test_51Hb0ziErBaMzSa2ixK5WuIjVLp3xTQCDBAzit79Pb6cPgsDJJS07gwwSdoqtM3SkK7XTMudS3sHD6rSNj0iC5NfV00YK3SsiUE'
)

const app = express();

app.use(cors({ origin: true }))
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Hello'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment request received for amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)


// cross origin access
// localhost -> api.unfoldlogics.com
//http://127.0.0.1:5001/furnio-furnitures/us-central1/api/