import Image from "./UI/Image";
import Button from "./UI/Button";
import CircleColor from "./CircleColor";
import { IProduct } from "./interfaces";
import { numberWithCommas, txtSlicer } from "../utils/functions";
import { memo } from "react";
interface IProps{
product:IProduct
setProductToEdit:(product:IProduct)=>void;
openEditModal:()=>void
setTempEditColors:(colors:string[])=>void
idx:number;
openConfirmModal:()=>void
setProductToEditIdx:(value:number)=>void
}

const ProductCard=({product,setProductToEdit,openEditModal,idx,setProductToEditIdx,setTempEditColors,openConfirmModal}:IProps)=>{
	const {title,description,imageURL,price,colors}=product;
	 /* ------- RENDER -------  */
	 const renderProductColors = colors.map(color => <CircleColor key={color} color={color} />);
	//  ----------- Handler ------
	const onEdit=()=>{
		setProductToEdit(product);
		setTempEditColors(product.colors);
		openEditModal();
		setProductToEditIdx(idx);
	}

	const onRemove=()=>{
		openConfirmModal();
		setProductToEdit(product);
	}

	return (
		<div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-3 flex flex-col">
			<Image imgeUrl={imageURL} alt={product.category.name} className="rounded-md mb-2 w-full h-64 overflow-hidden lg:object-cover"/>
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="text-gray-400 ">{txtSlicer(description,100)}</p>
			
			<div className="flex items-center flex-wrap my-3 space-x-1">
			{!colors.length ? <p className="min-h-[20px]">Not available colors!</p> : renderProductColors}
			</div>

			<div className="flex items-center justify-between"> 
				<span className="text-green-500 font-medium text-xl">${numberWithCommas(price)}</span>
				<Image imgeUrl={imageURL} alt={product.category.name} className="w-11 h-10 rounded-full object-fill"/>
			</div>

			<div className="flex items-center justify-between space-x-2 mt-3">
			<Button className="p-2 bg-green-900 " width="w-full" onClick={onEdit}>Edit</Button>
			<Button className="p-2 bg-red-900 " width="w-full" onClick={onRemove}>Remove</Button>	
			</div>
		
		</div>
	)
}
export default memo(ProductCard);