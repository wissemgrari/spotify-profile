import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from "chart.js";
import { TrackAudioFeature } from "../../models/track-audio-feature.model";
import { Observable } from "rxjs";
import { TrackService } from "../../services/track.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'audio-feature',
  templateUrl: './audio-feature.html',
  styleUrls: ['./audio-feature.component.css']
})
export class AudioFeature implements OnInit {
  id = '';
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private trackService: TrackService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
   this.trackService.getTrackAudioFeature(this.id).subscribe((response: TrackAudioFeature | undefined) => {
      if(response) {
        this.updateChartData(response);
      }
      this.isLoading = false;
    })

  }

  data: number[] = [];
  labels = ['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence'];
  barChartLegend = false;
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        data: [],
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
    responsive: true,
    maintainAspectRatio: false,
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

  updateChartData(data: TrackAudioFeature): void {
      this.barChartData.datasets[0].data = [
       data.acousticness,
        data.danceability,
        data.energy,
        data.instrumentalness,
        data.liveness,
        data.speechiness,
        data.valence,
      ];
  }
}
