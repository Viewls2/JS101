const rows =6;
for (let i=1;i< rows ; i++) {
    console.log('*'.padEnd(5,'*').slice(-i));
}


// const rows = 5;             
// const pattern = Array.from({ length: rows }, (_, i) => '* '.repeat(i + 1));

// pattern.forEach(row => {
//   console.log(row);
// });
