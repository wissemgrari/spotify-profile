import { Component } from '@angular/core';
import { ChartConfiguration } from "chart.js";

@Component({
  selector: 'audio-feature',
  templateUrl: './audio-feature.html',
  styleUrls: ['./audio-feature.component.css']
})
export class AudioFeature {
  data = [0.769, 0.854, 0.554, 0, 0.0749, 0.172, 0.272]; // this is dump data used for testing purpose and will be replaced with actual data
  labels = ['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence'];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(104, 132, 245, 0.3)',
          'rgba(153, 102, 255, 0.3)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(104, 132, 245, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      }
    ],
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
     x: {
       grid: {
         color: 'rgba(255, 255, 255, 0.3)',
       },
       ticks: {
         font: {
           size: 12
         }
       },
     },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        ticks: {
          font: {
            size: 12
          }
        },
      },
    },
  }

}
