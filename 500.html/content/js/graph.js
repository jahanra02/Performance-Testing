/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 6946.0, "series": [{"data": [[0.0, 6.0], [0.1, 7.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 10.0], [10.4, 10.0], [10.5, 10.0], [10.6, 10.0], [10.7, 10.0], [10.8, 10.0], [10.9, 10.0], [11.0, 10.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 10.0], [11.5, 10.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 11.0], [12.8, 11.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 14.0], [20.2, 14.0], [20.3, 14.0], [20.4, 14.0], [20.5, 14.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 15.0], [22.5, 15.0], [22.6, 15.0], [22.7, 15.0], [22.8, 15.0], [22.9, 15.0], [23.0, 15.0], [23.1, 15.0], [23.2, 15.0], [23.3, 15.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 16.0], [25.8, 16.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 16.0], [27.2, 16.0], [27.3, 16.0], [27.4, 16.0], [27.5, 16.0], [27.6, 16.0], [27.7, 16.0], [27.8, 16.0], [27.9, 16.0], [28.0, 16.0], [28.1, 16.0], [28.2, 16.0], [28.3, 16.0], [28.4, 16.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 17.0], [29.2, 17.0], [29.3, 17.0], [29.4, 17.0], [29.5, 17.0], [29.6, 17.0], [29.7, 17.0], [29.8, 17.0], [29.9, 17.0], [30.0, 17.0], [30.1, 17.0], [30.2, 17.0], [30.3, 17.0], [30.4, 17.0], [30.5, 17.0], [30.6, 17.0], [30.7, 18.0], [30.8, 18.0], [30.9, 18.0], [31.0, 18.0], [31.1, 18.0], [31.2, 18.0], [31.3, 18.0], [31.4, 18.0], [31.5, 18.0], [31.6, 18.0], [31.7, 18.0], [31.8, 18.0], [31.9, 18.0], [32.0, 18.0], [32.1, 18.0], [32.2, 18.0], [32.3, 18.0], [32.4, 18.0], [32.5, 18.0], [32.6, 18.0], [32.7, 18.0], [32.8, 18.0], [32.9, 19.0], [33.0, 19.0], [33.1, 19.0], [33.2, 19.0], [33.3, 19.0], [33.4, 19.0], [33.5, 19.0], [33.6, 19.0], [33.7, 19.0], [33.8, 19.0], [33.9, 19.0], [34.0, 19.0], [34.1, 19.0], [34.2, 19.0], [34.3, 19.0], [34.4, 19.0], [34.5, 19.0], [34.6, 19.0], [34.7, 19.0], [34.8, 19.0], [34.9, 19.0], [35.0, 20.0], [35.1, 20.0], [35.2, 20.0], [35.3, 20.0], [35.4, 20.0], [35.5, 20.0], [35.6, 20.0], [35.7, 20.0], [35.8, 20.0], [35.9, 20.0], [36.0, 20.0], [36.1, 20.0], [36.2, 20.0], [36.3, 20.0], [36.4, 20.0], [36.5, 20.0], [36.6, 20.0], [36.7, 20.0], [36.8, 20.0], [36.9, 20.0], [37.0, 20.0], [37.1, 21.0], [37.2, 21.0], [37.3, 21.0], [37.4, 21.0], [37.5, 21.0], [37.6, 21.0], [37.7, 21.0], [37.8, 21.0], [37.9, 21.0], [38.0, 21.0], [38.1, 21.0], [38.2, 21.0], [38.3, 21.0], [38.4, 21.0], [38.5, 21.0], [38.6, 21.0], [38.7, 21.0], [38.8, 21.0], [38.9, 22.0], [39.0, 22.0], [39.1, 22.0], [39.2, 22.0], [39.3, 22.0], [39.4, 22.0], [39.5, 22.0], [39.6, 22.0], [39.7, 22.0], [39.8, 22.0], [39.9, 22.0], [40.0, 22.0], [40.1, 22.0], [40.2, 22.0], [40.3, 22.0], [40.4, 22.0], [40.5, 22.0], [40.6, 23.0], [40.7, 23.0], [40.8, 23.0], [40.9, 23.0], [41.0, 23.0], [41.1, 23.0], [41.2, 23.0], [41.3, 23.0], [41.4, 23.0], [41.5, 23.0], [41.6, 23.0], [41.7, 23.0], [41.8, 23.0], [41.9, 23.0], [42.0, 23.0], [42.1, 23.0], [42.2, 23.0], [42.3, 23.0], [42.4, 23.0], [42.5, 23.0], [42.6, 24.0], [42.7, 24.0], [42.8, 24.0], [42.9, 24.0], [43.0, 24.0], [43.1, 24.0], [43.2, 24.0], [43.3, 24.0], [43.4, 24.0], [43.5, 24.0], [43.6, 24.0], [43.7, 24.0], [43.8, 24.0], [43.9, 24.0], [44.0, 24.0], [44.1, 25.0], [44.2, 25.0], [44.3, 25.0], [44.4, 25.0], [44.5, 25.0], [44.6, 25.0], [44.7, 25.0], [44.8, 25.0], [44.9, 25.0], [45.0, 25.0], [45.1, 25.0], [45.2, 25.0], [45.3, 25.0], [45.4, 25.0], [45.5, 25.0], [45.6, 25.0], [45.7, 25.0], [45.8, 25.0], [45.9, 25.0], [46.0, 26.0], [46.1, 26.0], [46.2, 26.0], [46.3, 26.0], [46.4, 26.0], [46.5, 26.0], [46.6, 26.0], [46.7, 26.0], [46.8, 26.0], [46.9, 26.0], [47.0, 26.0], [47.1, 26.0], [47.2, 26.0], [47.3, 26.0], [47.4, 26.0], [47.5, 26.0], [47.6, 26.0], [47.7, 27.0], [47.8, 27.0], [47.9, 27.0], [48.0, 27.0], [48.1, 27.0], [48.2, 27.0], [48.3, 27.0], [48.4, 27.0], [48.5, 27.0], [48.6, 27.0], [48.7, 27.0], [48.8, 27.0], [48.9, 27.0], [49.0, 27.0], [49.1, 27.0], [49.2, 27.0], [49.3, 27.0], [49.4, 28.0], [49.5, 28.0], [49.6, 28.0], [49.7, 28.0], [49.8, 28.0], [49.9, 28.0], [50.0, 28.0], [50.1, 28.0], [50.2, 28.0], [50.3, 28.0], [50.4, 28.0], [50.5, 28.0], [50.6, 28.0], [50.7, 28.0], [50.8, 28.0], [50.9, 28.0], [51.0, 28.0], [51.1, 29.0], [51.2, 29.0], [51.3, 29.0], [51.4, 29.0], [51.5, 29.0], [51.6, 29.0], [51.7, 29.0], [51.8, 29.0], [51.9, 29.0], [52.0, 29.0], [52.1, 29.0], [52.2, 29.0], [52.3, 29.0], [52.4, 29.0], [52.5, 29.0], [52.6, 29.0], [52.7, 29.0], [52.8, 29.0], [52.9, 29.0], [53.0, 29.0], [53.1, 29.0], [53.2, 29.0], [53.3, 29.0], [53.4, 30.0], [53.5, 30.0], [53.6, 30.0], [53.7, 30.0], [53.8, 30.0], [53.9, 30.0], [54.0, 30.0], [54.1, 30.0], [54.2, 30.0], [54.3, 30.0], [54.4, 30.0], [54.5, 30.0], [54.6, 30.0], [54.7, 30.0], [54.8, 30.0], [54.9, 30.0], [55.0, 31.0], [55.1, 31.0], [55.2, 31.0], [55.3, 31.0], [55.4, 31.0], [55.5, 31.0], [55.6, 31.0], [55.7, 31.0], [55.8, 31.0], [55.9, 31.0], [56.0, 31.0], [56.1, 31.0], [56.2, 31.0], [56.3, 31.0], [56.4, 31.0], [56.5, 31.0], [56.6, 32.0], [56.7, 32.0], [56.8, 32.0], [56.9, 32.0], [57.0, 32.0], [57.1, 32.0], [57.2, 32.0], [57.3, 32.0], [57.4, 32.0], [57.5, 32.0], [57.6, 33.0], [57.7, 33.0], [57.8, 33.0], [57.9, 33.0], [58.0, 33.0], [58.1, 33.0], [58.2, 33.0], [58.3, 33.0], [58.4, 33.0], [58.5, 33.0], [58.6, 33.0], [58.7, 34.0], [58.8, 34.0], [58.9, 34.0], [59.0, 34.0], [59.1, 34.0], [59.2, 34.0], [59.3, 34.0], [59.4, 34.0], [59.5, 34.0], [59.6, 35.0], [59.7, 35.0], [59.8, 35.0], [59.9, 35.0], [60.0, 35.0], [60.1, 35.0], [60.2, 35.0], [60.3, 35.0], [60.4, 35.0], [60.5, 35.0], [60.6, 35.0], [60.7, 36.0], [60.8, 36.0], [60.9, 36.0], [61.0, 36.0], [61.1, 36.0], [61.2, 36.0], [61.3, 36.0], [61.4, 36.0], [61.5, 36.0], [61.6, 36.0], [61.7, 36.0], [61.8, 36.0], [61.9, 37.0], [62.0, 37.0], [62.1, 37.0], [62.2, 37.0], [62.3, 37.0], [62.4, 37.0], [62.5, 37.0], [62.6, 37.0], [62.7, 37.0], [62.8, 37.0], [62.9, 37.0], [63.0, 37.0], [63.1, 37.0], [63.2, 38.0], [63.3, 38.0], [63.4, 38.0], [63.5, 38.0], [63.6, 38.0], [63.7, 38.0], [63.8, 38.0], [63.9, 38.0], [64.0, 38.0], [64.1, 39.0], [64.2, 39.0], [64.3, 39.0], [64.4, 39.0], [64.5, 39.0], [64.6, 39.0], [64.7, 39.0], [64.8, 39.0], [64.9, 39.0], [65.0, 40.0], [65.1, 40.0], [65.2, 40.0], [65.3, 40.0], [65.4, 40.0], [65.5, 40.0], [65.6, 40.0], [65.7, 40.0], [65.8, 40.0], [65.9, 40.0], [66.0, 40.0], [66.1, 41.0], [66.2, 41.0], [66.3, 41.0], [66.4, 41.0], [66.5, 41.0], [66.6, 41.0], [66.7, 41.0], [66.8, 41.0], [66.9, 42.0], [67.0, 42.0], [67.1, 42.0], [67.2, 42.0], [67.3, 42.0], [67.4, 42.0], [67.5, 42.0], [67.6, 42.0], [67.7, 43.0], [67.8, 43.0], [67.9, 43.0], [68.0, 43.0], [68.1, 43.0], [68.2, 43.0], [68.3, 43.0], [68.4, 43.0], [68.5, 43.0], [68.6, 43.0], [68.7, 43.0], [68.8, 44.0], [68.9, 44.0], [69.0, 44.0], [69.1, 44.0], [69.2, 44.0], [69.3, 44.0], [69.4, 44.0], [69.5, 45.0], [69.6, 45.0], [69.7, 45.0], [69.8, 45.0], [69.9, 45.0], [70.0, 46.0], [70.1, 46.0], [70.2, 46.0], [70.3, 46.0], [70.4, 46.0], [70.5, 46.0], [70.6, 46.0], [70.7, 47.0], [70.8, 47.0], [70.9, 47.0], [71.0, 47.0], [71.1, 47.0], [71.2, 47.0], [71.3, 47.0], [71.4, 48.0], [71.5, 48.0], [71.6, 48.0], [71.7, 48.0], [71.8, 48.0], [71.9, 49.0], [72.0, 49.0], [72.1, 49.0], [72.2, 49.0], [72.3, 49.0], [72.4, 49.0], [72.5, 50.0], [72.6, 50.0], [72.7, 50.0], [72.8, 50.0], [72.9, 50.0], [73.0, 51.0], [73.1, 51.0], [73.2, 51.0], [73.3, 51.0], [73.4, 51.0], [73.5, 52.0], [73.6, 52.0], [73.7, 52.0], [73.8, 52.0], [73.9, 53.0], [74.0, 53.0], [74.1, 53.0], [74.2, 53.0], [74.3, 53.0], [74.4, 53.0], [74.5, 54.0], [74.6, 54.0], [74.7, 54.0], [74.8, 54.0], [74.9, 54.0], [75.0, 55.0], [75.1, 55.0], [75.2, 55.0], [75.3, 55.0], [75.4, 56.0], [75.5, 56.0], [75.6, 56.0], [75.7, 56.0], [75.8, 56.0], [75.9, 57.0], [76.0, 57.0], [76.1, 57.0], [76.2, 57.0], [76.3, 58.0], [76.4, 58.0], [76.5, 58.0], [76.6, 58.0], [76.7, 58.0], [76.8, 59.0], [76.9, 59.0], [77.0, 60.0], [77.1, 60.0], [77.2, 60.0], [77.3, 60.0], [77.4, 60.0], [77.5, 61.0], [77.6, 61.0], [77.7, 61.0], [77.8, 61.0], [77.9, 62.0], [78.0, 62.0], [78.1, 62.0], [78.2, 62.0], [78.3, 63.0], [78.4, 63.0], [78.5, 64.0], [78.6, 64.0], [78.7, 64.0], [78.8, 65.0], [78.9, 65.0], [79.0, 65.0], [79.1, 65.0], [79.2, 66.0], [79.3, 66.0], [79.4, 67.0], [79.5, 68.0], [79.6, 68.0], [79.7, 69.0], [79.8, 69.0], [79.9, 70.0], [80.0, 70.0], [80.1, 71.0], [80.2, 71.0], [80.3, 71.0], [80.4, 72.0], [80.5, 72.0], [80.6, 74.0], [80.7, 75.0], [80.8, 75.0], [80.9, 75.0], [81.0, 76.0], [81.1, 78.0], [81.2, 78.0], [81.3, 79.0], [81.4, 80.0], [81.5, 80.0], [81.6, 80.0], [81.7, 81.0], [81.8, 81.0], [81.9, 82.0], [82.0, 83.0], [82.1, 83.0], [82.2, 84.0], [82.3, 84.0], [82.4, 85.0], [82.5, 86.0], [82.6, 86.0], [82.7, 87.0], [82.8, 88.0], [82.9, 88.0], [83.0, 90.0], [83.1, 90.0], [83.2, 91.0], [83.3, 91.0], [83.4, 92.0], [83.5, 93.0], [83.6, 94.0], [83.7, 95.0], [83.8, 95.0], [83.9, 97.0], [84.0, 97.0], [84.1, 99.0], [84.2, 99.0], [84.3, 101.0], [84.4, 102.0], [84.5, 103.0], [84.6, 104.0], [84.7, 105.0], [84.8, 105.0], [84.9, 106.0], [85.0, 106.0], [85.1, 107.0], [85.2, 108.0], [85.3, 110.0], [85.4, 111.0], [85.5, 113.0], [85.6, 115.0], [85.7, 118.0], [85.8, 122.0], [85.9, 124.0], [86.0, 125.0], [86.1, 126.0], [86.2, 129.0], [86.3, 131.0], [86.4, 133.0], [86.5, 136.0], [86.6, 138.0], [86.7, 141.0], [86.8, 143.0], [86.9, 147.0], [87.0, 151.0], [87.1, 155.0], [87.2, 159.0], [87.3, 160.0], [87.4, 174.0], [87.5, 187.0], [87.6, 193.0], [87.7, 204.0], [87.8, 216.0], [87.9, 220.0], [88.0, 226.0], [88.1, 228.0], [88.2, 229.0], [88.3, 230.0], [88.4, 232.0], [88.5, 234.0], [88.6, 234.0], [88.7, 236.0], [88.8, 236.0], [88.9, 237.0], [89.0, 238.0], [89.1, 241.0], [89.2, 242.0], [89.3, 243.0], [89.4, 244.0], [89.5, 245.0], [89.6, 247.0], [89.7, 248.0], [89.8, 250.0], [89.9, 251.0], [90.0, 253.0], [90.1, 254.0], [90.2, 255.0], [90.3, 256.0], [90.4, 257.0], [90.5, 259.0], [90.6, 261.0], [90.7, 262.0], [90.8, 264.0], [90.9, 267.0], [91.0, 269.0], [91.1, 270.0], [91.2, 272.0], [91.3, 272.0], [91.4, 275.0], [91.5, 277.0], [91.6, 281.0], [91.7, 285.0], [91.8, 291.0], [91.9, 292.0], [92.0, 297.0], [92.1, 301.0], [92.2, 305.0], [92.3, 309.0], [92.4, 311.0], [92.5, 313.0], [92.6, 315.0], [92.7, 318.0], [92.8, 321.0], [92.9, 329.0], [93.0, 335.0], [93.1, 343.0], [93.2, 348.0], [93.3, 354.0], [93.4, 356.0], [93.5, 360.0], [93.6, 363.0], [93.7, 366.0], [93.8, 371.0], [93.9, 378.0], [94.0, 381.0], [94.1, 388.0], [94.2, 401.0], [94.3, 404.0], [94.4, 414.0], [94.5, 421.0], [94.6, 431.0], [94.7, 440.0], [94.8, 454.0], [94.9, 465.0], [95.0, 478.0], [95.1, 489.0], [95.2, 492.0], [95.3, 509.0], [95.4, 520.0], [95.5, 544.0], [95.6, 564.0], [95.7, 570.0], [95.8, 578.0], [95.9, 587.0], [96.0, 593.0], [96.1, 610.0], [96.2, 618.0], [96.3, 631.0], [96.4, 644.0], [96.5, 658.0], [96.6, 680.0], [96.7, 694.0], [96.8, 708.0], [96.9, 739.0], [97.0, 766.0], [97.1, 792.0], [97.2, 810.0], [97.3, 830.0], [97.4, 853.0], [97.5, 884.0], [97.6, 890.0], [97.7, 904.0], [97.8, 921.0], [97.9, 954.0], [98.0, 1036.0], [98.1, 1052.0], [98.2, 1098.0], [98.3, 1127.0], [98.4, 1154.0], [98.5, 1378.0], [98.6, 1498.0], [98.7, 1616.0], [98.8, 1666.0], [98.9, 1742.0], [99.0, 1792.0], [99.1, 1908.0], [99.2, 1933.0], [99.3, 1962.0], [99.4, 2002.0], [99.5, 2023.0], [99.6, 2061.0], [99.7, 2803.0], [99.8, 3378.0], [99.9, 3855.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4213.0, "series": [{"data": [[0.0, 4213.0], [600.0, 35.0], [700.0, 22.0], [800.0, 26.0], [900.0, 13.0], [1000.0, 13.0], [1100.0, 13.0], [1300.0, 3.0], [1400.0, 5.0], [1500.0, 2.0], [100.0, 171.0], [1600.0, 9.0], [1700.0, 8.0], [1800.0, 4.0], [1900.0, 15.0], [2000.0, 11.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [3000.0, 1.0], [200.0, 220.0], [3300.0, 2.0], [3200.0, 1.0], [3500.0, 1.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 1.0], [300.0, 106.0], [4800.0, 1.0], [5500.0, 1.0], [400.0, 52.0], [6600.0, 1.0], [6900.0, 1.0], [500.0, 40.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 68.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4762.0, "series": [{"data": [[0.0, 4762.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 170.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 68.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 55.249399999999795, "minX": 1.72889112E12, "maxY": 55.249399999999795, "series": [{"data": [[1.72889112E12, 55.249399999999795]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889112E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 7.75, "minX": 1.0, "maxY": 6946.0, "series": [{"data": [[2.0, 6946.0], [3.0, 167.5], [4.0, 423.5625000000001], [5.0, 516.6666666666666], [6.0, 1535.0], [7.0, 409.44444444444446], [8.0, 19.333333333333332], [9.0, 399.5999999999999], [10.0, 220.0], [11.0, 10.714285714285714], [12.0, 89.18181818181819], [13.0, 531.0], [14.0, 10.875], [15.0, 95.66666666666666], [16.0, 7.75], [17.0, 466.55555555555543], [18.0, 119.53333333333332], [19.0, 16.0], [20.0, 66.6], [21.0, 229.0], [22.0, 104.29999999999998], [23.0, 31.0], [24.0, 22.666666666666668], [25.0, 31.5], [26.0, 760.5], [27.0, 17.0], [28.0, 52.92857142857143], [29.0, 53.55555555555556], [30.0, 27.634146341463413], [31.0, 75.3440860215054], [33.0, 61.671052631578966], [32.0, 104.1076923076923], [35.0, 69.74782608695652], [34.0, 71.72483221476507], [37.0, 83.20392156862745], [36.0, 43.92307692307691], [39.0, 85.33123028391174], [38.0, 66.95744680851064], [41.0, 73.99999999999999], [40.0, 53.68205128205125], [43.0, 83.43689320388351], [42.0, 129.2272727272728], [45.0, 114.52808988764039], [44.0, 76.3410404624277], [47.0, 26.789473684210524], [46.0, 99.04807692307695], [49.0, 88.0], [48.0, 221.53846153846152], [51.0, 83.76470588235296], [50.0, 102.57142857142858], [53.0, 26.57142857142857], [52.0, 32.0], [55.0, 32.45454545454546], [54.0, 22.73684210526316], [57.0, 50.76666666666667], [56.0, 132.9696969696969], [59.0, 122.4871794871795], [58.0, 46.77272727272727], [61.0, 96.06666666666666], [60.0, 29.13333333333333], [63.0, 150.0909090909091], [62.0, 21.55555555555556], [67.0, 59.062500000000014], [66.0, 55.381818181818176], [65.0, 35.475], [64.0, 20.33333333333333], [71.0, 79.8888888888889], [70.0, 108.76923076923076], [68.0, 73.41666666666673], [69.0, 59.219512195121965], [75.0, 76.62000000000002], [74.0, 97.12499999999997], [73.0, 97.26829268292683], [72.0, 89.87179487179486], [79.0, 205.30158730158735], [78.0, 115.62857142857142], [77.0, 196.09302325581396], [76.0, 127.19444444444441], [82.0, 339.59568733153634], [81.0, 91.39072847682121], [80.0, 111.66666666666669], [83.0, 76.52941176470588], [87.0, 68.76666666666667], [86.0, 61.857142857142854], [85.0, 223.34545454545457], [84.0, 234.78571428571433], [89.0, 81.88235294117648], [90.0, 120.4081632653061], [91.0, 133.91666666666666], [88.0, 29.142857142857142], [92.0, 60.580645161290334], [93.0, 27.8], [94.0, 204.03448275862073], [95.0, 162.27272727272728], [99.0, 42.02173913043479], [98.0, 24.8], [97.0, 25.0], [96.0, 162.75000000000003], [100.0, 55.78260869565217], [101.0, 31.5], [1.0, 6645.0]], "isOverall": false, "label": "Get Users", "isController": false}, {"data": [[55.249399999999795, 111.07860000000007]], "isOverall": false, "label": "Get Users-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 101.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 10250.0, "minX": 1.72889112E12, "maxY": 160833.66666666666, "series": [{"data": [[1.72889112E12, 160833.66666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72889112E12, 10250.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889112E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 111.07860000000007, "minX": 1.72889112E12, "maxY": 111.07860000000007, "series": [{"data": [[1.72889112E12, 111.07860000000007]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889112E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 97.12980000000022, "minX": 1.72889112E12, "maxY": 97.12980000000022, "series": [{"data": [[1.72889112E12, 97.12980000000022]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889112E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 29.73359999999997, "minX": 1.72889112E12, "maxY": 29.73359999999997, "series": [{"data": [[1.72889112E12, 29.73359999999997]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889112E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.72889112E12, "maxY": 6946.0, "series": [{"data": [[1.72889112E12, 6946.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72889112E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72889112E12, 253.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72889112E12, 1791.9399999999987]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72889112E12, 28.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72889112E12, 477.9499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889112E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 6795.5, "series": [{"data": [[8.0, 829.5], [576.0, 21.0], [146.0, 16.0], [669.0, 54.0], [656.0, 32.0], [651.0, 35.0], [812.0, 22.5], [13.0, 8.0], [1.0, 6795.5], [20.0, 9.5], [447.0, 20.0], [494.0, 17.0], [506.0, 28.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 812.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 6795.5, "series": [{"data": [[8.0, 826.5], [576.0, 19.0], [146.0, 16.0], [669.0, 51.0], [656.0, 31.0], [651.0, 33.0], [812.0, 22.0], [13.0, 8.0], [1.0, 6795.5], [20.0, 9.5], [447.0, 19.0], [494.0, 17.0], [506.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 812.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 83.33333333333333, "minX": 1.72889112E12, "maxY": 83.33333333333333, "series": [{"data": [[1.72889112E12, 83.33333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889112E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 83.33333333333333, "minX": 1.72889112E12, "maxY": 83.33333333333333, "series": [{"data": [[1.72889112E12, 83.33333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889112E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 83.33333333333333, "minX": 1.72889112E12, "maxY": 83.33333333333333, "series": [{"data": [[1.72889112E12, 83.33333333333333]], "isOverall": false, "label": "Get Users-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889112E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 83.33333333333333, "minX": 1.72889112E12, "maxY": 83.33333333333333, "series": [{"data": [[1.72889112E12, 83.33333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889112E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

