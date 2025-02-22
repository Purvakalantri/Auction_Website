import React from "react";

const login = () => {
    return (
        <>

            <form action="" className="">
                <div className="flex">
                    <div id="login" className="bg-blue-950 w-2/3 h-70 text-white text-center m-20 items-center justify-center   pt-5 pb-5 rounded-3xl shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)] hover:h-1/2" >
                        <h1 className="text-4xl font-serif font-bold text-yellow-100 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.5)] ">Login</h1>
                        <br></br>
                        <br></br>
                        <label className="font-serif"> Name : </label>
                        <input className="  bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-2 text-black text-center" type="text" required /><br /><br />

                        <label className="font-serif"> Email : </label>
                        <input className="  bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-2 text-black text-center" type="email" required /><br /><br />

                        <p></p>
                        <br></br>
                        <button className="font-serif font-bold text-blue-950 w-20 text-center bg-gray-100  rounded-lg p-1  hover:bg-blue-200 hover:h-10 hover:w-24 ">Register</button>

                    </div>
                    <img className="m-14 w-1/2 h-96 rounded-xl" src="https://media.licdn.com/dms/image/v2/D5612AQE-zdm6oy6GdQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1660054437556?e=2147483647&v=beta&t=0v_TAbRbpcf3HaknEpmiBe5EMsYcDqtH04tPfeTgmOE" />

                    </div>
            </form>

        </>
    )
}

export default login