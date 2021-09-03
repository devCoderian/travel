var convert = require('xml-js');
// import  * from 'xml-js';
const serviceKey = "v0Xi5lEsrLZd5JFZMKiz77Ps1LszbA9CsAOfAXjQTTOBDJhwKoyLwB5mbO0RcRv0gAIh2RpJYkNaelVmlE5zYg%3D%3D";
const url ="http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?serviceKey="
    +serviceKey+"&MobileApp=AppTest&MobileOS=ETC&numOfRows=9999&listYN=Y&arrange=A&contentTypeId=12";
const api = async (keyword = "") => {
 
  var xml =
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<note importance="high" logged="true">' +
  '    <title>Happy</title>' +
  '    <todo>Work</todo>' +
  '    <todo>Play</todo>' +
  '</note>';
  var result1 = xml2json(xml, {compact: true, spaces: 4});
  var result2 = xml2json(xml, {compact: false, spaces: 4});
  console.log(result1, '\n', result2);
  };
  
  export {
    api,
  };



  // console.log('실행');
  //   try {
  //       console.log(`${url}&keyword=${keyword}`);
  //     const response = await fetch(`${url}&keyword=${keyword}`);
  //     const responseBody = await response.text();
  //     var result1 = convert.xml2json(responseBody, {compact: true, spaces: 4});
  //     console.log(result1)
  //     return responseBody;
  //   } catch (error) {
  //     // window.alert("API 서버에 문제가 발생했습니다.");
  //   }