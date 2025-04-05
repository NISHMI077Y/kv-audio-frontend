// // import { useState } from "react"

// // export default function AddItemPage(){
// //     const [productKey, setProductKey] = useState("");
// //     const [productName, setPrductName] = useState("");
// //     const [productPrice, setProductPrice] = useState("");
// //     const [productCategory, setProductCategory] = useState("audio");
// //     const [productDimensions, setProductDimensions] = useState();   // useStateHooks, nithara nithara change wena value walata hooks danawa

// //     const [productDescription, setProductDescription] = useState();

// //     return(
// //         <div className="w-full h-full flex flex-col items-center">

// //             <h1>Add Items</h1>


            
// //             <div className="w-[400px] border flex flex-col items-center">
// //                 <input onChange={(e)=>{setProductKey(e.target.value)}} value={productKey} type="text" placeholder="Product Key" />
// //                   {/* e kiyanne event values  */}
// //                 <input type="text" placeholder="Product Name" /> 
// //                 <input type="text" placeholder="Product Price" />

// //                 <select onChange={(e)=>{setProductCategory(e.target.value)}}>
// //                     <option value={productCategory} key={"audio"}>Audio</option>
// //                     <option key={"lights"}>Lights</option>

// //                 </select>
// //                 <input type="text" placeholder="Product Dimensions" />
// //                 <input type="text" placeholder="Product Description" />
               
// //                 <button>Add</button>


// //             </div>


// //         </div>
// //     )
// // }

// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export default function AddItemPage() {
//     const [productKey, setProductKey] = useState("");
//     const [productName, setProductName] = useState("");
//     const [productPrice, setProductPrice] = useState(0);
//     const [productCategory, setProductCategory] = useState("audio");
//     const [productDimensions, setProductDimensions] = useState("");
//     const [productDescription, setProductDescription] = useState("");
//     const navigate = useNavigate()

//     async function handleAddItem(){


//         console.log(
//             productKey,
//             productPrice,
//             productName,
//             productCategory,
//             productDimensions,
//             productDescription
//         )

//         const token = localStorage.getItem("token")

//         if(token){
            
//              const result = await axios.post("http://localhost:3000/api/products", {  //axios use for api call
//                     key : productKey,
//                     name : productName,
//                     price : productPrice,
//                     category : productCategory,
//                     dimensions : productDimensions,
//                     description : productDescription,
//                     image : imageUrls,
//                 },
//                 {
//                     headers : {
//                         Authorization : "Bearer " + token,
//                     },
//                 })
//                 console.log(result)

                
//         }else{
//             toast.error("You are not authorized to add items");
//         }
//     }







        

    


//     return (
//         <div className="w-full h-full flex flex-col items-center p-4">
//             <h1 className="text-2xl font-bold mb-4">Add Items</h1>

//             <div className="w-[400px] border rounded-lg p-4 flex flex-col gap-4 items-center">
//                 <input
//                     onChange={(e) => setProductKey(e.target.value)}
//                     value={productKey}
//                     type="text"
//                     placeholder="Product Key"
//                     className="w-full p-2 border rounded"
//                 />

//                 <input
//                     onChange={(e) => setProductName(e.target.value)}
//                     value={productName}
//                     type="text"
//                     placeholder="Product Name"
//                     className="w-full p-2 border rounded"
//                 />

//                 <input
//                     onChange={(e) => setProductPrice(e.target.value)}
//                     value={productPrice}
//                     type="number"
//                     placeholder="Product Price"
//                     className="w-full p-2 border rounded"
//                 />

//                 <select
//                     onChange={(e) => setProductCategory(e.target.value)}
//                     value={productCategory}
//                     className="w-full p-2 border rounded"
//                 >
//                     <option value="audio">Audio</option>
//                     <option value="lights">Lights</option>
//                 </select>

//                 <input
//                     onChange={(e) => setProductDimensions(e.target.value)}
//                     value={productDimensions}
//                     type="text"
//                     placeholder="Product Dimensions"
//                     className="w-full p-2 border rounded"
//                 />

//                 <input
//                     onChange={(e) => setProductDescription(e.target.value)}
//                     value={productDescription}
//                     type="text"
//                     placeholder="Product Description"
//                     className="w-full p-2 border rounded"
//                 />

//                 <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[250px]">
//                     Add
//                 </button>

//                 <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-[250px]">
//                     Cancel
//                 </button>
//             </div>
//         </div>
//     );
// }


import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";

export default function AddItemPage() {
    const [productKey, setProductKey] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [productCategory, setProductCategory] = useState("audio");
    const [productDimensions, setProductDimensions] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImages, setProductImages] = useState([]);
    const navigate = useNavigate();

    async function handleAddItem() {
        
        const promises =[];
        for(let i=0; i<productImages.length; i++){
            console.log(productImages[i]);
            const promise = mediaUpload(productImages[i]);
            promises.push(promise)
        }

        
        console.log(
            productKey,
            productPrice,
            productName,
            productCategory,
            productDimensions,
            productDescription
        )

        const token = localStorage.getItem("token")

        if(token){
            try{
                // Promise.all(promises).then((result)=>{
                //     console.log(result)
                // }).catch((err)=>{
                //     toast.error(err)
                // })

                const imageUrls = await Promise.all(promises);

                const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
                    key : productKey,
                    name : productName,
                    price : productPrice,
                    category : productCategory,
                    dimensions : productDimensions,
                    description : productDescription,
                    image : imageUrls,
                },{
                    headers : {
                        Authorization : "Bearer " + token
                    }
                });
                toast.success(result.data.message);
                navigate("/admin/items")
            }catch(err){
                toast.error(err.response.data.error)
            }
        }else{
            toast.error("You are not authorized to add items");
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <h1>Add Items</h1>
            <div className="w-[400px] p-4 border flex flex-col items-center">
                <input
                    onChange={(e) => setProductKey(e.target.value)}
                    value={productKey}
                    type="text"
                    placeholder="Product Key"
                    className="w-full mt-2 p-2 border rounded"
                />
                <input
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    type="text"
                    placeholder="Name"
                    className="w-full mt-2 p-2 border rounded"
                />
                <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                    type="text"
                    placeholder="Price"
                    className="w-full mt-2 p-2 border rounded"
                />
                <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full mt-2 p-2 border rounded"
                >
                    <option value="audio">Audio</option>
                    <option value="lights">Lights</option>
                </select>
                <input
                    onChange={(e) => setProductDimensions(e.target.value)}
                    value={productDimensions}
                    type="text"
                    placeholder="Product Dimensions"
                    className="w-full mt-2 p-2 border rounded"
                />
                <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    type="text"
                    placeholder="Product Description"
                    className="w-full mt-2 p-2 border rounded"
                />
                <input type="file" multiple onChange={(e) => { setProductImages(e.target.files) }} className="w-full mt-2 p-2 border rounded" />
                <button onClick={handleAddItem} className="w-full p-2 border rounded bg-blue-500 text-white hover:bg-blue-700">Add</button>
                <button onClick={() => { navigate("/admin/items") }} className="w-full p-2 border rounded bg-red-500 text-white hover:bg-red-700">Cancel</button>
            </div>
        </div>
    );
}

