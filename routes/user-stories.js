var express = require('express');
var router = express.Router();
var _ = require('lodash');

var userStories = [];

router.get('/', function (request, response, next) {
    response.send(userStories);
});

router.get('/:id', function (request, response, next) {
    response.send(_.find(userStories, function (userStory) {
        var id = parseInt(request.params.id);
        return userStory.id === id;
    }));
});

router.post('/', function (request, response, next) {
    if (request.body) {
        var userStory = request.body;
        userStory.id = userStories.length;
        userStories.push(userStory);
        response.send(200);
    }
});

module.exports = router;
