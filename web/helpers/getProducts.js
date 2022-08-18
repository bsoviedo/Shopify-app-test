import { Shopify } from "@shopify/shopify-api";


export default async function getProducts(session) {
    const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);

    const queryString = `{
        products (first: 200) {
          edges {
            node {
              id
              title
            }
          }
        }
      }`
      
    try {
     
        const products = await client.query({
            data: queryString,
          });

        return products.body.data.products.edges

         
      
    } catch (error) {
     /*  if (error instanceof ShopifyErrors.GraphqlQueryError) {
        throw new Error(`${error.message}\n${JSON.stringify(error.response, null, 2)}`);
      } else { */
      console.log(error)
        throw error;
     // }
    }
  }