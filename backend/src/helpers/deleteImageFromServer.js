const fs = require('fs');
const path = require('path');

const deleteImageFromServer = (oldImage) => {
  const lastImageName = oldImage.split('uploads')[1];
  const oldImagePath = path.join(__dirname, '../../', 'uploads', lastImageName);
  try {
    fs.unlink(oldImagePath, function (err) {});
  } catch (err) {
    console.log(err);
  }
};

module.exports = deleteImageFromServer;
