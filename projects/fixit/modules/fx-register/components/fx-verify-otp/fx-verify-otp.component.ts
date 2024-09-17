import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { contentFourConfig, contentThreeConfig, linkConfig, verifyButtonConfig } from './config';

@Component({
  selector: 'fx-verify-otp',
  templateUrl: './fx-verify-otp.component.html',
  styleUrls: ['./fx-verify-otp.component.scss']
})
export class FxVerifyOtpComponent {

  @Output() event: EventEmitter<any> = new EventEmitter();

  contentThreeConfig = contentThreeConfig;
  contentFourConfig = contentFourConfig;
  verifyButtonConfig = verifyButtonConfig;
  linkConfig = linkConfig;

  @ViewChild('otp1') otp1!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.otp1.nativeElement.focus();
  }

  moveToNext(event: KeyboardEvent, nextInput: HTMLInputElement): void {
    if (event.key === 'Enter') {
      nextInput.focus();
    }
  }

  onVerify(): void {
    this.event.emit();
  }
}
