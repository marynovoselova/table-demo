const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('./../src/db/models/users');
const consts = require("../src/consts");

router.get('/', async function (req, res, next) {
    try {
        const {page = 1, pageSize = consts.DEFAULT_USERS_PAGE_SIZE} = req.query;
        const allUsers = await UserModel.find({},
            [],
            {
                skip: page * pageSize,
                limit: parseInt(pageSize, 10),
            })
            .sort({updatedAt: -1})
        res.json(allUsers);
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

router.get('/search', async function (req, res) {
    try {
        const {
            page = 1,
            pageSize = consts.DEFAULT_USERS_PAGE_SIZE,
            firstName, lastName, email, phone,
        } = req.query;
        const query = {};
        if (firstName) {
            query.firstName = firstName;
        }
        if (lastName) {
            query.lastName = lastName;
        }
        if (email) {
            query.email = email;
        }
        if (phone) {
            query.phone = phone;
        }
        const allUsers = await UserModel.find({query},
            [],
            {
                skip: page * pageSize,
                limit: parseInt(pageSize, 10),
            })
            .sort({updatedAt: -1});
        res.json(allUsers);
    } catch (e) {
        res.status(500).send(e);
    }
});


router.post('/', async function (req, res) {
    try {
        const newUser = new UserModel(req.body);
        newUser.save();
        res.json(newUser);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
