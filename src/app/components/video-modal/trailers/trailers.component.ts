import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Result } from 'src/app/interfaces/ResponseVideos.interface';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header ">
      <h4 class="modal-title">{{video.name}}</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">

      <p></p>
      <div class="ratio ratio-16x9">
      <iframe width="1280" height="753" [attr.src]="this.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
  `,
  styleUrls: ['./trailers.component.scss']
})
export class NgbdModalContent implements OnInit {

  @Input() video: Result
  public url: SafeResourceUrl;
  constructor(public activeModal: NgbActiveModal, public sanitizer: DomSanitizer ) {}

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video.key);
  }

}

@Component({
        selector: 'app-trailers',
        templateUrl: './trailers.component.html'
})
export class TrailersComponent {

  @Input() num;
  @Input() video: Result


  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent , { centered: true, size: 'lg' });
    modalRef.componentInstance.video = this.video;
  }
}
