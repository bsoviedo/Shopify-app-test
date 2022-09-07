import React, { useCallback, useState } from 'react'
import {useRouteParams} from '@shopify/hydrogen';
import {useLocation, useNavigate} from 'react-router-dom'
import { useAppQuery, useAuthenticatedFetch } from '../../hooks';
import {Page, Toast, Frame, Button, ButtonGroup, Spinner} from '@shopify/polaris';

function GetSpinner (){
  return(
    <div style={{'display':'flex', 'justifyContent': 'center'}}>
      <Spinner accessibilityLabel="Spinner example" size="large" />
    </div>
  )
}

export default function DetailProduct () {  

  const {pathname} = useLocation()
  const id = pathname.split('/')[pathname.split('/').length - 1]
  
  let navigate = useNavigate()


  
  let {data, status, error, isFetching} = useAppQuery({
    url: `/api/products/${id}`,
    reactQueryOptions: {
      refetchOnReconnect: false,  
    },    
  }) 


  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Eliminado!" onDismiss={toggleActive} />
  ) : null;


  const authenticatedFetch = useAuthenticatedFetch();


  let handleDeleteElement = async ()=>{

    let res = await authenticatedFetch(`/api/products/delete/${id}`)

    let data= await res.json() 

    data.success &&  toggleActive()

   // alert( data.success ? 'deleted': 'something hapeened')

    setTimeout(()=>{
    data.success && navigate('/listproducts')


   },2000) 
    
  }

 

  
  return (

    <Frame>

    <Page title={data &&  data.body.title}>


<h1 style={{'fontSize': '5rem', 'fontWeight' : 'bold', 'margin': '5% auto'}}> {data ? data.body.title :<GetSpinner/>} </h1>

<p style={{'textAlign': 'justify', 'margin': '0% 10% 0% 10%'}}>

  {data ? 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus a odio aliquam hendrerit. Morbi elit sapien, ullamcorper sed erat nec, volutpat porta odio. Vestibulum bibendum interdum nulla eu porttitor. Nam gravida elementum orci sed rutrum. In suscipit ornare risus sed aliquet. Integer lacus leo, bibendum at lobortis non, convallis ac dui. Suspendisse vel dignissim dolor. Nullam pellentesque odio faucibus tortor convallis ullamcorper. Maecenas tempor ullamcorper mi vel lacinia. Maecenas eros sem, tempus ut orci et, consequat eleifend odio. Morbi malesuada faucibus metus, quis ullamcorper justo semper vel. Sed eu luctus quam, eget luctus diam. Integer id iaculis odio. Etiam ultricies, mi eget aliquam aliquam, dolor eros ultrices nunc, sed vestibulum lorem magna sit amet elit. Nullam vel vulputate ligula, ut elementum tortor.

Phasellus tristique ultrices risus. Integer luctus et odio eu congue. Maecenas venenatis neque at ante condimentum tristique. Sed risus lacus, mattis quis urna eget, aliquam placerat est. Phasellus consectetur mi at ligula pharetra rhoncus. Mauris posuere libero id leo consequat, in ullamcorper diam accumsan. Maecenas sit amet efficitur risus.
` : 

<GetSpinner/>

}
</p>


  {toastMarkup}


<div style={{'display': 'flex', 'justifyContent': 'center', 'margin': '2%'}}>

<ButtonGroup >
      <div style={{ color: "#bf0711" }}>
        <Button  monochrome outline onClick={()=>{handleDeleteElement()}} >
          Eliminar

        </Button>
      </div>
      <div style={{ color: "#008000" }}>
        <Button monochrome outline onClick={()=>{navigate('/ListProducts')}}>
          Volver 
        </Button>
      </div>
  </ButtonGroup>


</div>

  



 


    </Page>

    </Frame>

    /* <div style={{'display': 'flex', 'flexDirection': 'column'}}> 
       */
      
      
    /* </div> */
  )
}  


