const alertMe =()=>{
    
    Swal.fire(
        'Hey, Enamul!',
        'Do not give up. keep going!',
        'success'
      );
};

const clickMe=()=>{
    alert('Hey,Enamul.Do not give up.Keep going');
};

const clickYou =()=>{
   const result = confirm('Hey, Enamul work hard and hard');
   console.log(result);
   if(result == true){
    Swal.fire(
        'Hey, Enamul!',
        'Do not give up. keep going!',
        'success'
      );
   }else{
    alert('Do not give up!!');
   }
};

const warnMe =()=>{
 const result1 =  prompt('Hey Enamul, work hard and hard and do not give up');
 console.log(result1);
 if(result1 === null){
    alert('Yes, I can');
 }else{
    console.log('nooooooooo..........');
 }
   
};

