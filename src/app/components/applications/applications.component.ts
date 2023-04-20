import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationsPopupComponent } from '../applications-popup/applications-popup.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications: any[];
  highestCosts: any[];
  isApplicationsPopupOpen = false;

  constructor(private apiService: ApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.apiService.getApplications().subscribe(
      (data) => {
        this.applications = data;
      },
      (error) => {
        console.error('Failed to get applications data:', error);
      }
    );
  }

  openApplicationDetails(applicationName: string) {
    this.apiService.getApplicationByName(applicationName).subscribe(
      (data) => {
        this.isApplicationsPopupOpen = true;
        const modalRef = this.modalService.open(ApplicationsPopupComponent, { centered: true });
        modalRef.componentInstance.applications = data; // update this line
      },
      (error) => {
        console.error(`Failed to get application data for ${applicationName}:`, error);
      }
    );
  }

  closeApplicationsPopup(){
    this.modalService.dismissAll();
    this.isApplicationsPopupOpen = false;
  }
}
