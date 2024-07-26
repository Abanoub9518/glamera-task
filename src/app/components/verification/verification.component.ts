import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-verification",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./verification.component.html",
  styleUrl: "./verification.component.scss",
})
export class VerificationComponent {
  @Output() closeEvent = new EventEmitter<void>();

  code: string[] = ["", "", "", ""];
  resendTime: number = 59;

  constructor(private router: Router) {
    this.startResendTimer();
  }

  startResendTimer() {
    const interval = setInterval(() => {
      if (this.resendTime > 0) {
        this.resendTime--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  close() {
    this.closeEvent.emit();
  }

  verifyCode() {
    this.router.navigate(["/business-registration"]);
    this.close();
  }
}
