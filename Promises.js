
//1.

console.log('person1: shows ticket');
console.log('person2: shows ticket');
const premovie = async() => {
    const promiseWifeBringingTicket = new  Promise((resolve , reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
   });

   const getpopcorn = new Promise((resolve , reject )=> resolve(`popcorn`) );
   const getbutter = new Promise((resolve , reject )=> resolve(`butter`) );
   const getcoldrink = new Promise((resolve , reject )=> resolve(`coldrink`) );
   let ticket = await promiseWifeBringingTicket;
     
   let = await Promise.all([getpopcorn,getbutter,getcoldrink])
   console.log(`${popcorn},${butter},${coldrink}`);
      
   return ticket;
}

premovie().then((m)=> console.log(`person3 : shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');



//2.

