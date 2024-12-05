import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      surveyTitle: ['Global Employee Satisfaction Survey 2024', Validators.required],
      respondent: this.fb.group({
        employeeId: ['EMP12345', Validators.required],
        name: this.fb.group({
          firstName: ['Michael', Validators.required],
          lastName: ['Scott', Validators.required]
        }),
        department: ['Sales', Validators.required],
        contact: this.fb.group({
          email: ['michael.scott@dundermifflin.com', [Validators.required, Validators.email]],
          phone: ['987-654-3210', Validators.required]
        })
      }),
      surveyResponses: this.fb.array([]),
      additionalComments: ['Overall, I appreciate the efforts of the company to ensure employee satisfaction.']
    });

  }

  submitForm(): void {
    console.log(this.surveyForm.value);
  }
}
