import {Component, Input, OnInit} from '@angular/core';
import {CampsiteService} from "../../services/campsite.service";
import {Photo} from "../../model/photo";
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss']
})
export class ImageComponentComponent implements OnInit {
image:File | null =null;
imageMin:File | null =null;
  images: Photo[] = []
  @Input() secondFormGroup!: FormGroup;

  constructor(private campsiteService:CampsiteService) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  onFileChange(event:any){
    this.image=event.target.files[0];
    this.imageMin=null;
    const fr=new FileReader();
    fr.onload= (evento : any) => {
      this.imageMin=evento.target.result;
    }
    if (this.image){
      fr.readAsDataURL(this.image);
    }
  }
//basic method
  onUpload(): void {
    if(this.image){
      console.log(this.image.size)
      this.campsiteService.upload(this.image).subscribe(data =>{
        this.fetchImages();
      },error => {
        this.reset();
        this.fetchImages();
      })
    }
  }
  onUploadAvecAffectation(): void {
    if (this.image && this.secondFormGroup) {
      const description = this.secondFormGroup.get('description')?.value;
      console.log(this.image.size);
      this.campsiteService.uploadAndAffecttoDetailCampsite(this.image, description).subscribe(data => {
        this.fetchImages();
      }, error => {
        this.reset();
        this.fetchImages();
      });
    }
  }

   reset():void {
    this.image=null;
    this.imageMin=null;
    const imageInputFile= document.getElementById('image') as HTMLInputElement;
    if(imageInputFile){
      imageInputFile.value='';
    }
  }

  fetchImages():void{
    this.campsiteService.list().subscribe(
      (images)=>{
        this.images =images;
      },(error) => {
        console.error("error fetching imgs",error)
      }
    )


  }

  deleteImage(id:any):void{
    Swal.fire({
      title:'confirmation',
      text:'Are u sure u want to continue?',
      icon:'question',
      showCancelButton:true,
      cancelButtonText:'non',
      confirmButtonText:'oui',

    }).then((result)=>{
      if(result.isConfirmed){
        this.campsiteService.delete(id).subscribe(()=>{
          this.fetchImages();
          Swal.fire("deleted");
        },error => {
          console.error("error deleting",error);
        })
      }else if(result.dismiss===Swal.DismissReason.cancel){
        Swal.fire('Operation canceled');
      }
    })
  }


}
