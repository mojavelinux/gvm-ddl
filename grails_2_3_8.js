//push new version
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "2.3.8", url: "http://dist.springframework.org.s3.amazonaws.com/release/GRAILS/grails-2.3.8.zip"}}});

//update default
db.candidates.update({candidate:"grails"}, {$set :{default:"2.3.8"}});
