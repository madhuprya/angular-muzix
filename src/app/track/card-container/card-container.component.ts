import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Images } from '../images';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Track } from '../track';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  track: Array<Images>;
  private statusCode: number;
  constructor(private _trackService: TrackService) {
   }

  ngOnInit() {
    this._trackService.getTrackDetails().subscribe((data: any) => {this.track = data.tracks.track;
      console.log(this.track);
    });
  }

  addToWishList(track) {
   const newTrack = new Track();
   newTrack.trackId = track.url;
   newTrack.trackName = track.name;
   newTrack.trackComment = 'Added Track';
   this._trackService.addTrackToWishList(newTrack).subscribe((res: any) => {console.log(res);
  });
  }
}
