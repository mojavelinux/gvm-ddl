//push new version
db.candidates.update({candidate:"lazybones"}, {"$push": {versions: {version: "0.7", url: "http://dl.bintray.com/pledbrook/lazybones-templates/lazybones-0.7.zip"}}});

//update default
db.candidates.update({candidate:"lazybones"}, {$set :{default:"0.7"}});
