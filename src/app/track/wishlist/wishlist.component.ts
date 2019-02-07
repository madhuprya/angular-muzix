import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Track } from '../track';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  private tracks: Array<Track>;

  constructor(private _trackService: TrackService ) {
    this.tracks = [];
   }

  ngOnInit() {
    this.fetchTracks();
    console.log();
  }

  private fetchTracks() {
    this._trackService.getTracks().subscribe((res: any) => {
      this.tracks = res;
      console.log(this.tracks);
      });
  }


}
