import Stripe from 'stripe'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const stripe = Stripe(process.env.PK_Key)

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const data = req.body.data;
    
    const line = data.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
              images: [item.images[0]],
              description: item.description,
              metadata: {
                id: item.id,
              },
            },
            unit_amount: item.price*100 ,
          },
          quantity: 1,
        };
      });

    const session = await stripe.checkout.sessions.create({
      line_items:line,
      mode: 'payment',
      success_url: 'https://ecom-frontend-livid.vercel.app/checkout-success',
      cancel_url: 'https://ecom-frontend-livid.vercel.app/cancel',
    });
  
    res.send({url : session.url});
  });

 export default router;
