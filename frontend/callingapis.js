const axios=require('axios')

let data={
    username:"supriya",
    password:"priya@123",
    email:"supriya_priya@email.com",
    mobile:989898989
}

axios.put('http://localhost:2004/api/updateuser/67e63ab25dd8f223bb547c26',data)
.then((res)=>console.log(res.data,"status code:"+res.status))
.catch((err)=>console.log(err))