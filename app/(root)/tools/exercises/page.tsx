import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const up = [

  {
    id: 2,
    img: "https://hips.hearstapps.com/hmg-prod/images/muscular-shirtless-man-exercising-with-dumbbells-royalty-free-image-1711991944.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
  },
  {
    id: 3,
    img: "https://hips.hearstapps.com/hmg-prod/images/muscular-shirtless-man-exercising-with-dumbbells-royalty-free-image-1711991944.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
  },
  {
    id: 4,
    img: "https://hips.hearstapps.com/hmg-prod/images/muscular-shirtless-man-exercising-with-dumbbells-royalty-free-image-1711991944.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
  }
]

const lo = [
  {
    id: 1
  }
]

const page = () => {
  return (
    <section className="relative overflow-x-hidden flex flex-col font-inter min-h-svh">
      <div className="w-full px-4 py-8 lg:px-8 lg:py-10">
        <header className='relative flex items-center lg:mb-10 space-y-8'>
          <h1 className="shadow-heading text-5xl sm:text-6xl md:text-7xl">Exercises</h1>
        </header>

      </div>
      <div>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Upper Body</TabsTrigger>
            <TabsTrigger value="password">Lower Body</TabsTrigger>
            <TabsTrigger value="password">Youga</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className='flex items-center'>
              {up.map((item) => (
                <div className='bg-[rgb(250,250,250)] p-2 rounded flex ' key={item.id}>
                  <img
                    src={item.img}
                    alt=''
                    className=" rounded-lg object-fit " />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="password"><div className='flex items-center'>
            {up.map((item) => (
              <div className='bg-[rgb(250,250,250)] p-2 rounded flex ' key={item.id}>
                <img
                  src={item.img}
                  alt=''
                  className=" rounded-lg object-fit " />
              </div>
            ))}
          </div></TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default page
