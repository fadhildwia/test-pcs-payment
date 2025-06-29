import React, { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel"

interface SlideItem {
  id: number
  author: string
  avatar: string
  day: string
  date: string
  content: string[]
}

interface NewsCarouselProps {
  items: SlideItem[]
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ items }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="px-4">
      <h3 className="font-semibold text-gray-800 mb-4">PCS News</h3>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id}>
              <div className="flex-col items-start bg-white rounded-xl m-2 p-4 shadow-md">
                <div className="flex items-center mb-2 gap-4">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-1 items-center justify-between mb-1">
                    <h4 className="font-medium text-red-500 truncate">
                      {item.author}
                    </h4>
                    <div className="flex-col">
                      <p className="text-xs text-end ml-2">{item.day}</p>
                      <p className="text-xs text-end ml-2">{item.date}</p>
                    </div>
                  </div>
                </div>
                <div>
                  {item.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === current - 1
                ? "bg-red-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsCarousel
