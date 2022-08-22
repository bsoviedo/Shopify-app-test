import { Shopify } from "@shopify/shopify-api";

const GET_PRODUCTS_MUTATION = `
  mutation getById($input: ProductInput!) {
    getId(input: $input) {
      product {
        id
      }
    }
  }`


export default async function getProductById(session, id) {
    const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);


    try {
     
        const products = await client.query({
            data:     `  
            {
                product(id : "gid://shopify/Product/${id}") {
             
                      id
                      title
                    }
                
                
              }
              
               `,
          });

       // console.log(products.body.data.product)
        return products.body.data.product

         
      
    } catch (error) {
     /*  if (error instanceof ShopifyErrors.GraphqlQueryError) {
        throw new Error(`${error.message}\n${JSON.stringify(error.response, null, 2)}`);
      } else { */
      console.log(error)
        throw error;
     // }
    }
  }