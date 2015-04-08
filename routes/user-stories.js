var express = require('express');
var router = express.Router();
var _ = require('lodash');

var userStories = [
    {id: '1', title: 'foo', description: 'This is a foo user story'},
    {id: '2', title: 'bar', description: 'This is a bar user story'},
    {id: '3', title: 'baz', description: 'This is a baz user story'},
];

router.get('/', function (request, response, next) {
    response.send(userStories);
});

router.get('/:id', function (request, response, next) {
    response.send(_.find(userStories, function (userStory) {
        return userStory.id === request.params.id;
    }));
});

module.exports = router;
