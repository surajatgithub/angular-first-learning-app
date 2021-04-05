import { DialogDataComponent } from './../dialog-data/dialog-data.component';
import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';

export interface DialogDataRepresetation {
  name: string,
  animalName: string
};

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  isCheckboxChecked: boolean = true;
  checkboxValue: number = 1;
  selectedGender: string;
  datePickerMinDate: Date = new Date(2020, 12, 31);
  datePickerMaxDate: Date = new Date(2021, 3, 31);
  dialogData: DialogDataRepresetation = {
    name: "",
    animalName: ""
  };
  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  onCheckboxChange($event) {
    console.log($event);
  }

  onChangeGenderRadioButton($event: MatRadioChange) {
    this.selectedGender = $event.value;
    console.log($event);
  }

  onChangeSelectColorField($event) {
    console.log($event);
  }

  openDialogBox() {
    this.dialog
      .open(DialogDataComponent, { data: this.dialogData })
      .afterClosed()
      .subscribe((animalName) => {
        this.dialogData.animalName = animalName;
      });
  }
}