'use strict';

   var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
                            app.controller('mainCtrl', ['$scope', '$http','$window','$rootScope', function($scope,$http,$window,$rootScope) {
                                
                                                    console.log("Inside controller" ) ;
                                                    $scope.$on('test',$scope.userName);
                                                   
                                                    //$scope.userName = $rootScope.userN;
                                                    $scope.name1 = $window.localStorage.getItem('userdata');
                                                    $scope.token1 = $window.localStorage.getItem('usertoken');
                                                     $scope.adminId1 = $window.localStorage.getItem('adminID');
                                                    console.log("Name: " + $scope.name1  ) ;
                                                    console.log("Token: " + $scope.token1  ) ;
                                                    console.log("adminId: " + $scope.adminId1  ) ;
                                                   // console.log("Token: " + $scope.token1); 
                                                                            
                                                                  $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8'},
                                                                        data: {   
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/admin/userList'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                                if(res.status.statusCode=='6502')
                                                                                {
                                                                                         
                                                                                         console.log("Returned user list sucessfully." ) ;
                                                                                         $scope.userlist1 = res.responseData;

                                                                                         console.log(res.responseData[0].gender);
                                                                                         console.log($scope.userlist1[1]);
                                                                                         console.log($scope.userlist1[1].userAge.substring(0,4)-2016);
                                                                                         $scope.userlistage= $scope.userlist1[1].userAge.substring(0,4)-2016

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("No user list." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });



                                                                    $scope.userDelete = function (uId) {
                                                                        
                                                                     
                                                                      var useId = uId;  
                                                                       var tok = $scope.token1;
                                                                                                  $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8','token':tok},
                                                                        data: {   
                                                                          "userId":useId
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/admin/deleteUser'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                                if(res.status.statusCode=='6504')
                                                                                {
                                                                                         
                                                                                         console.log("Admin Deleted User Profile sucessfully." ) ;
                                                                                        

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("Fail To Delete User." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });


                                                                    };
                                                                      $scope.userCheck=false;
                                                                      $scope.my = { favorite: '' };
                                                                    $scope.updateUser = function (uName,uId) {
                                                                        $scope.userCheck =true;
                                                                       $scope.mobile = ""; 
                                                                       $scope.profImg = "";
                                                                      var useId = uId;  
                                                                      var useName = uName;
                                                                       var tok = $scope.token1;
                                                                                                  $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8','token':tok},
                                                                        data: {   
                                                                          "userId":useId,
                                                                          "userName": "useName",
                                                                          
                                                                          "defaultImg":true
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/admin/updateUser'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                            $scope.mobile = res.responseData.mobileNo;
                                                                             $scope.profImg = res.responseData.profileImage;
                                                                                if(res.status.statusCode=='6503')
                                                                                {
                                                                                         
                                                                                         console.log("Admin updated profile sucessfully." ) ;
                                                                                        

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("User not Exists." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });


                                                                    };

                                                                    $scope.updateUserDetails = function (uName,uId) {
                                                                       
                                                                       $scope.mobile = ""; 
                                                                       $scope.profImg = "";
                                                                      var useId = uId;  
                                                                      var useName = uName;
                                                                      console.log("USERNAME ",useName);
                                                                       var tok = $scope.token1;
                                                                                                  $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8','token':tok},
                                                                        data: {   
                                                                          "userId":useId,
                                                                          "userName": useName,
                                                                          
                                                                          "defaultImg":true
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/admin/updateUser'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                            $scope.mobile = res.responseData.mobileNo;
                                                                             $scope.profImg = res.responseData.profileImage;
                                                                                if(res.status.statusCode=='6503')
                                                                                {
                                                                                         
                                                                                         console.log("Admin updated profile sucessfully." ) ;
                                                                                         $window.location.reload();
                                                                                        

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("User not Exists." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });


                                                                    };

                                                                     $scope.resolveReport = function (rItemId1,rType1,rId,rContentN,rContentV) {
                                                                       
                                                                      
                                                                      console.log("reportedItemId1 ",rItemId1);
                                                                      console.log("reportedType1 ",rType1);
                                                                      console.log("AdminId ",$scope.adminId1);
                                                                      console.log("ReportId ",rId);
                                                                      console.log("ContentNAme ",rContentN);
                                                                      console.log("ContentValue ",rContentV);
                                                                      console.log("Report Reset ",$scope.rReset);
                                                                      //console.log("reportedItemId1 ",rItemId2);
                                                                      //console.log("reportId1 ",rId1);
                                                                      
                                                                                                  $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8','token':$scope.token1},
                                                                        data: {   
                                                                              "reportedItemId": rItemId1,
                                                                              "reportType": rType1,
                                                                              "adminUserId": $scope.adminId1,
                                                                              "resetreportedItemsList": [{
                                                                                "reportId": rId,
                                                                                "reportedContentName": rContentN,
                                                                                "reportedContentValue": rContentV,
                                                                                "reset": $scope.rReset
                                                                              }]
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk//report/resolveReportedItemsAdmin'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                            $scope.mobile = res.responseData.mobileNo;
                                                                             $scope.profImg = res.responseData.profileImage;
                                                                                if(res.status.statusCode=='4521')
                                                                                {
                                                                                         
                                                                                         console.log("Reported items resolved successfully." ) ;
                                                                                         //$window.location.reload();
                                                                                        

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("Reported items Not resolved successfully" ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });


                                                                    };

                                                                    $scope.isSelected=function(user){
                                                                          return $scope.selected_user===user;
                                                                      }
                                                                      $scope.selUser=function(user){
                                                                          $scope.selected_user=user;
                                                                      }
                                                                      $scope.reload=function(){
                                                                         $window.location.reload();
                                                                      }
                                                                      $scope.rReset= false;
                                                                      $scope.reportReset=function(){
                                                                           $scope.rReset=true;
                                                                      }
                                                                      $scope.reports=function(ereport,greport){
                                                                         $scope.reportcount = 0;
                                                                         console.log("Reports 1 ",ereport);
                                                                         if(ereport==0 && greport==0){$scope.reportcount=0;}
                                                                         else{$scope.reportcount = ereport + greport;}

                                                                          console.log("Reports",$scope.reportcount);
                                                                      }
                                                                      $scope.updateEvent=function(eName,eCost,eId,eLocSrt,eLocC,eLocstat,eLocZip,ecord1,ecord2){
                                                                        var tok = $scope.token1;
                                                                         
                                                                          console.log("Update event Name",eName);
                                                                          if(eCost=='undefined'){eCost = 'null';}
                                                                          console.log("Update event Cost",eCost);
                                                                          console.log("Update event ID",eId);
                                                                          console.log("Update event Location Street",eLocSrt);
                                                                          console.log("Update event Location City",eLocC);
                                                                          console.log("Update event Location State",eLocstat);
                                                                          console.log("Update event Location Zip",eLocZip);
                                                                          console.log("Update event Location Cordinates1",ecord1);
                                                                          console.log("Update event Location Cordinates2",ecord2);
                                                                          //  console.log("DATA event Name",data);
                                                                          $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8','token':tok},
                                                                        data: {   
                                                                            "eventId": eId,     
                                                                            "eventName": eName,  
                                                                            "eventCost": eCost,  
                                                                            "location": {    
                                                                                     "eventLocnStreet": eLocSrt,    
                                                                                     "eventLocnCity": eLocC,     
                                                                                     "eventLocnState": eLocstat,     
                                                                                     "eventLocnZip": eLocZip,     
                                                                                     "cordinates": [ecord1,ecord2] },
                                                                                     "defaultImg": true
                                                                        },   
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/event/updateEventByAdmin'
                                                                        }).success(function(res){
                                                                          console.log("Event edited sucessfully." + res.responseData) ;
                                                                            console.log("response ",res.status.statusCode);
                                                                                if(res.status.statusCode=='4510')
                                                                                {
                                                                                         
                                                                                         
                                                                                          $scope.eventlist = res.responseData.eventList;
                                                                                          console.log("Event edited sucessfully." + res.responseData) ;
                                                                                         //$scope.userlist1 = res.responseData;

                                                                                         //console.log(res.responseData.eventList[2].eventName);
                                                                                         //console.log($scope.userlist1[1]);
                                                                                         //console.log($scope.userlist1[1].userAge.substring(0,4)-2016);
                                                                                        // $scope.userlistage= $scope.userlist1[1].userAge.substring(0,4)-2016

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("No Event list." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              
                                                                          console.log("error",err);
                                                                        });
                                                                      }


                                                                      $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8'},
                                                                        data: {   
                                                                            
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/event/searchEventsAdmin'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                                if(res.status.statusCode=='4508')
                                                                                {
                                                                                         
                                                                                         
                                                                                          $scope.eventlist = res.responseData.eventList;
                                                                                          console.log("Event Feteched sucessfully." + res.responseData) ;
                                                                                         //$scope.userlist1 = res.responseData;

                                                                                         console.log(res.responseData.eventList[2].eventName);
                                                                                         //console.log($scope.userlist1[1]);
                                                                                         //console.log($scope.userlist1[1].userAge.substring(0,4)-2016);
                                                                                        // $scope.userlistage= $scope.userlist1[1].userAge.substring(0,4)-2016

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("No Event list." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });

                                                                       

                                                                        $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8','token': $scope.token1},
                                                                        data: {   
                                                                          "reportItemName" :"",    
                                                                           "reportDate": "",  
                                                                            "reportType": "EVENT",  
                                                                            "numberOfReports": "",  
                                                                            "numberOfGuestsMin": "" 
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/report/searchReportedItemsAdmin'
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                                if(res.status.statusCode=='4524')
                                                                                {
                                                                                         $scope.reportlist = res.responseData.reportedItemList;
                                                                                         console.log("Report Fetched sucessfully." ) ;
                                                                                          console.log(res.responseData) ;
                                                                                        

                                                                                        

                                                                                }
                                                                                else{
                                                                                        
                                                                                    console.log("No Report list." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              alert(data.errordescription);
                                                                          console.log("error",err);
                                                                        });




                                                                      var userID = "";  
                                                                      var eventID = "";
                                                                           $scope.deleteEvent = function (user,event1) {
                                                                       
                                                                       
                                                                      userID = user;  
                                                                      eventID = event1;
                                                                       console.log("userID ",userID);
                                                                       console.log("userID ",eventID);
                                                                      
                                                                      
                                                                                                  $http({
                                                                         method: 'POST',
                                                                        headers: { 'Content-type': 'application/json','charset':'utf-8'},
                                                                        data: {  

                                                                          
                                                                          
                                                                        },
                                                                        url: 'http://ec2-54-70-91-74.us-west-2.compute.amazonaws.com:8080/zouk/event/deleteEvent/'+userID +'/'+eventID+'/'+1
                                                                        }).success(function(res){
                                                                            console.log("response ",res);
                                                                            $scope.mobile = res.responseData.mobileNo;
                                                                             $scope.profImg = res.responseData.profileImage;
                                                                                if(res.status.statusCode=='4515')
                                                                                {
                                                                                         $window.location.reload();
                                                                                         console.log("Event deleted sucessfully." ) ;
                                                                                        
                                                                                        

                                                                                }
                                                                                else{
                                                                                        $window.location.reload();
                                                                                    console.log("User not Exists." ) ;
                                                                                }    
                                                                             
                                                                        })
                                                                        .error(function(err){
                                                                              $window.location.reload();
                                                                          console.log("error",err);
                                                                        });


                                                                    };




}]);