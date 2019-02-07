import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../track';
import { ActivatedRoute } from '@angular/router';
import { TrackService } from '../track.service';
import { Images } from '../images';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() track: Track;
@Input()
imageName: Images;
@Input()
imageUrl: Images;
@Output() addTrack = new EventEmitter();

constructor( private trackService: TrackService) {
   }
  ngOnInit() {
  }
  saveTrack() {
    this.addTrack.emit(this.track);
  }

}
