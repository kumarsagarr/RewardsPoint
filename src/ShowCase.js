import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { makeAPIRequestCalls} from './Services/service'

const ShowCase = () =>{
    const [inputVal, setInputVal] = useState()
    const [value, setValue] = useState()
    const handleChange = (e) =>{
       const val = e.target.value
       setInputVal(val)
    }

    const handleClick =  async () =>{
        let rewardsValue = await makeAPIRequestCalls("subscribers", 'post', {val:inputVal});
        if(rewardsValue.status == 200){
            const {msg} = rewardsValue.data
            setValue(msg)
        }
    }

    return (
        <div>      
          <h1>Reward Points Calculator</h1>
          <Grid style={{margin:'20px', justifyContent:'center'}} container>
            <Grid item sx={8}>
           <TextField id="outlined-basic" style={{width:400}}  onBlur={handleChange} type='number'  label="Enter The Amount Spend" variant="outlined" />
           </Grid>
          </Grid>
          <Button onClick={handleClick}>Check Rewards</Button>
          <h1>Reward you recieve </h1> <span>{value}</span>
        </div>
    )
}

export default ShowCase