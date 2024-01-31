const multer =require( "multer");
// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) =>
    {
        cb(null, 'uploads/')
        // It specifies the location on the server's file system where the files will be saved.
    },
    filename: (req, file, cb) =>
    {
        cb(null,  Date.now() +'_'+ file.originalname)
    }

});

const multipleupload = multer({ storage: storage })
module.exports=multipleupload
