import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Yeoman {
  isLoaded:Boolean=false;
  virtualRoute:string="first";
  categorySelected:string="first";
  products:any=[];
  preview:any={};
  categories:any={};
  allcategory:any=[];
  allCategoriesSize:number=0;
  cart:any;
  car:any[]=[];

  ticket:any[]=[];
  currency:number=1;
  init:number=1;
  end:number=12;
  numProd:number=0;
  subTotalGral:number=0;
  results:number=0;
  bramch:any={};
  deal:any={};
  userActive:any={};
  totalProducts:number=0;
  imagePreviewProduct:string="";
    subTotal:number=0;
  review:boolean=false;
  vector:any={};       
  string:string=""; 
  distance:string="";
  deviceType:string="";
  distance2:number=0;
  duration:number=0;
  biker:boolean=false;
  hidden:boolean=false;
  details:boolean=false;
  editing:boolean=false;
  profile:boolean=true;
  isLogged:boolean=false;
  bikerStatus:boolean=false;
  skip:number=0;
  limit:number=12;
  type:string="Passenger"; 
  placeholder:string="a donde deseas ir?"; 
  any:any[]=[]; 
  number:number=0;
  rides:boolean=false;
  admin:boolean=false;
  name:string=""; 
  idResult:string=""; 
  idApp:string=""; 
  userd:string=""; 
  role:string=""; 
  idBuckapicard:string=""; 
  idCard:string=""; 
  idBranch:string=""; 
  branch:string=""; 
  userId:string=""; 
  userType:string=""; 
  email:string=""; 
  cards:any[]=[]; 

  serialT:number=0;

  config: {
    clientSelected:number;
  } = {clientSelected:-1} ;
  origin: {
    name: string;
    restUrl: string;
    GQLUrl: string;
  } = {
    name: "default",
    restUrl: "https://db.buckapi.us:9010",
    GQLUrl: "<origin GQL url>",
  };
  constructor() { }
}
