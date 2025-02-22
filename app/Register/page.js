import React from "react";

const register = () => {
    return (
        <>

            <form action="" className="">
                <div className="flex">
                    <div id="login" className="bg-blue-950 w-2/3 h-auto text-white text-center m-20 items-center justify-center   pt-5 pb-5 rounded-3xl shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)] hover:h-3/5" >
                        <h1 className="text-4xl font-serif font-bold text-yellow-100 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.5)] ">Register</h1>
                        <br></br>
                        <label className="m-1 font-serif" >Name : </label>
                        <input className="m-1 bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-7 text-black text-center" type="text" required />

                        <label className="ml-8 pr-5 font-serif">Email :  </label>
                        <input className="ml-7 bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-6 text-black text-center" type="email" required /><br /><br />

                        <label className="font-serif"> Phone No. : </label>
                        <input className="  bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-6 text-black text-center" type="tel" required />

                        <label className="ml-5 font-serif"> WhatsApp No. : </label>
                        <input className=" bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-6 text-black text-center " type="tel" required /><br /><br />

                        <label className="m-3 font-serif" >Pan No. : </label>
                        <input className="m-1 bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-7 text-black text-center" type="text" required />

                        <label className="ml-8 pr-5 font-serif">Aadhar No. :</label>
                        <input className="ml-0 bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-6 text-black text-center" type="text" required /><br /><br />

                        <label className="ml-0 pr-1 font-serif">Company Name :</label>
                        <input className="ml-0 bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-6 text-black text-center" type="text" required />

                        <label className="font-serif ml-10"> Address : </label>
                        <input className="  bg-blue-100 p-3 rounded w-32 h-5 hover:w-40 hover:h-2 text-black text-center" type="text" required /><br /><br />

                        <label id="identity" className=" font-serif" required>Choose Nationality:</label>

                        <select name="nation" className="m-1  bg-blue-100  rounded w-32 h-5 hover:w-40 hover:h-6 text-black text-center" id="nationality">
                            <option value="Indian">Indian</option>
                            <option value="Europian">Europian</option>
                            <option value="Australlina">Australlina</option>
                            <option value="Us Citizen">Us Citizen</option>
                        </select>


                        <label id="currency"  className="m-1 font-serif" required>Preffered Currency:</label>

                        <select name="money" className="  bg-blue-100  rounded w-32 h-5 hover:w-40 hover:h-6 text-black text-center" id="preference">
                            <option value="USD">USD</option>
                            <option value="RS">Europian</option>
                            <option value="CNY">CNY</option>
                            <option value="EURO">EURO</option>
                        </select>

                        <p></p>
                        <br></br>
                        <button className="font-serif font-bold text-blue-950 w-20 text-center bg-gray-100  rounded-lg p-1  hover:bg-blue-200 hover:h-10 hover:w-24 ">Register</button>

                    </div>

                    <img className="m-14 w-1/2 h-96 rounded-xl" src="https://media.licdn.com/dms/image/v2/D5612AQE-zdm6oy6GdQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1660054437556?e=2147483647&v=beta&t=0v_TAbRbpcf3HaknEpmiBe5EMsYcDqtH04tPfeTgmOE" />
                </div >
            </form>

        </>
    )
}

export default register