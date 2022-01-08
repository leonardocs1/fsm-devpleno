const Jimp = require('jimp')

Jimp.read('leonardo-costa.png', (err, image) => {
  image.
    cover(100, 50)
    .greyscale()
    .contrast(0.5)
    .write('leonardo-100X100-greyscale-constrast-blur-cover.png')
})