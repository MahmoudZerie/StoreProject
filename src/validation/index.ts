// import { colors } from "../components/data";

export const  productValidation=(product:{title:string,description:string,imageURL:string,price:string})=>{
const errors:{title:string,description:string,imageURL:string,price:string}={
	title:"",
	description:"",
	imageURL:"",
	price:"" ,
	// colors:""
};
const validUrl=/^(ftp|http|https):\/\/[^"]+$/.test(product.imageURL);
if(!product.title.trim()|| product.title.length<5|| product.title.length>30){
	errors.title="Product title must be between 5 and 30 characters!"
}
if(!product.description.trim()|| product.description.length<10|| product.description.length>900){
	errors.description="Produvt description must be between 10 and 900 characters!"
}
if(!product.imageURL.trim()||!validUrl){
	errors.imageURL="Valid image URL is required";
}
if(!product.price.trim()||isNaN(Number(product.price))){
	errors.price="Valid price is required!";
}
// if(!product.tempColors.length){
// 	errors.colors="You must add at least one color"
// }
return errors;
}