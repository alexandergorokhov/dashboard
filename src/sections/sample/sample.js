/*
 * The MIT License
 *
 * Copyright (c) 2015, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

angular.module('app.core', [
  'adf', 'adf.structures.base',
   'adf.widget.weatherTemperature',
  'adf.widget.weatherPressure',
    'adf.widget.weatherHumidity',
    'adf.widget.weatherRain',
    'adf.widget.github',


])

.controller('SampleController', function($scope){

   var name = 'dashboard sample';
    var model;
    if (!model) {
        // set default model for demo purposes
        model = {
            title: "Weather",
            structure: "3-3-3-3",
            rows: [{
                columns: [
                    {
                        styleClass: "col-md-3",
                        widgets: [

                            {
                                type: "weatherTemperature",
                                config: {
                                    location: "Buenos Aires"
                                },
                                title: "Temperature"
                            }]
                    },
                    {
                        styleClass: "col-md-3",
                        widgets: [
                            {
                                type: "weatherPressure",
                                config: {
                                    location: "Buenos Aires"
                                },
                                title: "Pressure"
                            }]
                    },
                    {
                        styleClass: "col-md-3",
                        widgets: [
                            {

                                type: "weatherHumidity",
                                config: {
                                    location: "Buenos Aires"
                                },
                                title: "Humidity"
                            }]
                    },
                    {
                        styleClass: "col-md-3",
                        widgets: [
                            {

                                type: "weatherRain",
                                config: {
                                    location: "Buenos Aires"
                                },
                                title: "Rain probability"
                            }]
                    },
                    {
                        styleClass: "col-md-12",
                        widgets: [
                            {

                                type: "weatherChart",
                                config: {
                                    location: "Buenos Aires"
                                },
                                title: "Rain probability"
                            }]
                    }


                ]
            }


            ]
        };
    }
    $scope.name = name;
    $scope.model = model;
    $scope.collapsible = false;
    $scope.maximizable = false;
    $scope.categories = true;
});


