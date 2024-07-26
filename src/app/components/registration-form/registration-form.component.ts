import { CommonModule } from "@angular/common";
import { Component, TemplateRef, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { VerificationComponent } from "../verification/verification.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-registration-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, VerificationComponent],
  templateUrl: "./registration-form.component.html",
  styleUrl: "./registration-form.component.scss",
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;
  isPasswordVisible = false;
  @ViewChild("verificationTemplate")
  verificationTemplate!: TemplateRef<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required],
      password: ["", Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  openVerificationModal() {
    this.modalService.open(this.verificationTemplate, { centered: true });
  }

  closeVerification() {
    this.modalService.dismissAll();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.openVerificationModal();

      // this.router.navigate(["/business-registration"]);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
