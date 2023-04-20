import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rawData: any;
  pagedData: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  isLoading: boolean = true;
  pageSizeOptions: number[] = [5, 10, 25, 50]; 
  pageIndex = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRawData().subscribe(data => {
      this.rawData = data;
      this.totalItems = this.rawData.length;
      this.isLoading = false;
      this.updatePagedData();
    }, error => {
      console.error('Failed to fetch raw data:', error);
      this.isLoading = false;
    });
  }
  updatePagedData() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.rawData.slice(startIndex, endIndex);
  }

  onPageChange(event:any) {
    this.currentPage = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.updatePagedData();
  }

}
