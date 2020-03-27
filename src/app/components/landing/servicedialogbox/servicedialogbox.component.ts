import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'xb-servicedialogbox',
  templateUrl: './servicedialogbox.component.html',
  styleUrls: ['./servicedialogbox.component.scss']
})
export class ServiceDialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ServiceDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
