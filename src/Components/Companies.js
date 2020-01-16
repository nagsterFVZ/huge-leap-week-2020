import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class Companies extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className='companies'>
        <Grid container spacing={3} className='gridCompanies' alignItems="center" justify="center">
            <Grid item xs={6} lg={2}>
                <a href='https://www.capgemini.com/'><img src="./assets/images/companies/cap.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://www.cytosmart.com/'><img src="./assets/images/companies/cyto.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://www.jwplayer.com/'><img src="./assets/images/companies/jwplayer.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://prodrive-technologies.com/'><img src="./assets/images/companies/prodrive.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://www.sioux.eu/'><img src="./assets/images/companies/sioux.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://www.sogeti.nl/'><img src="./assets/images/companies/sogeti.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://www.devolksbank.nl/'><img src="./assets/images/companies/volksbank.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://wolfpackit.nl/'><img src="./assets/images/companies/wolfpack.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://yellowtail.nl/'><img src="./assets/images/companies/yellowtail.png" alt="" className='compLogo'/></a>
            </Grid>
            <Grid item xs={6} lg={2}>
                <a href='https://www.fujitsu.com/global/'><img src="./assets/images/companies/fujitsu.png" alt="" className='compLogo'/></a>
            </Grid>
        </Grid>
    </div>
  )
}
}

