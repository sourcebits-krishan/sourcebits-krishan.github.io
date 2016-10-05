'use strict';

   var app = angular.module('myApp', []);
                            app.controller('loginCtrl', ['$scope', '$http','$window', function($scope,$http,$window) {
                                

                                $scope.Login = function(u,p) {
                        
                                            var LoginData = {
                                                "emailId": u,
                                                "password": p
                                            };
                                        console.log(LoginData);
                                            var user = u;
                                            var pass = p;

                                            var data = {
                                                   "emailId": "hkr@sb.com",
                                                   "password": "abc"
                                              };

                                            

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
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });




                                     };


}]);