import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
 import { Validators, FormGroup, FormControl } from '@angular/forms';
 import { Router,ActivatedRoute } from '@angular/router';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Platform,ActionSheetController ,NavParams,NavController,ModalController} from '@ionic/angular';

import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { ApisService ,ApiImage} from '../../services/apis.service'

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';

const { Camera } = Plugins;

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  images: ApiImage[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
 
  form: FormGroup;
  desabled: boolean;
  loading:boolean
  displayUserData: any; 
  vehicles_json_data=[];
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
 

 

  constructor(
    public router: Router,
    public menu: MenuController,
    private authService: AuthService,
    private apisService:ApisService,
     private storageService: StorageService,
    private toastService: ToastService,
    navParams: NavParams,
    public modalController: ModalController,


    public actionSheetController: ActionSheetController, 
       private route: ActivatedRoute,
     private platform: Platform,
  ) {
     this.loading=false
    
  }
 
  ngOnInit(){
    this.authService.userData$.subscribe((res:any) => {
      this.displayUserData=res
      })
   }


   loadImages() {
    this.apisService.getImages().subscribe(images => {
      this.images = images;
    });
  }
 
  async selectImageSource() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        }
      },
      {
        text: 'Choose From Photos Photo',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        }
      }
    ];
 
    // Only allow file selection inside a browser
    if (!this.platform.is('hybrid')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }
 
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }
 
  async addImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      //Quality
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source
    });
    
    const blobData = this.apisService.b64toBlob(image.base64String, `image/${image.format}`);
    const imageName = 'Give me a name';
    this.loading=true;
    this.apisService.uploadImage(blobData, imageName, image.format, this.displayUserData.auth_token).subscribe((newImage: any) => {
      console.log(newImage)
      this.loading=false;
       if(!newImage.isError){
        this.toastService.presentToast('Successfully added');
        this.modalController.dismiss(newImage.data);
       }else{
        this.toastService.presentToast('Somthing went wrong');
       }
    });
  }
 
  // Used for browser direct file upload
  uploadFile(event: EventTarget) {
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];
    this.loading=true;
    this.apisService.uploadImageFile(file,this.displayUserData.auth_token).subscribe((newImage: any) => {
      console.log(newImage)
      this.loading=false;
       if(!newImage.isError){
        this.toastService.presentToast('Successfully added');
        this.modalController.dismiss(newImage.data);
       }else{
        this.toastService.presentToast('Somthing went wrong');
       }
    });
  }
 
  deleteImage(image: ApiImage, index) {
    this.apisService.deleteImage(image._id).subscribe(res => {
      this.images.splice(index, 1);
    });
  }



  //Image Upload End

   close()
   {
     this.modalController.dismiss([]);
   }

}
