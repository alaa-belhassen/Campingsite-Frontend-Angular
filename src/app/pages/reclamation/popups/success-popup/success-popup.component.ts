import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-success-popup',
  template: `
    <div class="popup">
      <div class="popup-content">
        <h2>{{ message }}</h2>
        <button (click)="close()">OK</button>
      </div>
    </div>
  `,
  styles: [`
    .popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .popup-content {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }
    .popup-content h2 {
      margin-bottom: 20px;
    }
  `]
})
export class SuccessPopupComponent {
  @Input() message: string = 'Reclamation Sent Successfully!';
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
