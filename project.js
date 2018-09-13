project = {
  committee: ["Stella", "Salma", "Kai"],
  title: "Very Important Project",
  dueDate : "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}

// for each item in the steps array (inside the project hash)
// i want to add a person key, which uses one of the three
// committee values an equal amount of times
//
// add a person key with one name
//
// project.steps["person"] = committee[0, 1, 2]
//
// one loop!
//
// projects.for (var i = 0; i < committee.length; i++) {
//  committee[i]{
//    steps.forEach(function(i){
//      committee.push
//    })
//  }
// }

project.steps.forEach (function(task, i){
  task.name = project.committee[i % project.committee.length]
});
console.log(project.steps);
