const multer = require("multer");
const Property = require(".././models/propertyModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./allFactory");
const AppError = require("./../utils/appError");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "backend/images/properties");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `property-test-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const multi_upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
}).array("images", 10);

exports.uploadMultiplePropertyImages = async (req, res) => {
  multi_upload(req, res, async function (err) {
    //multer error
    if (err instanceof multer.MulterError) {
      console.log(err);
      res
        .status(500)
        .send({
          error: { msg: `multer uploading error: ${err.message}` },
        })
        .end();
      return;
    } else if (err) {
      //unknown error
      if (err.name == "ExtensionError") {
        res
          .status(413)
          .send({ error: { msg: `${err.message}` } })
          .end();
      } else {
        res
          .status(500)
          .send({ error: { msg: `unknown uploading error: ${err.message}` } })
          .end();
      }
      return;
    }
    let imagesPath = [];
    for (let file of req.files) {
      imagesPath.push("/images/properties/" + file.filename);
    }
    try {
      //updating the images of the property
      await Property.findByIdAndUpdate(req.params.propertyId, {
        images: imagesPath,
      });
    } catch (error) {}
    res.status(200).send("file uploaded");
  });
};

//************************************************************************************************ */

exports.aliasRecentProperties = (req, res, next) => {
  req.query.limit = "50";
  req.query.sort = "-createdAt";
  next();
};

exports.getAllProperties = factory.getAll(Property);
exports.getProperty = factory.getOne(Property);
exports.createProperty = factory.createOne(Property);
exports.updateProperty = factory.updateOne(Property);
exports.deleteProperty = factory.deleteOne(Property);

// /properties/:distance/center/:latlng/unit/:unit/
// /properties/233/center/34.111745,-118.113491/unit/mi
exports.getPropertiesWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(",");

  const radius = unit === "mi" ? distance / 3963.2 : distance / 6378.1;

  if (!lat || !lng) {
    next(
      new AppError(
        "Please provide latitute and longitude in the format lat,lng.",
        400
      )
    );
  }

  const properties = await Property.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    status: "success",
    results: properties.length,
    data: {
      data: properties,
    },
  });
});
