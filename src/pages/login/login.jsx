import { useState } from "react"
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()




    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(email, password);


        

        axios.post("http://localhost:3000/api/users/login",
            {
                email: email,
                password: password
            }
        ).then((res) => {
            console.log(res)
            toast.success("Login Success");

            const user = res.data.user
            localStorage.setItem("token", res.data.token) //ceate table for token




            if (user.role === "admin") {
                navigate("/admin/")

            } else {
                navigate("/")
            }


        }).catch((err) => {
            console.log(err)
            toast.error(err.response.data.error)
        })


    }






    return (
        <div className=" bg-picture w-full h-screen flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>

                <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative" >

                    <img src="/logo1.png" alt="logo" className="w-[150px] h-[150px] top-1 object-cover" />

                    <input type="email" placeholder="Email" className="mt-4 w-[300px] h-[30px] text-white bg-transparent border-b-2 border-white text-xl outline-none"
                        value={email}
                        onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }
                    />

                    <input type="password" placeholder="Password" className="mt-6 w-[300px] h-[30px] text-white bg-transparent border-b-2 border-white text-xl outline-none"
                        value={password}
                        onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }
                    />

                    <button className="my-8 w-[300px] h-[50px] bg-[#efac38] text-white rounded-lg cursor-pointer">Login</button>


                </div>
            </form>

        </div>
    )
}

