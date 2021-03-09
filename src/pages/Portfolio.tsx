import { Container, Grid } from '@material-ui/core';
import React from 'react';
import '../styles/portfolio.css'
import Advertise from './Advertise';
import CardPortfolio from "./components/CardPortfolio";
import DrawerImage from './DrawerImage';



const Portfolio:React.FC = () =>  {

  const hotra = [
      require('../styles/images/portfolio/hotra/hotra1.png'),
      require('../styles/images/portfolio/hotra/hotra2.png'),
      require('../styles/images/portfolio/hotra/hotra3.png'),
      require('../styles/images/portfolio/hotra/hotra4.png'),
      require('../styles/images/portfolio/hotra/hotra5.png'),
      require('../styles/images/portfolio/hotra/hotra6.png'),
      require('../styles/images/portfolio/hotra/hotra7.png'),
      require('../styles/images/portfolio/hotra/hotra8.png'),
      require('../styles/images/portfolio/hotra/hotra9.png'),
      require('../styles/images/portfolio/hotra/hotra10.png'),
      require('../styles/images/portfolio/hotra/hotra11.png'),
      require('../styles/images/portfolio/hotra/hotra12.png')
    ]

    const jomazonn: any[] = [
      require('../styles/images/portfolio/jomazonn/jomazonn1.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn2.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn3.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn4.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn5.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn6.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn7.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn8.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn9.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn10.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn11.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn12.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn13.png'),
      require('../styles/images/portfolio/jomazonn/jomazonn14.png')
    ]
    const ogm: any[] = [
      require('../styles/images/portfolio/ogm/ogm1.png'),
      require('../styles/images/portfolio/ogm/ogm2.png'),
      require('../styles/images/portfolio/ogm/ogm3.png'),
      require('../styles/images/portfolio/ogm/ogm4.png'),
      require('../styles/images/portfolio/ogm/ogm5.png'),
      require('../styles/images/portfolio/ogm/ogm6.png'),
      require('../styles/images/portfolio/ogm/ogm7.png'),
      require('../styles/images/portfolio/ogm/ogm8.png'),
      require('../styles/images/portfolio/ogm/ogm9.png'),
      require('../styles/images/portfolio/ogm/ogm10.png'),
      require('../styles/images/portfolio/ogm/ogm11.png'),
      require('../styles/images/portfolio/ogm/ogm12.png'),
      require('../styles/images/portfolio/ogm/ogm13.png'),
      require('../styles/images/portfolio/ogm/ogm14.png'),
      require('../styles/images/portfolio/ogm/ogm15.png'),
      require('../styles/images/portfolio/ogm/ogm16.png')
    ]

    const esn_news: any[] = [
      require('../styles/images/portfolio/esnn/esnn1.png'),
      require('../styles/images/portfolio/esnn/esnn2.png'),
      require('../styles/images/portfolio/esnn/esnn3.png'),
      require('../styles/images/portfolio/esnn/esnn4.png'),
      require('../styles/images/portfolio/esnn/esnn5.png'),
      require('../styles/images/portfolio/esnn/esnn6.png')
     
    ]


  return (

      
        <div className="portfolio" >
            <Container>
                <h3 className="heading">Portfolio</h3>
                <div style={{paddingTop:'100px'}}>
                  <Grid container spacing={4} style={{textAlign:'center'}}>
                <Grid item xs={12} sm={4} >
                  <div>
                  <CardPortfolio 
                      title="HOTRA" 
                      description="Hotra is a hotel and event booking and managemnet system." 
                      details="Hotra is a hotel and event booking management system fully equiped to handle 
                      hotel and event center reservations from clients. Handles all activities from registration to payment. 
                      Comes with an Administrator panel for managing the hotels and all booking related activities."
                      stack={['HTML','CSS','JAVSCRIPT','JQUERY','PHP','MYSQL']}
                      date="February 01, 2020"
                      images={require('../styles/images/portfolio/hotralapmob.png')}
                      image_list={hotra}
                      links={{'admin':'https://3.16.45.71/','client':'https://3.16.45.71/'}}
                  />
                  </div>
                  
                </Grid>
                <Grid item xs={12} sm={4} >
                  <div>
                  <CardPortfolio 
                      title="JOMAZONN" 
                      description="Jomazonn is an auction platform for placing bids on goods and items."
                      details="Jomazonn allows users register and post items for other users 
                      to buy instantly or bid on each item per the users conditions. This application comes with an administration 
                      panel to mange bids for end users and super administrators."
                      stack={['HTML','CSS','JAVSCRIPT','JQUERY','PHP','MYSQL']} 
                      date="May 01, 2020"
                      images={require('../styles/images/portfolio/bipprlmob.png')} 
                      image_list={jomazonn}
                      links={{'admin':'https://3.16.45.71/','client':'https://3.16.45.71/'}}
                  />
                  </div>
                  
                </Grid>
                <Grid item xs={12} sm={4} >
                  <div>
                  <CardPortfolio 
                      title="OGM" 
                      description="OGM is an ecommerce patform for buying and selling of goods."
                      details="OGM is an ecommerce platform for users to buy products. A fully integrated admin panel for managing orders from
                      products,categories and orders as well as deliveries."
                      stack={['HTML','CSS','JAVSCRIPT','JQUERY','PHP','MYSQL']} 
                      date="June 01, 2020"
                      images={require('../styles/images/portfolio/ogm-fmon.png')} 
                      image_list={ogm}
                      links={{'admin':'https://3.16.45.71/','client':'https://3.16.45.71/'}}
                  />
                  </div>
                  
                </Grid>
                <Grid item xs={12} sm={4} >
                  <div>
                  <CardPortfolio 
                      title="ESN-News" 
                      description="ESN NEWS is a news blog for a television and radio station"
                      details="ESN News is a simple news blog for a television company. This also comes with a streaming platform for the Television station
                      The news blog comes with an administrator panel and allows users to update articles and add categories as well as advertise on the platform."
                      stack={['HTML','CSS','JAVSCRIPT','JQUERY','PHP','MYSQL']} 
                      date="June 01, 2020"
                      images={require('../styles/images/portfolio/esnnlmob.png')} 
                      image_list={esn_news}
                      links={{'admin':'https://3.16.45.71/','client':'https://3.16.45.71/'}}
                  />
                  </div>
                  
                </Grid>
               
                </Grid>

                </div>
              </Container>
              <div style={{position:'absolute'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,64L60,106.7C120,149,240,235,360,229.3C480,224,600,128,720,106.7C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

              </div>
            
        </div>
    
  );
}
export default Portfolio