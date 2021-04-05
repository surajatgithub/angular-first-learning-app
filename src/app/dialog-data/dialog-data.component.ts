import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    console.log('data: ', this.data);
    console.log('dialogRef: ', this.dialogRef);
  }

  submitDialogForm(form) {
    console.log(form.value);
    this.dialogRef.close(this.data.animal);
  }
}
