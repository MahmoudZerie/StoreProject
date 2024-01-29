import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
import { categories, colors, formInputsList, productList } from "./components/data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/errors/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/UI/Select";
import { ProductName } from "./types";
import toast,{Toaster} from "react-hot-toast";
import { NavLink } from "react-router-dom";
const App = () => {
  const defaultProductObj={
    title:"",
    description:"",
    imageURL:"",
    price:"",
    colors:[],
    category:{
      name:"",
      imageURL:""
    }
  }
  // ------------State----------------
  const [tempColors,setTempColors]=useState<string[]>([]);
  const [Product,setProduct]=useState<IProduct>(defaultProductObj);
  const [productToEdit,setProductToEdit]=useState<IProduct>(defaultProductObj);
  const [tempEditColors,setTempEditColors]=useState<string[]>([]);
  const [productToEditIdx,setProductToEditIdx]=useState<number>(0);
  const [Products,setProducts]=useState<IProduct[]>(productList);
  const [selectedCategory,setSelectedCategory]=useState(categories[0]);
  const [errors,setErrors]=useState({ title:"",  description:"",imageURL:"",price:"" })
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal,setIsOpenEditModal]=useState(false);
  const [isOpenConfirmModal,SetIsOpenConfirmModal]=useState(false);
// ------------Handler----------------
  const closeModal=()=>setIsOpen(false);
  const openModal=()=>setIsOpen(true);
  const closeConfirmModal=()=>SetIsOpenConfirmModal(false);
  const openConfirmModal=()=>SetIsOpenConfirmModal(true);
  const closeEditModal=()=>setIsOpenEditModal(false);
  const openEditModal=()=>setIsOpenEditModal(true);
  const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=event.target;
    setProduct({
      ...Product,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:"",
    })
  } 

  const onChangeEditHandler=(event:ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=event.target;
    setProductToEdit({
      ...productToEdit,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:"",
    })
  } 

  const removeProductHandler=()=>{
    const filtered=Products.filter(product=>product.id!=productToEdit.id);
    setProducts(filtered);
    closeConfirmModal();
    toast("Product has been deleted",{
      icon:'❗',
      style:{
        backgroundColor:"#242424",
         colorScheme: "light dark",
         color: "rgba(255, 255, 255, 0.87)",
       
      }
    })
  }

// ------------Render--------------

  const renderProductColors=colors.map(color=><CircleColor key={color} color={color} onClick={()=>{
    if(tempColors.includes(color)){
      setTempEditColors(prev=>prev.filter(item=>item!=color))
      return;
    }
    else
    setTempColors(prev=>[...prev,color])
  if(tempEditColors.includes(color)){
      setTempEditColors(prev=>prev.filter(item=>item!=color))
      return;
    }
    setTempEditColors(prev=>[...prev,color])
  }}
  /> 
  );

  const renderProductEditColors=colors.map(color=><CircleColor key={color} color={color} onClick={()=>{
    if(tempEditColors.includes(color)){
      setTempEditColors(prev=>prev.filter(item=>item!=color))
      return;
    }
    setTempEditColors(prev=>[...prev,color])
  }}
  /> 
  );
  
  const renderProductList = Products.map((product,idx) => (
    <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit}  openEditModal={openEditModal} idx={idx} setProductToEditIdx={setProductToEditIdx} setTempEditColors={setTempEditColors} openConfirmModal={openConfirmModal}/>
  ));
