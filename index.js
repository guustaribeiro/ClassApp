const csv = require('csv-parser');
const fs = require('fs');

const allRow = [];

fs.createReadStream('input.csv')
.pipe(
    csv({
      mapHeaders: ({ header, index }) => {
          if(header === 'classe' && index === 2) {
                return 'classe1';
          } else {
                return header;
          }
    }
    })
  )
.on('data', data => {
    allRow.push(data);
    if(data.eid === '1234'){
        const classes = data['classe1'] + ',' + data['classe']
        console.log(classes)
        
        allRow[0].classes = classes
        //console.log(allRow[0].classes)
    }
})
.on('end', data => {
console.log(allRow[0])
});
    
/*let csvToJson = require('convert-csv-to-json');

let fileInputName = 'input.csv'; 
let fileOutputName = 'output.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);*/

