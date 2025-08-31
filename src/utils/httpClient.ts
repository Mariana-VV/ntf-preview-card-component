// export function getData<Item>(): Promise<Item> {
//   const headers = {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET",
//     "Access-Control-Allow-Credentials": "true",
//   };

//   return fetch("http://localhost:5173/api/data.json", {
//     mode: "no-cors",
//     method: "GET",
//     headers: headers,
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// }
