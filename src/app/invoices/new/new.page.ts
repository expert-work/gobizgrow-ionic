import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
 
import { Platform,ActionSheetController ,NavController,ModalController} from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { ApisService,ApiImage } from '../../services/apis.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { CustomersPage } from '../../common/customers/customers.page';
import { ItemsPage } from '../../common/items/items.page';
import {  TaxesPage  } from '../../common/taxes/taxes.page';
import { UploadPage } from '../../common/upload/upload.page'

const { Camera } = Plugins;

 
@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  images: ApiImage[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
 

  loading:boolean;
  displayUserData: any;
  data: any;
  displayItemsBlock:boolean
  displayPhotosBlock:boolean
  displayCustomerNoteBlock:boolean
  isTaxs:any
  isDiscount:boolean
  selectedVehicle:any
  guestPicture:any


  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };


  constructor(
    public actionSheetController: ActionSheetController, 
    private apisService: ApisService,
    private toastService:ToastService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private platform: Platform,

  ) { 
        this.loading=true
        this.displayItemsBlock=false;
        this.displayPhotosBlock=false;
        this.displayCustomerNoteBlock=true;
        this.isDiscount=false;
        this.isTaxs=false;

        this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.data = this.router.getCurrentNavigation().extras.state.data;
            if(  this.data  !== undefined){ this.loading=false; }
          }
        });
  }
 
  ngOnInit(){
    this.authService.userData$.subscribe((res:any) => {
      this.displayUserData=res
     })

     if(  this.data  !== undefined){ 
        this.loading=false; 
        
        this.isDiscount= ((this.data.discount_type=='Fixed') || (this.data.discount_type=='Percentage'));

      }else{ this.router.navigate(['app/invoices']) }
   }

    // //// Image Upload Start

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
   
      this.apisService.uploadImage(blobData, imageName, image.format, this.displayUserData.auth_token).subscribe((newImage: ApiImage) => {
        this.images.push(newImage);
      });
    }
   
    // Used for browser direct file upload
    uploadFile(event: EventTarget) {
      const eventObj: MSInputMethodContext = event as MSInputMethodContext;
      const target: HTMLInputElement = eventObj.target as HTMLInputElement;
      const file: File = target.files[0];
      this.apisService.uploadImageFile(file,this.displayUserData.auth_token).subscribe((newImage: ApiImage) => {
        this.images.push(newImage);
      });
    }
   
    deleteImage(image: ApiImage, index) {
      this.apisService.deleteImage(image._id).subscribe(res => {
        this.images.splice(index, 1);
      });
    }
  


    //Image Upload End

    displayItemsBlockToggle(){
      this.displayItemsBlock=!this.displayItemsBlock;
    }
    displayPhotosBlockToggle(){
    this.displayPhotosBlock=!this.displayPhotosBlock;
    }
    displayCustomerNoteBlockToggle(){
      this.displayCustomerNoteBlock=!this.displayCustomerNoteBlock;
    }

    isTaxsToggle(){
      this.isTaxs=!this.isTaxs;
      if(!this.isTaxs){
        this.data.taxes=[];
        this.data.total_tax=0;
      } 
      this.calculateInvoice();
    }

    isDiscountToggle(){
      this.isDiscount=!this.isDiscount;
      if(!this.isDiscount){
        this.data.discount_type="";
        this.data.discount=0;
        this.data.discount_val=0;
      }else{
        this.data.discount_type="Fixed";
      }
      this.calculateInvoice();


    }

    async openCustomerModal() {
      const modal = await this.modalController.create({
        component: CustomersPage,
        componentProps: { data: this.data.customer },
        backdropDismiss:false
      });
      modal.onDidDismiss().then(data=>{
         if(this.apisService.isDefined(data.data.id)){
           console.log(data.data);
           this.data.customer=data.data;
          }
      })
      return await modal.present();
    }
 


 
    async openItemsModal() {
      const modal = await this.modalController.create({
        component: ItemsPage,
        componentProps: { data: this.data.items },
        backdropDismiss:false
      });
      modal.onDidDismiss().then(data=>{
         if(this.apisService.isDefined(data.data[0])){
           console.log(data.data);
           this.data.items=data.data;
           this.displayItemsBlock=true;
           this. calculateInvoice();
          }
      })
      return await modal.present();
    }
    async openTaxesModal() {
      const modal = await this.modalController.create({
        component: TaxesPage,
        componentProps: { data: this.data.taxes },
        backdropDismiss:false
      });
      modal.onDidDismiss().then(data=>{
         if(this.apisService.isDefined(data.data[0])){
           this.data.taxes=data.data;
           this. calculateInvoice();
           this.isTaxs=true;  
          }
      })
      return await modal.present();
    }
    async openUploadModal(type:any) {
      const modal = await this.modalController.create({
        component: UploadPage,
        componentProps: { data: this.data.taxes },
        backdropDismiss:false
      });
      modal.onDidDismiss().then(data=>{
         if(this.apisService.isDefined(data.data[0])){
            
          }
      })
      return await modal.present();
    }



    updatePriceChange(item:any,event:any){
      let tempArray=[];
          this.data.items.map(function (i) {
              if(item.id ==i.id){ i.price=event.target.value; i.total= i.quantity*event.target.value; } 
              tempArray.push(i); 
          });
          this.data.items=tempArray;
          this.calculateInvoice();
    }

    updateQuantityChange(item:any,event:any){
      let tempArray=[];
      this.data.items.map(function (i) {
          if(item.id ==i.id){ i.quantity=event.target.value; i.total= i.price*event.target.value; } 
          tempArray.push(i); 
      });
      this.data.items=tempArray;
      this.calculateInvoice();
    }
    updateDescriptionChange(item:any,event:any){
      let tempArray=[];
      this.data.items.map(function (i) {
          if(item.id ==i.id){ i.description=event.target.value; } 
          tempArray.push(i); 
      });
      this.data.items=tempArray;
    }
    
    updateDiscountChange(event:any){
          this.data.discount=event.target.value;
          this.calculateInvoice();
    }
    changeDiscountType(event:any){
          this.data.discount_type=event.target.value;
          this.calculateInvoice();
    }
    
    calculateInvoice(){
      let sub_total:number;
      sub_total=0;
          this.data.items.map(function (i) {
            sub_total=sub_total+parseFloat(i.total);
          });
      this.data.sub_total=sub_total;

      if(this.data.discount_type=='Fixed'){
        this.data.discount_val=this.data.discount;
      }
      if(this.data.discount_type=='Percentage'){
        this.data.discount_val=(this.data.sub_total* this.data.discount)/100;
      }


      
      let totalAmount=this.data.sub_total- this.data.discount_val;
      let taxes=[];
      let totalTaxes=0
      this.data.taxes.map(function (tax) {
           let t:any
           t= (tax.percent*totalAmount)/100;
         totalTaxes=totalTaxes+parseFloat(t)
         tax.tax_amount=t;
         taxes.push(tax)
      });
      this.data.total_tax=totalTaxes;
      
      this.data.total=totalAmount+totalTaxes;








     // sub_total
    }
    //Fixed
    //Percentage
    //discount_type


    removeItem(item:any){
      let tempArray=[];
      this.data.items.map(function (i) {
          if(item.id !=i.id){ tempArray.push(i);  } 
      });
      this.data.items=tempArray;
      this.calculateInvoice();
    }
    selectVehicle($event) {
       this.data.customer.selectedVehicle=$event.target.value
     // console.log(this.data.customer.selectedVehicle);
    }
  saveForm(){

  }
}
