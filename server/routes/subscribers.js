const express = require('express')
const router = express.Router()

router.get('/test', (req, res)=>{
   res.send('Hey Hi Looks Cool')
})

router.post('/', (req, res) => {
    const {val} = req.body
        let checkval = 50
        let result = 0
        let i = 1
       while(checkval < val){
           result = result + (val - checkval)
           i = i+1
           checkval = checkval * i
       }
    return res.status(200).json({msg: result})
})


module.exports = router;
