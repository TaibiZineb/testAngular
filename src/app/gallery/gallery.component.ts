import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from "@angular/common/http";
import { GalleryService } from 'src/services/gallery.service';





@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  //pagePhoto : any={hits:[]};
 
  currentPage : number =1;
  pages : Array<number>=[];
  totalPages: number=0;
  pagePhoto : any;
  motCle:string="";
  size :number= 10;
 
  
  constructor( private galleryService:GalleryService ) {}
  
  ngOnInit():void{}

 
    onSearch(dataForm:any){
      this.galleryService.search(dataForm.motCl,this.size,this.currentPage)
       .subscribe((data:any)=>{
         this.pagePhoto=data; 
         this.totalPages=data.totalHits/ this.size;
         if(data.totalHits % this.size  != 0) ++this.totalPages;
         this.pages= new Array(this.totalPages);
      },error=>{
        console.log(error);
      } )
    }

  goToPage(i: number){
    this.currentPage = i+1;
    this.onSearch({motCle:this.motCle});
  }
  
}

