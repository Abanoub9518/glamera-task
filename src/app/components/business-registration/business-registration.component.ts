import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-business-registration",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: "./business-registration.component.html",
  styleUrl: "./business-registration.component.scss",
})
export class BusinessRegistrationComponent {
  businessForm: FormGroup;
  selectedBusinessType!: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.businessForm = this.fb.group({
      businessName: ["", Validators.required],
      businessType: ["", Validators.required],
      governorate: ["", Validators.required],
      district: ["", Validators.required],
      knowUs: ["", Validators.required],
      usingSystem: ["", Validators.required],
    });
  }
  selectBusinessType(type: string) {
    this.selectedBusinessType = type;

    this.businessForm.get("businessType")?.setValue(type);
    this.businessForm.get("businessType")?.markAsTouched();
  }

  onSubmit() {
    if (this.businessForm.valid) {
      this.router.navigate(["/success"]);
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
