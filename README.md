# ecom

<!-- instruction to setup backend -->

delete the api inner items
npx create-strapi-app@latest .
npm i axios
npm install redux @reduxjs/toolkit
setup strapi
paste the token id in .env file
update order.js file of backend
create stripe accoutn
paste the bothe keys
secret key in .env file
public key in cart.js
npm install --save @stripe/react-stripe-js @stripe/stripe-js

payment

-> change in list.jsx , product.js 10 march
added this

 <!-- if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  -->

<!-- //this is hp env of client folder -->

REACT_APP_API_TOKEN = 110f33a3ce57a9d2cc2a14210a6e3291691623018d639a7c94b3965fdd51e618f95ba7847afa56d4ea3df7a84e5a10d4f0bc29bc941a6f3dd8eda302b25420a13464bc5c6d71983a1158de829b3ea893e5fc8931f333f39282fa45c43a40cae141ec534f205833e28259249cce7ffd131d50434a348693c7f5b9069fb3f69380
REACT_APP_API_URL = http://localhost:1337/api
REACT_APP_UPLOAD_URL = http://localhost:1337

<!-- this is api folder env of hp -->

HOST=0.0.0.0
PORT=1337
APP_KEYS=vEgX9DULzIQvteu6a1fzYA==,bTRnTI2rx+12BdgF9RF0SA==,UMz8NVF9AWdTNOzZ1oQYVQ==,G6MEhG4TFegofs4+EmWW3Q==
API_TOKEN_SALT=CG9ayNp4lh6WYjtFfqhCWA==
ADMIN_JWT_SECRET=cMTe3B1nTWVUaLcKjpWyEQ==
TRANSFER_TOKEN_SALT=syIilu0OFlpvQWQWbtuXQA==
STRIPE_KEY = sk_test_51Miy2UFxk8eNdsEgUxWO37P2JyVpBRU7htTbfeiL8apvGMPaTf825XmvMKffr4U2JTuFzbcS1ilbyJ2AerIoYe2g00SDy8Euwi
CLIENT_URL = http://localhost:3000

# Database

DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=eH3rSZEvhoGz0TnRbUGvFQ==

<!-- this is order.js of api -->

("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/\*\*

- order controller
  \*/

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
async create(ctx) {
const { products } = ctx.request.body;
try {
const lineItems = await Promise.all(
products.map(async (product) => {
const item = await strapi
.service("api::product.product")
.findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "?success=true",
        cancel_url: process.env.CLIENT_URL + "?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }

},
}));
