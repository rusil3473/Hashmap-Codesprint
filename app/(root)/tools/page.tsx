"use client";

const page = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col gap-4 justify-center items-center border rounded w-fit bg-[rgb(250,250,250)] p-5">
        <h1 className="text-2xl font-bold my-5"> BMI Counter</h1>
        <form className="flex flex-col gap-4 justify-center items-center">
          <label className="">
            Weight:
            <input type="number" name="Weignt" placeholder="Enter your weight in KG" className="border border-black rounded p-1" />
          </label>
          <label>
            Heignt:
            <input type="number" name="Hight" placeholder="Enter your height in m" className="border border-black rounded p-1" />
          </label>

          <input type="submit" value="Submit" className="bg-black rounded cursur-pointer w-20 text-white h-10" />
        </form>
      </div>
    </div>
  )
}

export default page;