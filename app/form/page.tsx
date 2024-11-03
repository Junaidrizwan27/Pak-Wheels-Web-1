export default function Form() {
  return (
    <main className="bg-gray-400 min-h-screen ">
      <div className="text-bold text-3xl uppercase items-center text-center bg-grey-500 min-h-80 ">
        <p>Enter Your Details</p>
        <div className="min-h-80 items-center flex-col justify-center ">
        <form className="flex flex-col justify-center items-center text-center min-h-80">
        <input type="email" placeholder="Enter Your Email" className="rounded-xl w-2/5 p-2 py-2 text-black " />
          <input type="password" placeholder="Enter Your Password" className="rounded-xl w-2/5 p-2 py-2 mt-10 text-black" />
        </form>
        </div>
        <div className="">
        <button className="p-3 bg-blue-600 rounded-xl text-white text-sm">Place your order</button>
        </div>
      </div>
    </main>
  );
}
