import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import { useAuthenticatedFetch } from "../hooks";

import axios from 'axios'

import {gql, useMutation} from '@apollo/client'


export default function HomePage() {


  let useAuthFetch= useAuthenticatedFetch()



  let createScriptTag=async()=>{

 
    let sendData= {  
      
        src: "https://cdn.jsdelivr.net/gh/bsoviedo/some_works/scrip_tag.js"
      
    } 

    let res = await useAuthFetch('/api/scriptTags', {
      method: 'POST', 
      body: JSON.stringify(sendData ) ,
      headers: {                
        "Content-type": "application/json"
    }
    })

    let data= await res.json()


    console.log(data)
  }

  createScriptTag()

/*   const CREATE_SCRIPTAG_QUERY = gql`mutation{
    scriptTagCreate(input: [
      cache: false, 
      displayScope: All, 
      src:"https://cdn.jsdelivr.net/gh/bsoviedo/some_works/scrip_tag.js"
    }){
      scriptTag{
        id
        src
        displayScope
      }
    }
    ])
  }`
  const [createScriptTagMutation, {data}] = useMutation(CREATE_SCRIPTAG_QUERY)

  createScriptTagMutation()
 */

/* 
  
  let authFetch = useAuthenticatedFetch()



   let getScripTags= async()=>{
    
    let res = await axios.get('https://store-test-0629.myshopify.com/admin/api/2022-07/script_tags.json',{  mode: 'no-cors', headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
  }})

    let data= await res.json()


    console.log(data)
  }


  getScripTags()
 
  
  const scriptUrl = `https://9925-181-55-183-26.ngrok.io/admin/api/2022-07/script_tags.json`;
  
  const requestBody = { 
      "script_tag": {
          "event": "onload",
          "src": `https://cdn.jsdelivr.net/gh/bsoviedo/some_works/scrip_tag.js`,
      }
  };


  

  const optionsWithPost = { method: 'POST', body: JSON.stringify(requestBody) };

  let scripTags = async()=>{

    let res = await axios.post(`${scriptUrl}`, optionsWithPost, {
      mode: "cors",
      credentials: "include",
    //  method: "PATCH",
      headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
      }}
    )

    console.log(res)


    let data= await res.json()
 
    console.log(data)
 

  }



  //scripTags()
  */


   /*    .then((res) => console.log(res.json()) ) 
      .then(data=> console.log(data) ) 
      .catch((error) => console.log('error', error)); */
 
//  createScriptTag()

 
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Nice work on building a Shopify app 🎉 v3 for mandatum</Heading>
                  <p>

                    App styled with Polaris, the
{" "}
                    <Link url="https://polaris.shopify.com/" external>
                      Polaris design system
                    </Link>
                    ,this is the second version of my Shopify app for mandatum  😇
                   {/*  ,
                    
                     {" "}
                    <Link url="https://shopify.dev/api/admin-graphql" external>
                      Shopify Admin API
                    </Link>
                    , and{" "}
                    <Link
                      url="https://shopify.dev/apps/tools/app-bridge"
                      external
                    >
                      App Bridge
                    </Link>{" "}
  UI library and components.*/}
                  </p> 
                 {/*  <p>
                    Ready to go? Start populating your app with some sample
                    products to view and test in your store.{" "}
                  </p>
                  <p>
                    Learn more about building out your app in{" "}
                    <Link
                      url="https://shopify.dev/apps/getting-started/add-functionality"
                      external
                    > 
                      this Shopify tutorial
                    </Link>{" "}
                    📚{" "}
                  </p> */}
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app, store"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />

        </Layout.Section>
      </Layout>
    </Page>
  );
}
