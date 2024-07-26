import { Routes } from "@angular/router";
import { RegistrationFormComponent } from "./components/registration-form/registration-form.component";
import { BusinessRegistrationComponent } from "./components/business-registration/business-registration.component";
import { VerificationComponent } from "./components/verification/verification.component";
import { SuccessMessageComponent } from "./components/success-message/success-message.component";

export const routes: Routes = [
  {
    path: "",
    component: RegistrationFormComponent,
  },
  {
    path: "register",
    component: RegistrationFormComponent,
  },
  {
    path: "business-registration",
    component: BusinessRegistrationComponent,
  },
  {
    path: "success",
    component: SuccessMessageComponent,
  },
];
