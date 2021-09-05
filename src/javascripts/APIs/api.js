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
const myData = { id: 1 };

const option = {
  method: "GET",
  headers: {
    Authorization: "KakaoAK 0f7acd5ca96b1d76578d02adc4161263"
  },
};

  const serviceKey = "v0Xi5lEsrLZd5JFZMKiz77Ps1LszbA9CsAOfAXjQTTOBDJhwKoyLwB5mbO0RcRv0gAIh2RpJYkNaelVmlE5zYg%3D%3D";
  const url ="https://dapi.kakao.com/v3/search/book?target=title"
  const api = async (query = "") => {
  
    try {
      console.log(`${url}&query=${query}`);
      const response = await fetch(`${url}&query=${query}`, option);
      // const responseBody = await response.text();
      const responseBody = await response.text();
    
      console.log(responseBody)
  
      return responseBody;
    } catch (error) {
    // window.alert("API 서버에 문제가 발생했습니다.");
    }};

  export {
    api,
  };



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