import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';
  LineChart: any = [];
  BarChart: any = [];
  PieChart: any = [];
  PolarChart: any = [];

  ngOnInit() {
     // Line chart:
  this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June','July','Aug','Sep','Oct', "Nov",'Dec'],
 datasets: [{
     label: 'Number of Items Sold in Months',
     data: [9, 7 , 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
     fill: false,
     lineTension: 0.2,
     borderColor: "red",
     borderWidth: 1
 }]
},
options: {
  legend: {
    display: false
  },
 title: {
     text: "Line Chart",
     display: true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero: true
         }
     }]
 }
}
});

// Bar chart:
  this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
 datasets: [{
     label: '# of Votes',
     data: [9, 7 , 3, 5, 2, 10],
     backgroundColor: [
      'red',
      'green',
      'yellow',
      'grey',
      'blue',
     ],
     borderColor: [
      'red',
      'green',
      'yellow',
      'grey',
      'blue',
     ],
     borderWidth: 1
 }]
},
options: {
 title: {
     text: "Bar Chart",
     display: true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero: true
         }
     }]
 }
}
});

// pie chart:
  this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
 datasets: [{
     label: '# of Votes',
     data: [9, 7 , 3, 5, 2, 10],
     backgroundColor: [
      'red',
      'green',
      'yellow',
      'grey',
      'blue',
     ],
     borderColor: [
      'red',
      'green',
      'yellow',
      'grey',
      'blue',
     ],
     borderWidth: 1
 }]
},
options: {
 title: {
     text: "Bar Chart",
     display: true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero: true
         }
     }]
 }
}
});



/// polarChart


  this.PolarChart = new Chart('PolarChart', {
  type: 'polarArea',
data: {
 labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
 datasets: [{
     label: 'Number of Items Sold in Months',
     data: [6, 12 , 14, 20, 10, 22],
     fill: false,
     lineTension: 0.2,
     backgroundColor: [
      'red',
      'green',
      'yellow',
      'grey',
      'blue',
  ],
  borderColor: [
    'red',
    'green',
    'yellow',
    'grey',
    'blue',
  ],
  borderWidth: 1
 }]
},
options: {
  legend: {
    display: false
  },
 title: {
     text:'Line Chart',
     display: true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero: true
         }
     }]
 }
}
});





  }
}
