const listingService = require('../services/listingService')
const path = require('path')


exports.createListing = async (req, res) =>{
    try {  

        const listing = await listingService.createListing(req.body);

        if (req.file) {
            listing.file = req.file.filename;
        }

        console.log(listing);
        console.log(req.file);
        
        res.status(201).json(listing);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

exports.getListings = async (req, res) => {
    try {
        const listing = await listingService.getListings();

        if (!listing) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

exports.getListingsById = async (req, res) => {
    try {
        const listing = await listingService.getListingsById(req.params.id);

        if (!listing) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

exports.updateListing = async (req, res) => {
    try {
        const listing = await listingService.updateListing(req.params.id, req.body);

        if (!listing) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}; 

exports.deleteListing = async (req, res) => {
    try {
        const listing = await listingService.deleteListing(req.params.id);
        
        if (!listing) {
            res.status(404).json({ error: 'Listing not found' });
        }

        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        
    }
};