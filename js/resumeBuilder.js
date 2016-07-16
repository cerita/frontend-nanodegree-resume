var formattedName = HTMLheaderName.replace("%data%", "Cerita Kelly");
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);





var bio = {
    "name" : "Cerita",
    "role" : "Web Developer",
    "contact" : {
        "email" : "ceritakelly@gmail.com",
        "mobile" : "773-349-1918"   ,
        "github" : "cerita",
        "location" : "Austin"
    },
    "welcomeMsg" : "Hello world!",
    "skills" : ['awesomeness', 'sarcasm', 'potato'],
    "bioPic" : "images/fry.jpg"
};

$("#main").append(bio);


var projects = {
    "project": [
        {
            "title":"",
            "date":"",
            "desc":"",
            "images": [""]
        }
    ]
}

var work = {
    "jobs": [{
        "title": "Web Coordinator",
        "employer": "",
        "dates": "",
        "location": "Austin, TX",
        "desc": "Stuff and things"
    }, {
        "title": "Technology Support Specialist",
        "employer": "CCSD 146",
        "dates": "2012-2015",
        "location": "Chicago, IL",
        "desc": "Stuff and things"
    }, {
        "title": "Web Coordinator",
        "employer": "",
        "dates": "",
        "location": "Austin, TX",
        "desc": "Stuff and things"
    }]
}
    

var education = {
    "schools": [
        {
            "name":"Saint Xavier University",
            "city":"Chicago, IL, US",
            "degree":"BA",
            "major":"Computer Science"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school":"Udacity",
            "dates":"2016",
            "url":"http://udacity.com"
        }
    ]
};



$("#main").append(work["position"]);
$("#main").append(education.school);













