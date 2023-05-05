import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class GalleryService{
    constructor(private http:HttpClient){}

   
    currentPage : number =1;
    pagePhoto : any;
    totalPages: number=0;
   

    search(motCle:string,size:number,page:number){
       
        return this.http.get('https://pixabay.com/api/?key=35976414-430a0b481839bbf8566bcccfc&q=' + motCle + '&per_page=' + size + '&page=' + page)
      }
}