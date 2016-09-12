/**
 * Created by omprakash on 8/5/2016.
 */
var app=angular.module('leaveApp',['ngRoute','ngResource']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/feedBack',{
            templateUrl:'/angularProject/Partials/feedBack.html',
            controller:'feedBackController'
        })
        .when('/aboutUs',{
            templateUrl:'/angularProject/Partials/aboutUs.html',
            controller:'aboutUsController'
        })
        .when('/contactUs',{
            templateUrl:'/angularProject/Partials/contactUs.html',
            controller:'contactUsController'
        })
        .when('/signIn',{
            templateUrl:'/angularProject/Partials/registration/login.html',
            controller:'signInController'
        })
        .when('/regpart1',{
            templateUrl:'/angularProject/Partials/registration/regpart1.html',
            controller:'regpart1Controller'
        })
        .when('/innerDesign',{
            templateUrl:'/angularProject/Partials/afterRegistration/innerDesign.html',
            controller:'innerDesignController'
        })
        .when('/leaveRaise',{
            templateUrl:'/angularProject/Partials/afterRegistration/raiseLeaveDesign.html',
            controller:'leaveRaiseController'
        })
        .when('/requestLeave',{
            templateUrl:'/angularProject/Partials/afterRegistration/requestLeave.html',
            controller:'requestLeaveController'
        })
        .when('/punchAttendance',{
            templateUrl:'/angularProject/Partials/afterRegistration/punchAttendance.html',
            controller:'punchAttendanceController'
        })
        .when('/viewAttendance',{
            templateUrl:'/angularProject/Partials/afterRegistration/viewAttendance.html',
            controller:'viewAttendanceController'
        })
        .when('/holiday',{
            templateUrl:'/angularProject/Partials/afterRegistration/holiday.html',
            controller:'holidayController'
        })

        .when('/leaveSummary',{
            templateUrl:'/angularProject/Partials/afterRegistration/leaveSummary.html',
            controller:'leaveSummaryController'
        })
        .when('/attendanceSummary',{
            templateUrl:'/angularProject/Partials/afterRegistration/attendanceSummary.html',
            controller:'attendanceSummaryController'
        })
        .when('/leaveActionNotification',{
            templateUrl:'/angularProject/Partials/afterRegistration/leaveActionNotification.html',
            controller:'leaveActionNotificationController'
        })
        .when('/missedAttendanceNotification',{
            templateUrl:'/angularProject/Partials/afterRegistration/missedAttendanceNotification.html',
            controller:'missedAttendanceNotificationController'
        })
        .when('/myTeam',{
            templateUrl:'/angularProject/Partials/afterRegistration/myTeam.html',
            controller:'myTeamController'
        })
        .when('/myProfile',{
            templateUrl:'/angularProject/Partials/afterRegistration/myProfile.html',
            controller:'myProfileController'
        })
        .when('/employeeProfile',{
            templateUrl:'/angularProject/Partials/afterRegistration/employeeProfile.html',
            controller:'employeeProfileController'
        })
        .otherwise({
            templateUrl:'/angularProject/Partials/afterRegistration/innerDesign.html',
            controller:'innerDesignController'
        });
});
//var app1 = angular.module('innerDesignApp', []);
//var app2 = angular.module('app2', []);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/leaveRaise', {
            templateUrl: '/angularProject/Partials/afterRegistration/raiseLeaveDesign.html',
            controller: 'leaveRaiseController'
        })
        .when('/requestLeave', {
            templateUrl: '/angularProject/Partials/afterRegistration/requestLeave.html',
            controller: 'requestLeaveController'
        })
        .when('/punchAttendance', {
            templateUrl: '/angularProject/Partials/afterRegistration/punchAttendance.html',
            controller: 'punchAttendanceController'
        })
        .when('/viewAttendance', {
            templateUrl: '/angularProject/Partials/afterRegistration/viewAttendance.html',
            controller: 'viewAttendanceController'
        })
        .when('/holiday', {
            templateUrl: '/angularProject/Partials/afterRegistration/holiday.html',
            controller: 'holidayController'
        })

        .when('/leaveSummary', {
            templateUrl: '/angularProject/Partials/afterRegistration/leaveSummary.html',
            controller: 'leaveSummaryController'
        })
        .when('/attendanceSummary', {
            templateUrl: '/angularProject/Partials/afterRegistration/attendanceSummary.html',
            controller: 'attendanceSummaryController'
        })
        .when('/leaveActionNotification', {
            templateUrl: '/angularProject/Partials/afterRegistration/leaveActionNotification.html',
            controller: 'leaveActionNotificationController'
        })
        .when('/missedAttendanceNotification', {
            templateUrl: '/angularProject/Partials/afterRegistration/missedAttendanceNotification.html',
            controller: 'missedAttendanceNotificationController'
        })
        .when('/myTeam', {
            templateUrl: '/angularProject/Partials/afterRegistration/myTeam.html',
            controller: 'myTeamController'
        })

        .when('/employeeProfile', {
            templateUrl: '/angularProject/Partials/afterRegistration/employeeProfile.html',
            controller: 'employeeProfileController'
        })
        .when('/myProfile', {
            templateUrl: '/angularProject/Partials/afterRegistration/myProfile.html',
            controller: 'myProfileController'
        })
        .otherwise({
            templateUrl:'/angularProject/Partials/afterRegistration/innerDesign.html',
            controller:'innerDesignController'
        });
});

//var app = angular.module('empDetail', []);
var app = angular.module('myDetail', []);

// app.directive('basicInformation', function() {
//     var directive = {};
//     directive.restrict = 'E';
//     directive.template = "Name: <b>{{empInformation.name}}</b><br /> , Email: <b>{{empInformation.email}}</b><br />,Password: <b>{{empInformation.pwd}}</b><br />,Gender: <b>{{empInformation.gender}}</b><br />,Date of Joining: <b>{{empInformation.doj}}</b><br />,Permanent Address: <b>{{empInformation.permanentAddress}}</b><br />,Correspondance Address: <b>{{empInformation.correspondanceAddress}}</b><br />";
//     directive.scope = {
//         empInformation : "=name"
//     }
//
//     directive.compile = function(element, attributes) {
//
//         var linkFunction = function($scope, element, attributes) {
//             element.html("Name: <b>"+$scope.empInformation.name +"</b> , Email: <b>"+$scope.empInformation.email+"</b><br/>,Gender: <b>"+$scope.empInformation.gender+"</b><br/> ,date of Birth: <b>"+$scope.empInformation.dob+"</b><br/> , Date of joining: <b>"+$scope.empInformation.doj+"</b><br/> , Permanent Address: <b>"+$scope.empInformation.permanentAddress+"</b><br/> , Correspondance Address: <b>"+$scope.empInformation.correspondanceAddress+"</b><br/> ,");
//         }
//         return linkFunction;
//     }
//     return directive;
// });
// app.controller('StudentController', function($scope) {
//     $scope.empInformation = [];
//     $scope.empInformation.push({name : 'Rahul', email : 'rahul123@gmail.com', pwd : 'rahul123' , gender:'Male' , dob : '1/1/1990' , doj:'10/8/2016' ,pic:'anguarProject/Design/images1/1.jpg' ,permanentAddress:'UP' , correspondanceAddress:'Delhi'});
// });

