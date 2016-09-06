/**
 * Created by omprakash on 8/5/2016.
 */

app.controller('MainController',function ($scope,$routeParams) {

});

app.controller('feedBackController',function ($scope,$routeParams) {
    
});

app.controller('aboutUsController',function ($scope,$routeParams) {

});

app.controller('contactUsController',function ($scope,$routeParams) {

});

app.controller('formController',function ($scope) {

});

app.controller('signInController',function ($scope) {

});
app.controller('innerDesignController',function ($scope) {
});
app1.controller('innerDesignController',function ($scope) {
    $scope.empInformation = [];
    $scope.empInformation.push({Name : 'Rahul', email : 'rahul123@gmail.com', pwd : 'rahul123' , gender:'Male' , dob : '1/1/1990' , doj:'10/8/2016' ,pic:'anguarProject/Design/images1/1.jpg' ,permanentAddress:'UP' , correspondanceAddress:'Delhi'});
});
app.controller('regpart1Controller',function ($scope) {

});


app1.directive('empDetail', function() {
    return {
        restrict:E,
        template: 'Name: {{empInformation.Name}} email: {{empInformation.email} pwd:{{empInformation.pwd}} ' +
        'gender:{{empInformation.gender}} dob:{{empInformation.dob}} permanentAddress:{{empInformation.permanentAddress}} correspondanceAddress:{{correspondanceAddress.dob}}',
        templateUrl: 'angularProject/partials/afterRegistration/innerDesign.html',
        replace: true,
        transclude: true,
    };

});

app1.directive('empPicture',function () {
    return{
      template:  'pic:{{empInformation.pic}}'
    };
});
