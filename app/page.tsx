
import Link from "next/link"
import { brotliDecompress } from "zlib";


export default function Home() {
  return (

<div className="bg-white text-black">
      <ul className="text-white font-bold flex justify-center gap-20 text-4xl mt-10 ">
        <li>Find Used Cars in Pakistan</li>
      </ul>
      <ul className="text-white font-bold flex justify-center gap-20 ">
        <li>With thousands of cars, we have just the right one for you</li>
      </ul>
      <form className="flex flex-col w-3/3 justify-center items-center mt-5">
        <input type="text" className="flex flex-col w-2/5 bg-blue-200 shadow-lg border-2 text-black" />
      </form>
      <div className="flex flex-col items-center">
      <button className="flex border-1 p-2 rounded-xl bg-blue-500 m-10 justify-between">Advanced Filter</button>
      </div>      
      <h1 className="font-bold text-center text-2xl">Sell Your Car on PakWheels and Get the Best Price</h1>
      <div className="flex justify-center items-center gap-40 mt-10">
<div className="flex flex-col ">
      <ul className="border-2 shadow-lg border-gray-300 flex p-4 flex-col items-left ">
        <li className="font-bold text-blue-500 text-2xl py-2">Post your Ad on PakWheels</li>
        <li className="py-2">Post your Ad for Free in 3 Easy Steps</li>
        <li className="py-2">Get Genuine offers from Verified Buyers</li>
        <li className="py-2">Sell your car Fast at the Best Price</li>
        <button className="bg-red-900 text-white boder-4 rounded-2xl py-2 mt-4 " >Post Your Ad</button>
      </ul></div>
      <div className="text-2xl font-semi bold">
        <div>OR</div>
      </div>
      <div className="border-2 shadow-lg border-gray-300 flex p-4 flex-col items-left ">
      <ul className="flex flex-col justify-left">
        <li className="font-bold text-blue-500 text-2xl py-2">Try PakWheels Sell It For Me</li>
        <li className="py-2">Dedicated Sales Expert to Sell your Car</li>
        <li className="py-2">We Bargain for you and share the Best Offer</li>
        <li className="py-2">We ensure Safe & Secure Transaction</li>
        <button className="bg-blue-900 text-white boder-4 rounded-2xl py-2 mt-4 ">Register Your Car</button>
      </ul>
      </div></div>
      <p className="style-bold text-2xl my-10 mx-20">Managed by PakWheels</p>
      <div className="flex flex-row gap-60 px-20">
      <div className="">
      <ul >
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Honda Civic 2024</Link>
        <li className="text-green-500">PKR 99.0 Lacs</li>
        <li></li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60  cursor-pointer"><img src="https://tyrepoint.pk/wp-content/uploads/2023/05/Suzuki-Alto-2023.png" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Suzuki Alto 2024</Link>
        <li className="text-green-500">PKR 2,331,000</li>
        <li></li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache1.pakwheels.com/system/car_generation_pictures/5465/original/iris_%282%29.png?1617367434" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Mercedes Benz E Class 2024</Link>
        <li className="text-green-500">PKR 7.2 Crore</li>
        <li></li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache1.pakwheels.com/system/car_generation_pictures/5262/original/prius.jpg?1595598083" alt="Loading" /></li>
      </ul>
      <ul className="">
        <li>
        <Link href="http://localhost:3000/form">Toyota Prius 2024</Link></li>
        <li className="text-green-500">PKR 6,440,000</li>
        <li></li>
      </ul>
      </div>
         </div>
         </div>
    
  )
};


