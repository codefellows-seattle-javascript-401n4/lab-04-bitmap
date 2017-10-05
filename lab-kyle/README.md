Worked on the color-shift module with James and had some slack help from David for my invert module.

newBitmap(transformFunction, newImgUrl):

This will take 2 arguments 1 being the function that you wish to use to transform the image and the next is a url for the new image you are about to create. And it will return the new image in the url you gave it.


readFile(oldImg):

This will take in 1 argument which is the url of the bitmap image you wish to read. It will return logs to the console of pertinent information on the image you wish to transform as well as the buffer for that image.


writeFile(newImgUrl, transformFunction):

This will take 2 arguments the first being the url of the image you wish to create and the second being the function you wish to perform on the image. It will return the new image in the place you designated.


invert(buffer, palStar, palEnd):

This will take 3 arguments the first being the buffer(the image you read), the second will be the indice of the start of the pallet in the buffer array. You get this information from the 'readFile()'. The last one is the indice of the end of the pallete. It will take the pallete and obtain the opposite color of each color in the image and return the new pallete.


colorShift(buffer, palStart, palEnd, removeIndex):

This first 3 arguments this takes are the exact same as invert(), the fourth one is the indice of the pallete you wish to remove and add to the end. It will then return the new buffer. 
