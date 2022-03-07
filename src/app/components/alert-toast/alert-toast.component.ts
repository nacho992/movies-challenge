import {Component, TemplateRef} from '@angular/core';

import {ToastService} from '../../services/toast.service';


@Component({
  selector: 'app-alert',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>
      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: {'class': 'toast-container position-fixed start-50 top-0 translate-middle-x', 'style': 'z-index: 1200'}
})
export class AlertToastComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}