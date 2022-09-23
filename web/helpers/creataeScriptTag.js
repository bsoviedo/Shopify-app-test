import { Shopify } from "@shopify/shopify-api";
import { ScriptTag } from "@shopify/shopify-api/dist/rest-resources/2022-07/index.js";

export const POST_SCRIPTS = `
  mutation POST_SCRIPTS($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export default async function scriptTagCreator(session, src) {

  let client = new Shopify.Clients.Graphql(session.shop, session.accessToken);

    try{
      const postScriptData = await client.query({
        data: {
          query: POST_SCRIPTS,
          variables: {
            input: {
              src: src,
              displayScope: "ALL",
            },
          },
        },
      });

      console.log("POST SCRIPTS", postScriptData.body?.data);


      return postScriptData.body?.data
  } catch (error) {
  /*   if (error instanceof ShopifyErrors.GraphqlQueryError) {
      throw new Error(`${error.message}\n${JSON.stringify(error.response, null, 2)}`);
    } else { */
      throw error;
    //}
  }
}
