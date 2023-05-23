const Express = require('./ServiceHost').Express;
var expressApp = require('./ServiceHost').expressApp;

const cors = require('cors');

expressApp.get('/', (req, res) => {
    res.status(200).send("Hello World");

})

// Import Routes  
var  AddClassRoom = require('./Routes/AddClassRoom');
var  AddSection = require('./Routes/AddSection');
var  AddStudents = require('./Routes/AddStudents');
var  AddTakes = require('./Routes/AddTakes');
var  AddTeaches = require('./Routes/AddTeaches');
var  AddTimeSlot = require('./Routes/AddTimeSlot');
var  AddAdvisor = require('./Routes/AddAdvisor');
var  AddCourse = require('./Routes/AddCourse');
var  AddDepartment = require('./Routes/AddDepartment');
var  AddInstructor = require('./Routes/AddInstructor');
var  AddPrereq = require('./Routes/AddPrereq');

expressApp.use(cors({origin:'*'}));

expressApp.use('/api/classrooms',AddClassRoom);
expressApp.use('/api/sections',AddSection);
expressApp.use('/api/students',AddStudents);
expressApp.use('/api/studenttakessection',AddTakes);
expressApp.use('/api/instructorteachessection',AddTeaches);
expressApp.use('/api/timeslots',AddTimeSlot);
expressApp.use('/api/advisors',AddAdvisor);
expressApp.use('/api/courses',AddCourse);
expressApp.use('/api/departments',AddDepartment);
expressApp.use('/api/instructors',AddInstructor);
expressApp.use('/api/prerequisites',AddPrereq);

expressApp.listen(8000,function(){
    console.log("server has started on port 8000");
})
