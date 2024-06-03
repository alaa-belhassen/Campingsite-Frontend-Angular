import {Component, Input, OnInit} from '@angular/core';
import {CampsiteService} from "../../services/campsite.service";
import {Photo} from "../../model/photo";
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import { UserServiceService } from 'src/app/services/user-service.service';

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
  @Input() idProduit!: any;
  @Input() email!: any;


  constructor(private campsiteService:CampsiteService,private produitService:ProduitserviceService ,private userService : UserServiceService) { }

  ngOnInit(): void {
    this.fetchImages();
    console.log(this.secondFormGroup)
    console.log(this.idProduit)
    console.log(this.email)
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
      const description = this.secondFormGroup?.get('description')?.value;
      console.log(this.image.size);
      this.campsiteService.uploadAndAffecttoDetailCampsite(this.image, description).subscribe(data => {
        this.fetchImages();
      }, error => {
        this.reset();
        this.fetchImages();
      });
    }
  }

  onUploadAvecAffectationToProduct(): void {
    if (this.image && this.idProduit) {
      console.log(this.image.size);
      this.produitService.uploadAndAffecttoDetailCampsite(this.image, this.idProduit).subscribe(data => {
        this.fetchImages();
      }, error => {
        this.reset();
        this.fetchImages();
      });
    }
  }
  onUploadAvecAffectationToUser(): void {
    if (this.image && this.email) {
      console.log(this.image.size);
      this.userService.uploadAndAffecttoUser(this.image, this.email).subscribe(data => {
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
