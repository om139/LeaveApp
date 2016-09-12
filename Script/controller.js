/**
 * Created by omprakash on 8/5/2016.
 */

app.controller('MainController',function ($scope,$routeParams) {

});

app.controller('feedBackController',function ($scope) {
});

app.controller('aboutUsController',function ($scope) {

});

app.controller('contactUsController',function ($scope) {

});

app.controller('formController',function ($scope) {

});

app.controller('signInController',function ($scope) {

});
app.controller('innerDesignController',function ($scope) {
});
//app.controller('innerDesignController',function ($scope) {
    //$scope.empInformation = [];
    //$scope.empInformation.push({Name : 'Rahul', email : 'rahul123@gmail.com', pwd : 'rahul123' , gender:'Male' , dob : '1/1/1990' , doj:'10/8/2016' ,pic:'anguarProject/Design/images1/1.jpg' ,permanentAddress:'UP' , correspondanceAddress:'Delhi'});
//});
app.controller('regpart1Controller',function ($scope) {

});

app.controller('raiseLeaveController',function ($scope) {

});

app.controller('requestLeaveController',function ($scope) {

});

app.controller('punchAttendanceController',function ($scope) {

});

app.controller('viewAttendanceController',function ($scope) {

});
app.controller('holidayController',function ($scope) {

});


app.controller('leaveSummaryController',function ($scope) {

});

app.controller('attendanceSummaryController',function ($scope) {

});

app.controller('leaveActionNotificationController',function ($scope) {

});
app.controller('missedAttendanceNotificationController',function ($scope) {

});

app.controller('myTeamController',function ($scope) {

});

app.controller('myProfileController',function ($scope) {

});
app.controller('employeeProfileController',function ($scope) {

});


app.controller('infoController', function ($scope) {
    $scope.empDetails = [];
    $scope.empDetails.push({name : 'Rahul', id : 1,code:MTI101,Gender:'Male',dob:'22/10/1990', doj:'10/5/2016',email:'rahul@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Aman', id : 2,code:MTI102,Gender:'Male',dob:'5/10/1990', doj:'10/5/2016',email:'anam@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Kajal', id : 3,code:MTI103,Gender:'Female',dob:'22/11/1990', doj:'10/5/2016',email:'kajal@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Ritika', id : 4,code:MTI104,Gender:'Female',dob:'4/08/1992', doj:'10/5/2016',email:'ritika@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Krishna', id : 5,code:MTI105,Gender:'Male',dob:'7/07/1995', doj:'10/5/2016',email:'krishna@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'om', id : 6,code:MTI106,Gender:'Male',dob:'22/10/1993', doj:'10/5/2016',email:'om@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Tanu', id : 7,code:MTI107,Gender:'Female',dob:'12/10/1994', doj:'10/5/2016',email:'tanu@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Manu', id : 8,code:MTI108,Gender:'Female',dob:'10/10/1990', doj:'10/5/2016',email:'manu@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Anupma', id : 9,code:MTI109,Gender:'Female',dob:'02/10/1990', doj:'10/5/2016',email:'anupma@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Jiwan', id : 10,code:MTI110,Gender:'Male',dob:'23/10/1990', doj:'10/5/2016',email:'jiwan@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Binay', id : 11,code:MTI111,Gender:'Male',dob:'21/10/1990', doj:'10/5/2016',email:'binay@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Rajat', id : 12,code:MTI112,Gender:'Male',dob:'09/10/1990', doj:'10/5/2016',email:'rajat@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Sachin', id : 13,code:MTI113,Gender:'Male',dob:'08/10/1990', doj:'10/5/2016',email:'sachin@gmail.com',pAddress:'delhi',cAddress:'UP',empAttendance : 'P'});
    $scope.empDetails.push({name : 'Rajiv', id : 14,code:MTI114,Gender:'Male',dob:'06/10/1990', doj:'10/5/2016',email:'rajiv@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Raman', id : 15,code:MTI115,Gender:'Male',dob:'14/10/1990', doj:'10/5/2016',email:'raman@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Deepak', id : 16,code:MTI116,Gender:'Male',dob:'18/10/1990', doj:'10/5/2016',email:'deepak@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Amanpreet', id : 17,code:MTI117,Gender:'Male',dob:'27/10/1990', doj:'10/5/2016',email:'amanpreet@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
    $scope.empDetails.push({name : 'Nitesh', id : 18,code:MTI118,Gender:'Male',dob:'29/10/1990', doj:'10/5/2016',email:'nitesh@gmail.com',pAddress:'delhi',cAddress:'UP', empAttendance : 'P'});
});

app.controller('myDetailController', function ($scope) {
    $scope.empDetails = [];
    $scope.empDetails.push({
        name: 'Rahul',
        id: 1,
        code: MTI101,
        Gender: 'Male',
        dob: '22/10/1990',
        doj: '10/5/2016',
        email: 'rahul@gmail.com',
        pAddress: 'delhi',
        cAddress: 'UP',
        empAttendance: 'P'
    });
});
