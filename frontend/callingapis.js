const axios=require('axios')

let data={
    
        companyname: "agile labs",
        companylogo: "https://media.licdn.com/dms/image/v2/D560BAQF6HYG6dvSK0Q/company-logo_100_100/company-logo_100_100/0/1683088716419/hackajob_logo?e=1749081600&v=beta&t=aWCyAXZTmyvWtQ042o5sTj_LUplBOkT3Tvhy9fdPtLE",
        jobrole: "java full stack",
        expectedpackage: 7.0,
        location: "hyd,india",
        contactnumber: 9008007007,
        reqhigherdegree: "masters or graduate",
        exp: "0-2 years",
        reqskills:"java,collections,jdbc,jsp,hibernate,spring framework,spring boot,microservices,react js,spring data,sql,mongodb",
        lastdaytoapply: "2025-04-15T23:59:59.999Z"
        
      }
      


axios.post('http://localhost:2004/api/jobs/67e7c18c74a50725bdcbf75d',data)
.then((res)=>console.log(res.data,"status code:"+res.status))
.catch((err)=>console.log(err))