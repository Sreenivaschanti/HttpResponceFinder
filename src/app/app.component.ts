import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HttpResponceFinder';
  MappedResult:[{api:any,status:any}]=[{api:'test',status:400}];
  constructor(private http:HttpClient)
  {

  }
  ngOnInit()
  {
    const names=['srinivas','adam','Rock','Tata'];
    

    this.http.get('https://Srinivas.com',{observe: 'response'}).subscribe(x=>
      {

        //window.alert(x.status);
       // this.alertStatus(x.status);
        this.MappedResult.push({api:'https://Srinivas.com',status:x.status})
        console.log(x);
      },()=>{
        window.alert('URL Not Found');
        this.MappedResult.push({api:'https://Srinivas.com',status:404})
      });

    for(let i of names)
    {
      this.http.get('https://api.nationalize.io/?name='+i,{observe: 'response'}).subscribe((x)=>
      {
     this.alertStatus(x.status);
     this.MappedResult.push({api:'https://api.nationalize.io/?name='+i,status:x.status})
       // window.alert(x.status);
        console.log(x);
      },()=>{
        window.alert('URL Not Found');
        this.MappedResult.push({api:'https://Srinivas.com',status:404});
      })
    }

  
  }
  alertStatus(status:number)
  {
     if(status==500)
        {
         // window.alert('Server Issue')
         return 'Server Issue';
        }
        else if(status==400)
        {
          //window.alert('Bad Request')
          return 'Bad Request';
        }
        else{
          return 'Up';
        }
  }
}
