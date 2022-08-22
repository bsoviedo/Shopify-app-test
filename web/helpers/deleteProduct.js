import { Shopify } from "@shopify/shopify-api";



export default async function deleteProduct(session, id) {
    const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);


    try {
     
        const products = await client.query({
            data:     ` 
            mutation {
                productDelete(input: {id: "gid://shopify/Product/${id}"})
                {
                  deletedProductId
                }
              }
               `,
          });

        ///console.log(products)
        return products

         
      
    } catch (error) {
     /*  if (error instanceof ShopifyErrors.GraphqlQueryError) {
        throw new Error(`${error.message}\n${JSON.stringify(error.response, null, 2)}`);
      } else { */
      console.log(error)
        throw error;
     // }
    }
  }