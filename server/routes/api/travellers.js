const express = require('express');
const route = express.Router();
const cors = require('cors')
const Travel = require('../../models/Travel');

// @route   GET api/travellers/:searchTerm 
// @desc    Get all travellers
route.get(
  '/:search_term',
  cors(),
  async (req, res) => {
    try {
      const travels = await Travel.find(
        {
          "$or": [
            {
              "fromName": 
                {
                  "$regex": req.params.search_term,
                  "$options": "i",
                },
            },
            {
              "toName": 
                {
                  "$regex": req.params.search_term,
                  "$options": "i",
                }
            }
          ]
        }
      );
      
      return res.json(travels);
    } catch (error) {
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/travellers
// @desc    Get all travellers
route.get(
  '/',
  cors(),
  async (req, res) => {
    try {
      const travels = await Travel.find();

      return res.json(travels);
    } catch (error) {
      res.status(500).send('Server error');
    }
  }
);

module.exports = route;
