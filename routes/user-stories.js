var express = require('express');
var router = express.Router();
var _ = require('lodash');

var userStories = [];

router.get('/', function (request, response, next) {
    response.send(userStories);
});

router.get('/:id', function (request, response, next) {
    response.send(_.find(userStories, function (userStory) {
        return userStory.id === request.params.id;
    }));
});

router.post('/', function (request, response, next) {
    console.log('creating new user story');
    if (request.body) {
        userStories.push(request.body);
        response.send(200);
    }
});

module.exports = router;
