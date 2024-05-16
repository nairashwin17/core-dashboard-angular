import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  public customerList =[
      {
        "name": "Alice Smith",
        "username": "alicesmith",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-1.jpg",
        "checked":true
      },
      {
        "name": "Bob Johnson",
        "username": "bobjohnson",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-5.jpg",
        "checked":false
      },
      {
        "name": "Emma Davis",
        "username": "emmadavis",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-3.jpg",
        "checked":false
      },
      {
        "name": "Michael Wilson",
        "username": "michaelwilson",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-4.jpg",
        "checked":true
      },
      {
        "name": "Sophia Brown",
        "username": "sophiabrown",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-5.jpg",
        "checked":false
      },
      {
        "name": "David Martinez",
        "username": "davidmartinez",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-3.jpg",
        "checked":false
      },
      {
        "name": "Olivia Anderson",
        "username": "oliviaanderson",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-4.jpg",
        "checked":false
      },
      {
        "name": "James Taylor",
        "username": "jamestaylor",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-2.jpg",
        "checked":false
      },
      {
        "name": "Ava Thomas",
        "username": "avathomas",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-1.jpg",
        "checked":true
      },
      {
        "name": "Daniel Hernandez",
        "username": "danielhernandez",
        "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-4.jpg",
        "checked":false
      }
    ];

    allChecked = false;
    selectedName:any = this.customerList[0].name;
    selectImage:any= this.customerList[0].image_url;
    selectUsername:any = this.customerList[0].username;
    public subscription:Subscription = new Subscription();

    ngOnInit(){
      // this.customerListApi(); //Called when api call happens through api
      this.allChecked = false;
    }

    public checkAll(event:any) {
      this.customerList.forEach(item => item.checked = event.target.checked);
    }
  
    public checkboxChanged() {
      this.allChecked = this.customerList.every(item => item.checked);
    }

    public onDataClick(data:any) {
      console.log('Selected item:', data);
      this.selectUsername = data.username;
      this.selectedName = data.name;
      this.selectImage = data.image_url;
    }

    /**
     * Commented function which will call api from end point and bind listing data to customer list
     */
    // public customerListApi(){
    //   this.subscription.add(
    //     this.httpService.get(apiURL,params).subscribe(
    //       (data:any)=>{
    //     if(data && data['code'] == 200){
    //       this.customerList = data['data'];
    //     }
    //     else{
    //       console.log(data['message']); //show error or all unsuccessful api message
    //     };
    //   }))
    // }

}
