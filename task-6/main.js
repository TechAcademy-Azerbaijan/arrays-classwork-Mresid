const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let a = result.input.split(" ");
   let max = parseInt(a[0]);
   let min = parseInt(a[0]);
  for (let i = 0; i < a.length; i++) {
   if (parseInt(a[i]) > max) {
    max = (a[i])
   }if (parseInt(a[i])< min ) {
    min = (a[i]);
   }
    
  }
  console.log(min);
  console.log(max);
});
