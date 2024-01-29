import { InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement>{}

	

const Input=({...rest}:IProps)=>{
	return (
 		 <input style={{colorScheme: 'light dark' ,backgroundColor: '#242424',color: 'rgba(255, 255, 255, 0.87)'}} className=" border-[1px] border-gray-300 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 px-3 py-3 text-md rounded-lg" {...rest}/>
	)
}
export default Input;