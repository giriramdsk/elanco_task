import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resource',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: any[] = [];
  displayedColumns: string[] = ['name', 'description', 'category'];
  selectedResourceName: string = '';
  selectedResource: any = null;
  isLoading: boolean = false;
  visible : boolean = false
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.isLoading = true;
    this.apiService.getResources().subscribe(
      (response: any) => {
        console.log(response)
        this.resources = response;
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  loadResourceDetails(resourceName: string): void {
    this.isLoading = true;
    this.selectedResourceName = resourceName;
    this.selectedResource = null;
    this.apiService.getResourceByName(resourceName).subscribe(
      (response: any) => {
        console.log(response)
        this.visible = true;
        this.selectedResource = response;
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  closeModal(): void {
    this.visible=false
    this.selectedResourceName = '';
    this.selectedResource = null;
  }
}
