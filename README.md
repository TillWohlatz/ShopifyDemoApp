# ShopifyDemoApp
Demo is based on the following application demo tutorial:

* https://help.shopify.com/en/api/tutorials/build-a-shopify-app-with-node-and-react/embed-your-app-in-shopify
* https://help.shopify.com/en/api/tutorials/build-a-shopify-app-with-node-and-react/build-your-user-interface-with-polaris
* --> Go on here --> https://help.shopify.com/en/api/tutorials/build-a-shopify-app-with-node-and-react/learn-the-graphql-admin-api

## Binding localhost app to shopify partner with ngrok tunnel 
npm i -g ngrok

ngrok http 3000

In shopify under : https://partners.shopify.com/970413/apps/2840321#/
Click app setup and adapt the tunnel and callback settings to your ngrok tunnel

Open shop admin through tunnel (unclear why needed?)
https://{tunnelId}.ngrok.io/auth?shop=awesomejupitershop.myshopify.com

