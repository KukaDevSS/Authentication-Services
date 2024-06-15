const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listing_controller');
const upload = require('../middlewares/upload');


router.post('/create', upload.single('avatar'), listingController.createListing);
router.get('/', listingController.getListings);
router.get('/:id', listingController.getListingsById);
router.put('/:id', listingController.updateListing);
router.delete('/:id', listingController.deleteListing);

module.exports = router;