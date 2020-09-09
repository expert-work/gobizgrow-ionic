import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
  
import { Platform,ActionSheetController ,NavController,ModalController} from '@ionic/angular';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { ApisService,ApiImage } from '../../services/apis.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { CustomersPage } from '../../common/customers/customers.page';
import { ItemsPage } from '../../common/items/items.page';
import {  TaxesPage  } from '../../common/taxes/taxes.page';
import { UploadPage } from '../../common/upload/upload.page'

 
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

      }else{ this.router.navigate(['app/estimates']) }
   }

    // //// Image Upload Start

    

    imageUrl(img:any){
      return this.apisService.getImageUrl(img);
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
      this.calculateEstimate();
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
      this.calculateEstimate();


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
           this. calculateEstimate();
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
           this. calculateEstimate();
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
         if(this.apisService.isDefined(data.data.id)){
          console.log(data.data)
          
          let photo= data.data;
          photo.notes='';
          photo.id=this.apisService.makeid(20);
          
          if(type=='Before'){
           let photos= this.data.before_photos;
           photos.push(photo);
           this.data.before_photos=photos;
          }

          if(type=='After'){
            let photos= this.data.after_photos;
            photos.push(photo);
            this.data.after_photos=photos;
           }

           if(type=='Other'){
            let photos= this.data.other_photos;
            photos.push(photo);
            this.data.other_photos=photos;
           }           
          }
      })
      return await modal.present();
    }

    updateImageNoteChange(type:any,item:any,event:any){
              if(type=='Before'){
                    let tempArray=[];
                    this.data.before_photos.map(function (i) {
                      if(item.id ==i.id){  i.notes=event.target.value; } 
                      tempArray.push(i); 
                    });
                    this.data.before_photos=tempArray;
              }

              if(type=='After'){
                    let tempArray=[];
                    this.data.after_photos.map(function (i) {
                      if(item.id ==i.id){  i.notes=event.target.value; } 
                      tempArray.push(i); 
                    });
                    this.data.after_photos=tempArray;
              }

              if(type=='Other'){
                let tempArray=[];
                this.data.other_photos.map(function (i) {
                  if(item.id ==i.id){  i.notes=event.target.value; } 
                  tempArray.push(i); 
                });
                this.data.other_photos=tempArray;
            }
    }


    removeImage(type:any,item:any,){
              if(type=='Before'){
                let tempArray=[];
                this.data.before_photos.map(function (i) {
                  if(item.id !=i.id){  tempArray.push(i);  } 
                });
                this.data.before_photos=tempArray;
              }

              if(type=='After'){
                    let tempArray=[];
                    this.data.after_photos.map(function (i) {
                      if(item.id !=i.id){ tempArray.push(i);   } 
                    });
                    this.data.after_photos=tempArray;
              }

              if(type=='Other'){
                    let tempArray=[];
                    this.data.other_photos.map(function (i) {
                      if(item.id !=i.id){   tempArray.push(i);   } 
                    });
                    this.data.other_photos=tempArray;
                }
      
    }

    updateNotesChange(event:any){
      this.data.notes=event.target.value;

      console.log(this.data);
      
    }
    updatePriceChange(item:any,event:any){
      let tempArray=[];
          this.data.items.map(function (i) {
              if(item.id ==i.id){ i.price=event.target.value; i.total= i.quantity*event.target.value; } 
              tempArray.push(i); 
          });
          this.data.items=tempArray;
          this.calculateEstimate();
    }

    
    updateNameChange(event:any){
      this.data.name=event.target.value;
    }

    updateDueDateChange(event:any){
      this.data.due_date=event.target.value;
    }

    updateStartTimeChange(event:any){
      this.data.start_time=event.target.value;
    }

    updateEndTimeChange(event:any){
      this.data.end_time=event.target.value;
    }

    updateDateChange(event:any){
      this.data.estimate_date=event.target.value;
    }
    updateQuantityChange(item:any,event:any){
      let tempArray=[];
      this.data.items.map(function (i) {
          if(item.id ==i.id){ i.quantity=event.target.value; i.total= i.price*event.target.value; } 
          tempArray.push(i); 
      });
      this.data.items=tempArray;
      this.calculateEstimate();
    }
    updateDescriptionChange(item:any,event:any){
      let tempArray=[];
      this.data.items.map(function (i) {
          if(item.id ==i.id){ i.notes=event.target.value; } 
          tempArray.push(i); 
      });
      this.data.items=tempArray;
    }
    
    updateDiscountChange(event:any){
          this.data.discount=event.target.value;
          this.calculateEstimate();
    }
    changeDiscountType(event:any){
          this.data.discount_type=event.target.value;
          this.calculateEstimate();
    }
    
    calculateEstimate(){
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
      this.calculateEstimate();
    }
    selectVehicle($event) {
       this.data.customer.selectedVehicle=$event.target.value
     // console.log(this.data.customer.selectedVehicle);
    }
  saveForm(type:any){
  



                console.log('before')
                //Estimate name validation
                if(this.data.name==''){
                  this.toastService.presentToast('Please Enter a Estimate Name');
                  return false;
                }

                //Estimate Estimate_date validation
                if(this.data.estimate_date==''){
                  this.toastService.presentToast('Please select a date ');
                  return false;
              }

                //Estimate due_date validation
                if(this.data.due_date==''){
                  this.toastService.presentToast('Please select a due date ');
                  return false;
              }

              
              //Estimate name validation
              if(!this.apisService.isDefined(this.data.customer.id) || this.data.customer.id==''){
                this.toastService.presentToast('Please select a customer ');
                return false;
              }


              //Item name validation
              if(!this.data.items.length){
                this.toastService.presentToast('Please select an Item/Services ');
                  return false;
              }    


              //Subtotal name validation
              if(this.data.sub_total<1){
                this.toastService.presentToast('Subtotal must be greater then zero ');
                  return false;
              }
              


              //amount name validation
              if(this.data.total<1){
                this.toastService.presentToast('Total amount must be grater then zero');
                  return false;
              }
                let form = new FormData();
                form.append('auth_token',this.displayUserData.auth_token);
                form.append('data', JSON.stringify(this.data));

                if(this.apisService.isDefined(this.data.auth_token)){
                  console.log('update call');
                  this.saveUpdateForm(form);
                }else{
                 console.log('Add new call');
                 this.saveAddForm(form)
                }

   }


  saveUpdateForm(form:any){
              this.apisService.estimateUpdate(form).subscribe((result: any) => {
                if(result.data){
                    let navigationExtras: NavigationExtras = {
                      state: {
                          data:  'refresh'
                        }
                    };
                    this.router.navigate(['app/estimates'], navigationExtras);
                } 
              },
              (error: any)=>{
                      if(error.status==0){
                        this.toastService.presentToast('Connection failed');
                      }
                      if(error.status==401){
                        this.toastService.presentToast('Authentcation failed');
                      }
                 }  
              ) 
   }


   saveAddForm(form:any){
                  this.apisService.estimateAdd(form).subscribe((result: any) => {
                    if(result.data){
                        let navigationExtras: NavigationExtras = {
                          state: {
                              data:  'refresh'
                            }
                        };
                        this.router.navigate(['app/estimates'], navigationExtras);
                    } 
              },
                (error: any)=>{
                  if(error.status==0){
                    this.toastService.presentToast('Connection failed');
                  }
                  if(error.status==401){
                    console.log(error);
                    this.toastService.presentToast(error.error.data);
                  }
                }  
            ) 
      }

}
