const fs = require('fs');

//Dosya Oluşturma

// fs.writeFile('./Odev_4/employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
//     if (err) console.log(err);
//     console.log('Dosya oluşturuldu.');
// })

// Dosyayı Okuma

// fs.readFile('employees.json', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log('Datamız: ',data);
// })

// Dosyayı Güncelleme

// fs.appendFile('employees.json', '{"name":"Employee 2 Name", "salary": 3000}', 'utf8', (err)=> {
//     if (err) console.log(err);
//     console.log('Dosyaya ekleme yapıldı.');
// })

// Dosyayı Silme

// fs.unlink('./Odev_4/employees.json', (err) => {
//     if (err) console.log(err);
//     console.log('Dosya silindi.');
// })