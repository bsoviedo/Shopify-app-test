import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";

import {
  AppBridgeProvider, 
  QueryProvider,
  PolarisProvider,
} from "./components";
  

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");


  const client = new ApolloClient({
    uri: '/',
    cache: new InMemoryCache(),
  });

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider> 
          <QueryProvider>
          <ApolloProvider client={client}>

            <NavigationMenu
              navigationLinks={[
                {
                  label: "Page name",
                  destination: "/pagename",
                },
              ]}
            />
            <Routes pages={pages} />

            </ApolloProvider>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
