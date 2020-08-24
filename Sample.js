import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      fontSize:13,
      
    },
    
  }));
  const theme = createMuiTheme({
    palette: {
      primary: green,
    
    },
  });
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];
  
function Sample() {
    const classes = useStyles();
    return (
        <div style={{backgroundColor:'#E8E9E9'}}>
          <div>
              <h2 style={{paddingTop:'1em'}}>NevBank
            <SettingsIcon style={{marginLeft:'85%'}}></SettingsIcon></h2>
            
          </div>
         <div>
              <Grid ls={12}  container direction="flex" style={{paddingTop:'1em',paddingLeft:'1em'}}>
              <Grid ls={8} >
                <Paper
                  elevation={3}
                  className="cardd"
                  style={{ borderRadius: 10, paddingTop: 20,paddingBottom:20,paddingRight:20,paddingLeft:20 }}
                >
                    <Grid ls={12} style={{display:'flex'}}>
                      <Grid ls={10}>
                        <div style={{display:'flex'}}>
                          <p
                              style={{
                              fontSize:13,
                              marginLeft: 10,
                              textAlign: "left",
                              marginTop:2
                              }}
                          >
                              Main Account
                          </p>
                        </div>
                        <h3 style={{
                            marginLeft: 10,
                            textAlign: "left",
                          }}><h2 style={{margintop:2}}>NevBank Savings Account</h2>
                        </h3>
                        <p
                            style={{
                            fontSize:13,
                            marginLeft: 10,
                            textAlign: "left",
                            marginTop:2
                            }}
                        >
                            82 1240 7793 7644 3667 0032 9448 
                        </p>
                              
                          <ThemeProvider theme={theme} >
                            <Button variant="contained" color="primary" className={classes.margin}
                              style={{fontSize:'13',fontColor:'white'}}
                              >
                              Transfer Money
                            </Button>
                          </ThemeProvider>
                          <Button variant="contained"
                          style={{width:180,height:'17%'}}>Link Accounts</Button>
                      </Grid>
                    <Grid ls={2}>
                    <p
                        style={{
                        fontSize:13,
                        textAlign:'right',
                        marginLeft:480
                        }}
                    >
                        Available Funds
                    </p>
                    <h2
                        style={{
                        textAlign:'right',
                        marginTop:69,
                        }}
                    ><b>
                        68.789,56 $
                    </b>
                    </h2>
                    </Grid>
                    </Grid>
                </Paper>
              </Grid>
            <Grid ls={2} >
              <div style={{paddingLeft:'10%'}}>
              <Paper
                elevation={3}
                className="green"
                style={{ borderRadius: 10, padding: 20 , backgroundColor:'#468557'}}
              >
                <h3 style={{ textAlign: "left",color: "white",marginTop:3}}>Define Standing Order</h3>
                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678120-calendar-clock-512.png"
                  style={{
                    fontSize: 20,
                    marginLeft: "70%",
                    marginBottom: 6,
                    width:130,
                    height:120
                  }}
                ></img>
                <p
                  style={{
                    fontSize: 13,
                    marginTop: -150,
                    marginLeft: 10,
                    textAlign: "left",
                    color:'white',
                    marginBottom:32
                  }}
                >
                 We help you remember about  recurring payments
                 <p>for the fixed price .Define once standing order and </p>
                 <p>bank will take care of your regular transfer.</p>               
                 </p>
                
                <Button variant="contained">Define Standing Order</Button>
              </Paper>
              </div>
            </Grid>
            </Grid>
              </div>

            <div>
            <Grid ls={12} md={12} xs={12} sm={12} container direction="flex">
          <Grid ls={3} md={3} xm={1} xs={12} sm={12} style={{}}>
            <Paper
              elevation={3}
              className="card1"
              style={{ borderRadius: 10, padding: 20 }}
            >
              <h3 style={{ textAlign: "left"}}>Santender</h3>
              <img src="santenderrrr.png"
                style={{
                  fontSize: 55,
                  marginLeft: "60%",
                  marginBottom: 4,
                  width:50
              
                }}
              ></img>
              <p
                style={{
                  fontSize: 20,
                  marginTop: -70,
                  marginLeft: 10,
                  textAlign: "left",
                }}
              >
                88 **** 9448
              
              </p>
              <h2 style={{marginLeft:10}}>12.220,65 $</h2>
            </Paper>
          </Grid>
          <Grid ls={3} md={3} xm={1} xs={12} sm={12}
          style={{paddingLeft:'-120px'}}>
            <Paper
              elevation={3}
              className="card1"
              style={{ borderRadius: 10, padding: 20 }}
            >
              <h3 style={{ textAlign: "left"}}>CityBank</h3>
              <img src="citybank.png"
                 style={{
                  fontSize: 55,
                  marginLeft: "70%",
                  marginBottom: 4,
                  width:50
                }}
              ></img>
              <p
                style={{
                  fontSize: 20,
                  marginTop: -50,
                  marginLeft: 10,
                  textAlign: "left",
                }}
              >
              45 **** 8854
              </p>
              <h2 style={{marginLeft:10}}>25.070,65 $</h2>
            </Paper>
          </Grid>
          <Grid ls={3} md={3} xm={1} xs={12} sm={12}>
            <Paper
              elevation={3}
              className="card1"
              style={{ borderRadius: 10, padding: 20 }}
            >
              <h3 style={{ textAlign: "left"}}>Deutsche Bank</h3>
              <img src="deutsche.png"
                style={{
                  fontSize: 55,
                  marginLeft: "70%",
                  marginBottom: 4,
                  width:50
                }}
              ></img>
              <p
                style={{
                  fontSize: 20,
                  marginTop: -60,
                  marginLeft: 10,
                  textAlign: "left",
                }}
              >
             67 **** 6821
              </p>
              <h2 
              style={{ marginLeft:10  }}> 570,00 $</h2>
          </Paper>
          </Grid>
          <Grid ls={3} md={3} xm={1} xs={12} sm={12}>
            <Paper
              elevation={3}
              className="card1"
              style={{ borderRadius: 10, padding: 20 }}
            >
              <h3 style={{ textAlign: "left"}}>Credit Agricole</h3>
              <img src="agricole.png"
             
             style={{
              fontSize: 55,
              marginLeft: "70%",
              marginBottom: 5,
             width:70,
            }}
              ></img>
           
              <p
                style={{
                  fontSize: 20,
                  marginTop: -50,
                  marginLeft: 10,
                  textAlign: "left",
                }}
              >
              55 **** 7655  </p>
           
              <h2  style={{marginLeft:10}}>2.680,50 $ </h2>
            s</Paper>
          </Grid>
          </Grid>
            </div>
            <div style={{paddingLeft:'1em'}}>
              <Grid ls={12} style={{display: 'flex'}}>
              <Grid ls={8} className='graph'>
              <TableContainer component={Paper} style={{padding:10}}>
      <Table className={classes.table} aria-label="caption table">
        <caption><center><b>See more</b></center></caption>
        <TableHead>
          <TableRow>
          <TableCell><h2><b>Lastest Transections</b></h2></TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell><b>Today</b></TableCell>
            <TableCell align="right">starbucks cafe</TableCell>
            <TableCell align="right" style={{Color:'green'}}>card Payment</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

              </Grid>
              <Grid ls={4} style={{paddingLeft:'2em'}}>
               
                  <Paper elevation={3} className="cardsss" style={{borderRadius:10 }}>
                      <h1>fjdbjgb</h1>

                  </Paper>
                
              </Grid>
              </Grid>
            </div>
            &nbsp;
        </div>
    )
}

export default Sample