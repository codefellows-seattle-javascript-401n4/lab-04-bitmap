#BITMAP-TRANSFORMERS
\n
# This assignment I built a Bitmap reader and transformer... It reads a Bitmap, runs three color transforms on the bitmap and then writes a new file.
# Test with mocha
\n

# **USAGE** 
---
```
  //In the directory where index.js, invoke with the parameters for scale(red, blue or green. default is red)
  $ node index.js <path_to_bmp_file> <transform_type> <color>

  //The result is generated in ./assets/newimg.bmp

  //Sample
  $ node index.js ./assets/bitmap.bmp scale red


```