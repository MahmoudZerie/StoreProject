import { ProductName } from "../../types"

export interface IProduct{
	id?:string | undefined
	price:string
	title :string
	description:string
	imageURL:string
	colors:string[]
	category:{
		name:string
		imageURL:string
	}
}
export interface IFormInput{
	id:string
	name: ProductName;
	label:string
	type:string
}
export interface ICategory{
	id:string;
	name:string;
	imageURL:string;
}