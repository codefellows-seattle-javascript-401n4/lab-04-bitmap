'use script';

var Jimp = require("jimp");

// open a file called "blackmage.jpg" 
Jimp.read("../asset/blackmage.jpg", function (err, blackmage) {
   if (err) throw err;
    blackmage.write("../asset/blackmage.bmp"); // save as "blackmage.bmp" 
});

// open a file called "whitemage.jpg" 
Jimp.read("../asset/whitemage.jpg", function (err, whitemage) {
    if (err) throw err;
     whitemage.write("../asset/whitemage.bmp"); // save as "whitemage.bmp"
 });

 // open a file called "redmage.jpg" 
Jimp.read("../asset/redmage.jpg", function (err, redmage) {
    if (err) throw err;
    redmage.write("../asset/redmage.bmp"); // save as "redmage.bmp"
 });

 // open a file called "warrior.jpg" 
Jimp.read("../asset/warrior.jpg", function (err, warrior) {
    if (err) throw err;
    warrior.write("../asset/warrior.bmp"); // save as "warrior.bmp" 
 });