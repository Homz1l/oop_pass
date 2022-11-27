const fs = require('fs'); //เอาไว้อ่านไฟล์ มาจาก file system มันก็คือ import แบบหนึ่ง
const express = require('express'); //เรียกใช้ express
const app = express(); // ประกาศตัวแปลเรียกใช้ express
//กำหนดว่า เราเข้าไปใน part ที่เป็นลิ้งนี้ ก็จะเข้ามาในลิ้งนี้ จะส่งคำว่า Hello , express เข้าในเว้บ backend
app.get('/',async function(req, res){
    var origin = req.params; 
    const results = [];
    fs.createReadStream("./train_study_level.csv")
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.send(results)
      console.log(results.length);}); 
    
})


const PORT = process.env.PORT || 5000; // ประกาศตัวแปล , เอาเลข 5000 ที่เป็น str มาต่อตูด 
app.listen(PORT , () => console.log(` sever is runing on port ${PORT}`));  // เหมือนการเรียกใช้ port 5000 (เรากำหนด)จากบรรทัดที่ 6
const cors = require("cors"); 
// const { SSL_OP_EPHEMERAL_RSA } = require('constants');

const corsOptions = { origin:'*', credentials:true, }
app.use(cors(corsOptions)) 
const csv = require('csv-parser')
const results = [];
