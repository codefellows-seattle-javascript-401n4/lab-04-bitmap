![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 04: Bitmap Transformer
===


##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of paramiters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.

* file-worker.js exports the 'file' object which containts two accessible methods. 
  * the file.read method takes on argument -> the desired filepath of what you want to read. it checks if that file exists, and if it does it will return the data in that file as a buffer. if it doesn't exist it will console.log that it doesn't exists and return null
  * the file.write method takes two arguments -> the data you wish to save fisrt, and second it takes the desired file path to be saved in. 

* transformer.js exports one object with one method. 
  * the .black() method takes in one argument. that would be the entire data buffer of an image. it will then turn all the color's in the pallette to black and return that new buffer

* index.js contains the transformBitmap function which takes two 3 arguments
  * the first argumen being the filepath of the image you wish to transform
  * second argument is the desired filepath/name of the altered image that you wish to save
  * the third argument is the desired transform method you want to apply (the only one there is right now is everything to black...lame i know)

* running node index.js from the /lib directory will automaticall transform the bitmap.bm and house.bmp files to all black and save them as bitmapTest.bmp and houseTest.bmp


