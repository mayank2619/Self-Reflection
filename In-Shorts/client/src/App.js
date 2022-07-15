import {Box,makeStyles} from '@material-ui/core'

import Header from './components/Header.jsx'
import { InfoHeader } from './components/InfoHeader.jsx';
const useStyles=makeStyles({
  container:{
    marginTop:110,
    margin:'0 auto',
    width:'59%'
  }
})
function App() {
  const classes= useStyles()
  return (
    
    <Box >
      <Header />
      
      <Box className={classes.container}>
      <InfoHeader/>
      </Box>
      </Box>
  
  );
}

export default App;