const renderFormInputList=formInputsList.map(input=>
  <div className="flex flex-col" key={input.id}>
    <label htmlFor={input.id} className="text-white mb-2 text-sm font-medium">{input.label}</label>
  <Input type={input.type} id={input.id} name={input.name} value={Product[input.name]} onChange={onChangeHandler}/>
  <ErrorMessage msg={errors[input.name]}/>
</div>
)

  const renderProductEditWithErrorMsg=(id:string,label:string,name:ProductName)=>{
    return(
      <div className="flex flex-col" >
      <label htmlFor={"title"} className="text-white mb-2 text-sm font-medium">{label}</label>
      <Input type="text" id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHandler}/>
      <ErrorMessage msg={errors[name]}/>
      </div>
    )
  }
  // ----------------------------------------------
  
  
  
  const onCancel=()=>{setProduct(defaultProductObj);
    closeModal();
  }
  const submitHandler=(event: FormEvent<HTMLFormElement>): void=>{
    event.preventDefault();
    const {title,description,price,imageURL}=Product;
    const errors=productValidation({title,description,imageURL,price});
    const hasErrorMsg=Object.values(errors).some(value=>value==="")&& Object.values(errors).every(value=>value==="");
    if(!hasErrorMsg){
      setErrors(errors);
      return;
    }
    setProducts(prev=>[{...Product,id:uuid(),colors:tempColors,category:selectedCategory},...prev]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  } 
 
  const submitEditHandler=(event: FormEvent<HTMLFormElement>): void=>{
    event.preventDefault();
    const {title,description,price,imageURL}=productToEdit;
    const errors=productValidation({title,description,imageURL,price});
    const hasErrorMsg=Object.values(errors).some(value=>value==="")&& Object.values(errors).every(value=>value==="");
    if(!hasErrorMsg){
      setErrors(errors);
      return;
    }

    const updatedProduct=[...Products];
    updatedProduct[productToEditIdx]={...productToEdit,colors:tempEditColors}; 
    setProducts(updatedProduct);

    setProductToEdit(defaultProductObj);
    setTempEditColors([]);
    closeEditModal();
  } 

  return (  
    <div className="container">
      <div className="flex justify-between ">
      <NavLink to={"/"} className={"w-full items-center bg-slate-500 rounded-md"}><Button >Log Out</Button></NavLink>
      <Button className="p-2 bg-blue-700 w-full hover:bg-blue-600" onClick={openModal}>Add</Button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      {/* Add product modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
          <div className="flex items-center flex-wrap space-x-1">{tempColors.map(color=><span key={color} className={"rounded-md p-1 mb-1 text-sm"} style={{backgroundColor:color}}>{color}</span>)}</div>
          <div className="flex items-center flex-wrap space-x-1">{renderProductColors}</div>
          {/* <ErrorMessage msg={"You must add at least one color"}/> */}
          <div className="flex items-center space-x-3">
          <Button className="p-2 bg-blue-500 hover:bg-blue-400">Submit</Button>
          <Button className="p-2 bg-slate-500 hover:bg-slate-400" type="button" onClick={onCancel}>Cancel</Button>
        </div>
        </form>
        
      </Modal>

     




       {/* Edit product modal */}
       <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="Edit This Product">
        <form className="space-y-3" onSubmit={submitEditHandler}>
        {renderProductEditWithErrorMsg('title','Product Title','title')}
        {renderProductEditWithErrorMsg('description','Product Description','description')}
        {renderProductEditWithErrorMsg('imageURL','Product Image URL','imageURL')}
        {renderProductEditWithErrorMsg('price','Product Price','price')}
          
           { <Select selected={productToEdit.category} setSelected={(value)=>setProductToEdit({...productToEdit,category:value})}/>  }
          <div className="flex items-center flex-wrap space-x-1">{tempEditColors.map(color=><span key={color} className={"rounded-md p-1 mb-1 text-sm"} style={{backgroundColor:color}}>{color}</span>)}</div>
          <div className="flex items-center flex-wrap space-x-1">{renderProductEditColors}</div>
          <div className="flex items-center space-x-3">
          <Button className="p-2 bg-blue-500 hover:bg-blue-400">Submit</Button>
          <Button className="p-2 bg-slate-500 hover:bg-slate-400" type="button" onClick={closeEditModal}>Cancel</Button>
        </div>
        </form> 
        
      </Modal>

      <Modal title="Are you sure you want to remove this Product from your Store ?" 
            description="Deleting this product will remove it permanently from your inventory. Any associated data,
                      sales history, and other related information will also be deleted. Please make sure this is the intended
                      action." isOpen={isOpenConfirmModal} closeModal={closeConfirmModal}>

          <div className="flex items-center justify-between space-x-2 mt-3">
          <Button className="bg-[#c2344d] hover:bg-red-800 h-12" onClick={removeProductHandler}>Yes, remove</Button>
          <Button className="bg-[#8787df] hover:bg-gray-300 h-12"  onClick={closeConfirmModal}>Cancel</Button>
          </div>
       </Modal>
       <Toaster />
    </div>
  );
};

export default App;
