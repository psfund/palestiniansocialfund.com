import Stripe from "stripe";

export default Stripe(process.env.STRIPE_API_KEY);