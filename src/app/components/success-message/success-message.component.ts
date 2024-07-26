import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from "@angular/animations";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-success-message",
  standalone: true,
  imports: [CommonModule],

  templateUrl: "./success-message.component.html",
  styleUrls: ["./success-message.component.scss"],
  animations: [
    trigger("checkmarkAnimation", [
      state(
        "initial",
        style({
          opacity: 0,
          transform: "scale(0)",
        })
      ),
      state(
        "final",
        style({
          opacity: 1,
          transform: "scale(1)",
        })
      ),
      transition("initial => final", [animate("0.3s ease-in")]),
    ]),
  ],
})
export class SuccessMessageComponent {
  animationState = "initial";

  ngOnInit() {
    setTimeout(() => {
      this.animationState = "final";
    }, 100); // Delay to allow initial render
  }
}
