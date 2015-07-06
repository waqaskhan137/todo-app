/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global _, angular, Storage */

angular.module('appT', [])
        .controller('todoCtrl', function ($scope) {

            $scope.storage = [];

            $scope.todos = [
                {text: 'Learn AngularJS', done: false},
                {text: 'Build an App', done: false}
                //getting the todos from localstorage which are done:false

            ];
            $scope.getTotalTodos = function () {

                return $scope.todos.length;
            };
            $scope.addClassTodo = function (todo) {

                if (todo.done)
                    $scope.addClass = 'todo-true';
                else
                    $scope.addClass = 'todo-false';
                return $scope.addClass;
            };
            $scope.clearCompleted = function () {

                $scope.todos = _.filter($scope.todos, function (todo) {


                    return !todo.done;
                });

                console.log($scope.todos);
            };

            //getting the todos from the localstorage
            function getStoredTodos() {
                //getting the todos from local storage 
                if (!!localStorage.getItem("todos")) {
                    //getting the todos form local storage 
                    $scope.storedTodos = JSON.parse(localStorage["todos"]);
                    // var localData = {text: $scope.storedTodos.text, done: $scope.storedTodos.done};
                    //pushing the array to the todos
                    $scope.todos.push($scope.storedTodos);
                    console.log($scope.todos);
                } else {
                    console.log("found nothing in localstorage");
                }

            }
            ;

            //setting the todos for local storage
            function setStorageTodos(e) {
                // Store
                localStorage.setItem("todos", JSON.stringify(e));

            }
            ;

            function init() {
                if (typeof (Storage) !== "undefined" || localStorage !== "null" || localStorage !== "undefined" || localStorage[0] !== 0) {
                    getStoredTodos();
                    //setStorageTodos($scope.storage);
                } else {

                }
            }
            ;
            init();

            $scope.addTodo = function () {
                if (!!$scope.formTodoText) {
                    //pushing to the todos for updating the interface 
                    $scope.todos.push({text: $scope.formTodoText, done: false});

                    if (getStoredTodos()) {

                    } else {
                        //pushing the data to storage array 
                        $scope.storage.push({text: $scope.formTodoText, done: false});

                    }


                    //sending the storage to the setStorageTodos function 
                    setStorageTodos($scope.storage);



                    $scope.formTodoText = '';
                } else {

                    alert("Please Enter Something");
                }
            };
        });

