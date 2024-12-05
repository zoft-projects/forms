import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.eventForm = this.fb.group({
      eventName: ['Tech Conference 2024', Validators.required],
      participant: this.fb.group({
        firstName: ['Robert', Validators.required],
        lastName: ['Brown', Validators.required],
        email: ['robert.brown@example.com', [Validators.required, Validators.email]],
      }),
      sessions: this.fb.array([
        this.createSession('AI and Machine Learning', '10:00 AM'),
        this.createSession('Web Development Trends', '2:00 PM')
      ]),
      preferences: this.fb.group({
        meal: ['Vegetarian', Validators.required],
        tShirtSize: ['M', Validators.required],
      })
    });
  }

  createSession(sessionTitle: string, time: string): FormGroup {
    return this.fb.group({
      sessionTitle: [sessionTitle, Validators.required],
      time: [time, Validators.required],
    });
  }

  get sessions() {
    return this.eventForm.get('sessions') as FormArray;
  }

  onSubmit() {
    console.log(this.eventForm.value);
  }
}
