'use strict';

   var app = angular.module('myApp', []);
                            app.controller('loginCtrl', ['$scope', '$http','$window','$rootScope', function($scope,$http,$window,$rootScope) {
                                




                                    $rootScope.userN ="";
                                     $rootScope.token ="";
                                      $rootScope.adminID ="";

                                $scope.Login = function(u,p) {
                        
                                            var LoginData = {
                                                "emailId": u,
                                                "password": p
                                            };
                                        console.log(LoginData);
                                            var user = u;
                                            var pass = p;

                                           // var data = {
                                                //   "emailId": "hkr@sb.com",
                                                 //  "password": "abc"
                                             // };

                                            

                                                                    $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8'},
                                                                        data: {
                                                                         "emailId": user,
                                                                        "password": pass
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/admin/adminLogin'
                                                                        }).success(function(res){
                                                                            console.log("response ",res.status.statusCode);
                                                                            console.log("response ",res.responseData.adminProfile.token);
                                                                             console.log("response ",res.responseData.adminProfile.firstName);
                                                                             $rootScope.userN = res.responseData.adminProfile.firstName;
                                                                             $rootScope.token = res.responseData.adminProfile.token;
                                                                             $rootScope.adminID = res.responseData.adminProfile.adminId;
                                                                             // set "data" to "MVVM"
                                                                                $window.localStorage.setItem('userdata', $rootScope.userN);
                                                                                $window.localStorage.setItem('usertoken', $rootScope.token);
                                                                                $window.localStorage.setItem('adminID', $rootScope.adminID);

                                                                                // get "data"
                                                                                $window.localStorage.getItem('userdata');

                                                                             $scope.$broadcast('test',$rootScope.userN);


                                                                              app.service('Products', function () {      
                                                                                      this.Items = function() {
                                                                                        // if we want can get data from database 
                                                                                         product = { product: $rootScope.userN, price: $rootScope.token }
                                                                                      };    
                                                                                      return this;
                                                                                    });
                                                                                if(res.status.statusCode=='6501')
                                                                                {
                                                                                         

                                                                                         


                                                                                         $window.location.href = 'index.html';
                                                                                        $window.alert("Admin logged in successfully" ) ;
                                                                                }
                                                                                else{
                                                                                        
                                                                                    alert("Admin emailId/password is not correct." ) ;
                                                                                }    
                                                                             console.log('Successfully Updated the Details', 'success')
                                                                        })
                                                                        .error(function(err){
                                                                              alert("Wrong User Name /Password");
                                                                          console.log("error",err);
                                                                        });




                                     };


}]);