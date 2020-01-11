const {SynonymsAttribute} = require('../model/synonyms-attribute');
const express = require('express');
const router = express.Router();
const synonymsAttributeDebug = require('debug')('app:synonymsAttribute');
const validateObjectId = require('../middleware/validateObjectId');


// GET ALL
router.get('/', async (req, res) => {
    synonymsAttributeDebug("GET ALL SynonymsAttribute");
    res.send(await SynonymsAttribute.find());
});

// GET BY HIERARCHY_CODE
router.post('/search/', async (req, res) => {
    synonymsAttributeDebug("Find by hierarchy_code");
    const synonymsAttribute = await SynonymsAttribute.find({hierarchy_code: req.body.hierarchy_code});
    if (!synonymsAttribute)
        return res.status(404).send({message: ' The synonymsAttribute with the giving hierarchy_code was not found'});
    res.send(synonymsAttribute);
});

// GET BY ID
router.get('/:id', validateObjectId, async (req, res) => {
    const synonymsAttribute = await SynonymsAttribute.findOne({_id: req.params.id});
    if (!synonymsAttribute)
        return res.status(404).send({message: ' The synonymsAttribute with the giving id was not found'});
    res.send(synonymsAttribute);
});

// Add new synonymsAttribute
router.post('/', async (req, res) => {
    synonymsAttributeDebug('POST:/synonymsAttribute');
    // create synonymsAttribute object
    const synonymsAttribute = new SynonymsAttribute(req.body);
    // save the synonymsAttribute in DB
    await synonymsAttribute.save();
    return res.send(synonymsAttribute);
});

// UPDATE the synonymsAttribute By ID
router.patch('/update/:id', validateObjectId, async (req, res) => {
    const synonymsAttribute = await SynonymsAttribute.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true});
    if (!synonymsAttribute)
        return res.status(404).send({message: 'The synonymsAttribute with the giving id was not found'});
    // update the synonymsAttribute
    return res.send(synonymsAttribute);
});

// DELETE BY ID
router.delete('/:id', validateObjectId, async (req, res) => {
    const synonymsAttribute = await SynonymsAttribute.deleteOne({_id: req.params.id});
    if (!synonymsAttribute)
        return res.status(404).send({message: ' The synonymsAttribute with the giving id was not found'});
    res.send(synonymsAttribute);
});

module.exports = router;
