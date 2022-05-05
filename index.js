// console.log('requesting...')
// const p = new Promise(function(resolve){
//    setTimeout(() => {
//       const backend=[1,2,3]
//       console.log('first')
//       resolve(backend)
//    }, 2500);
// });
// p.then(
//    (data)=>{
//       const newconst={
//          modfied:true,
//          data,
//       }
//       return new Promise(function(resolve){
//          setTimeout(() => {
//             resolve(newconst)
//          }, 5000);
//       })
//    }
// ).then(
//    (r)=>{
//       console.log('second promise succeeded with flag modfied:', r)
//    }
// )
const sleep = (ms) =>{
   return new Promise(
      (resolve)=>{
         setTimeout(()=>resolve(),ms)
      }
   )
}
sleep(2000).then(()=>console.log('after 2 sec'))
