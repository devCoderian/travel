// const convert = require('xml-js');
import  { convert}  from'xml-js';
import  { request } from 'request';
// import  * from 'xml-js';
// const serviceKey = "v0Xi5lEsrLZd5JFZMKiz77Ps1LszbA9CsAOfAXjQTTOBDJhwKoyLwB5mbO0RcRv0gAIh2RpJYkNaelVmlE5zYg%3D%3D";
// const url ="http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?serviceKey="
//     +serviceKey+"&MobileApp=AppTest&MobileOS=ETC&numOfRows=9999&listYN=Y&arrange=A&contentTypeId=12";
// const api = async (keyword = "") => {

//   try {
//     console.log(`${url}&keyword=${keyword}`);
//     const response = await fetch(`${url}&keyword=${keyword}`);
//     // const responseBody = await response.text();
//     const responseBody = await response.text();
//     const result = convert.xml2json(responseBody, {compact: true, spaces: 4});
//     // var result1 = convert.xml2json(responseBody, {compact: true, spaces: 4});
//     console.log(result)

//     return responseBody;
//   } catch (error) {
//   // window.alert("API 서버에 문제가 발생했습니다.");
//   }
//   };




const SERVICE_KEY = "v0Xi5lEsrLZd5JFZMKiz77Ps1LszbA9CsAOfAXjQTTOBDJhwKoyLwB5mbO0RcRv0gAIh2RpJYkNaelVmlE5zYg%3D%3D";
const requestUrl ="http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?serviceKey="
    +SERVICE_KEY+"&MobileApp=AppTest&MobileOS=ETC&numOfRows=9999&listYN=Y&arrange=A&contentTypeId=12";

request.get(requestUrl, (err,res,body) =>{
    if(err){
        console.log(`err => ${err}`)
    }
    else {
        if(res.statusCode == 200){
            var result = body
            console.log(`body data => ${result}`)
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
            console.log(`xml to json => ${xmlToJson}`)

        }

    }
})




  // console.log('실행');
    // try {
    //     console.log(`${url}&keyword=${keyword}`);
    //   const response = await fetch(`${url}&keyword=${keyword}`);
    //   const responseBody = await response.text();
    //   var result1 = convert.xml2json(responseBody, {compact: true, spaces: 4});
    //   console.log(result1)
    //   return responseBody;
    // } catch (error) {
    //   // window.alert("API 서버에 문제가 발생했습니다.");
    // }