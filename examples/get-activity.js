/**
    To run from command line:

    node get-activity username password projectId
*/
var tracker  = require("../index.js"),
    username = process.argv[2] || 'fake_user',
    password = process.argv[3] || 'fake_password',
    projectId = process.argv[4];

tracker.getToken(username, password, function(err, token) {

    if(err){
        console.error("Could not retrieve token");
        console.log(err);
    }
    else {
        var client = new tracker.Client({trackerToken:token});
        
        client.project(projectId).activity.all(function(error, activity) {
            if (error) {
                console.log(error);
            }
            else {
                console.log(activity);
            }
        });
    }
});