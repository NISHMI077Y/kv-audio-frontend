const sampleArr = [
    {
        key: "P001",
        name: "Bluetooth Speaker",
        price: "3000.00",
        category: "Audio",
        dimensions: "20x20x20 cm",
        description: "Portable Bluetooth speaker with clear sound.",
        availability: true
    },
    {
        key: "P002",
        name: "LED Party Light",
        price: "4500.00",
        category: "Lights",
        dimensions: "15x15x10 cm",
        description: "Colorful LED light for parties and events.",
        availability: true
    },
    {
        key: "P003",
        name: "Wireless Microphone",
        price: "5500.00",
        category: "Audio",
        dimensions: "10x10x25 cm",
        description: "High-quality wireless microphone for live shows.",
        availability: false
    }
];



import { useState } from "react";
import { HiH1 } from "react-icons/hi2";
import { LuCirclePlus } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function AdminItemsPage(){

    const [items,setItems] = useState(sampleArr)


    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimension</th>
                    <th>Description</th>
                    <th>Availability</th>
                
                </thead>

                <tbody>

                {
                    items.map((product,index)=>{
                        console.log(product)
                        return(
                           
                        <tr key={product.key}>

                            <td>{product.key}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.dimensions}</td>
                            <td>{product.description}</td>

                            <td>{product.availability ? "Available" : "Not Available"}</td>
                        </tr>
                           
                        )

                    })

                }
                    
                </tbody>


            </table>

            <Link to="/admin/items/add"> 
<LuCirclePlus  className="text-[50px] hover:text-amber-700 hover:text-[60px] absolute right-2 bottom-2 "/>

</Link>

        </div>
    )
}