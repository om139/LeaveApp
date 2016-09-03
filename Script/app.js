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
        .otherwise({
            templateUrl:'/angularProject/Partials/contactUs.html',
            controller:'contactUsController'
        });
});