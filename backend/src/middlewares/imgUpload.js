const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');
const {
  errors: { HttpErrors },
} = require('../helpers');

const { BASE_URL } = process.env;

const FILE_MAX_SIZE = 8388608;
const VALID_MIME_TYPES = ['image/jpg', 'image/jpeg', 'image/png'];

const invalidMimeTypesFilter = (req, file, cb) => {
  if (!VALID_MIME_TYPES.includes(file.mimetype)) {
    cb(
      HttpErrors(
        400,
        `Invalid file mimetype - ${
          file.mimetype
        }. Mimetype must be one of: ${VALID_MIME_TYPES.join(', ')}.`
      )
    );
  } else {
    cb(null, true);
  }
};

const storage = multer.diskStorage({
  destination: 'uploads/', // Папка, куда будут сохраняться загруженные изображения

  filename: (req, file, cb) => {
    const parsedOriginalName = file.originalname.split('.');
    const extention = parsedOriginalName.pop();
    const OriginalNameWithoutExtention = parsedOriginalName.join('.');
    const fileName = `${OriginalNameWithoutExtention}_${Date.now()}.${extention}`;
    cb(null, fileName); // Генерация уникального имени файла
  },
});

// module.exports.upload = multer({
//   storage,
//   limits: {
//     fileSize: FILE_MAX_SIZE,
//   },
//   fileFilter: invalidMimeTypesFilter,
// });

module.exports = multer({
  storage,
  limits: {
    fileSize: FILE_MAX_SIZE,
  },
  fileFilter: invalidMimeTypesFilter,
});
