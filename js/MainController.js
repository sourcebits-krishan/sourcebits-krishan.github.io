'use strict';

   var app = angular.module('myApp', []);
                            app.controller('mainCtrl', ['$scope', '$http','$window', function($scope,$http,$window) {
                                

                                                                  $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8'},
                                                                        data: {   "userName" : "hareesh", 
                                                                                  "startAge" : 20,   
                                                                                  "endAge" : 30,    
                                                                                  "gender" :"male",   
                                                                                  "hosted" : 2,   
                                                                                  "lastLogin" : "2016-09-16 00:00:00" 
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/admin/userList'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                                
                                                                             console.log('Successfully Updated the Details', 'success')
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });


}]);