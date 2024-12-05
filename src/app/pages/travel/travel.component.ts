import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  travelFormModel!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit():void{
  this.travelFormModel=this.fb.group({
    traveler: this.fb.group({
      name: ['Emily Davis', Validators.required],
      passportNumber: ['A1234567', Validators.required],
      dateOfBirth: ['1990-06-15', Validators.required],
    }),
    tripDetails: this.fb.group({
      departure: this.fb.group({
        city: ['New York', Validators.required],
        date: ['2024-12-15', Validators.required],
      }),
      destination: this.fb.group({
        city: ['Paris', Validators.required],
        date: ['2024-12-22', Validators.required],
      }),
    }),
    accomodation: this.fb.array([
      this.createAccomodation('Eiffel View Hotel', '2024-12-15', '2024-12-22'),
    ]),
    preferences: this.fb.group({
      seatPreference: ['Window',Validators.required],
      mealPreference: ['Vegan',Validators.required],
    })
  })
}

createAccomodation(hotelName: string, checkInDate: string,checkOutDate:string): FormGroup {
  return this.fb.group({
    hotelName: [hotelName, Validators.required],
    checkInDate: [checkInDate, Validators.required],
    checkOutDate: [checkOutDate, Validators.required], 
  });
}

get accomodation() {
  return this.travelFormModel.get('accomodation') as FormArray;
}
submit(){
  console.log(this.travelFormModel.value);
  console.log(this.travelFormModel.valid);

  if (this.travelFormModel.valid) {
    alert('Form submitted successfully')
  } 
  else {
    alert("Invalid Form")
  }
}
}
