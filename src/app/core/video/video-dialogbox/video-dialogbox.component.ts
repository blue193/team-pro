import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'xb-video-dialogbox',
  templateUrl: './video-dialogbox.component.html',
  styleUrls: ['./video-dialogbox.component.scss']
})
export class VideoDialogboxComponent implements OnInit {
  safeUrl: SafeResourceUrl;
  constructor(
    public sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<VideoDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dialogData.data);		
    }

  ngOnInit() {
    
  }

}
