import { Component,OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  infos: {nom:string, email:string, tel:number};
 
  comments:any;
  commentaire = { date: null , message:"" };

  constructor(private aboutService:AboutService){
  
    this.infos= this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();

  } 

  ngOnInit(){}
  
  onAddCommentaire(c:any){
   this.aboutService.addComment(c);
  
    this.commentaire.message="";
    this.comments = this.aboutService.getAllComments();
   
  }
}
