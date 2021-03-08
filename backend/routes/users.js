const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('./../src/db/models/users');
const consts = require("../src/consts");

router.get('/', async function (req, res, next) {
    try {
        const {page = 1, pageSize = consts.DEFAULT_USERS_PAGE_SIZE, searchText} = req.query;
        const searchObject = searchText
            ? {
                $or: [
                    {firstName: {$regex: searchText, $options: "i"}},
                    {lastName: {$regex: searchText, $options: "i"}},
                    {email: {$regex: searchText, $options: "i"}},
                    {phone: {$regex: searchText, $options: "i"}},
                ]
            }
            : {};
        const users = await UserModel.find(searchObject, [], {
            skip: page * pageSize, limit: parseInt(pageSize, 10),
        }).sort({updatedAt: -1})
        const total = await UserModel.count(searchObject);
        res.json({page, pageSize, total, data: users});
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/:id', async function (req, res) {
    try {
        const user = await UserModel.find({_id: req.params.id});
        res.json(user[0]);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.post('/', async function (req, res) {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
