interface IProps{
	imgeUrl:string
	className:string
	alt:string
}

const Image=({imgeUrl,alt,className}:IProps)=>{
	return (
		<img src={imgeUrl} alt={alt} className={className}/>
	)
}
export default Image;