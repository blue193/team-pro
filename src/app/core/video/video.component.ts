import { VideoDialogboxComponent } from './video-dialogbox/video-dialogbox.component';
import { iVideo } from './../../shared/_models/video.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'xb-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  @Input() video: iVideo;
  @Input() showTitle: boolean;
  innerWidth: any; 

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  // load preview of the video in a popup modal box. 
  loadPreview() {
    if ( this.video.url !== ''){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;

      // calculate dialog box width. max width 600.
      this.innerWidth = window.innerWidth;
      let relativeWidth = (this.innerWidth * 80) / 100; // take up to 80% of the screen size
      relativeWidth = ( relativeWidth > 600 ) ? 600 : relativeWidth;

      let relativeHeight = (relativeWidth * 9) / 16 + 50; // 16:9 
      // assign width and height to dialogConfig
      dialogConfig.width = relativeWidth + 'px';
      dialogConfig.height = relativeHeight + 'px';
      dialogConfig.data = { data: this.video.url };
      
      this.dialog.open(VideoDialogboxComponent, dialogConfig);
    }
  }


}
