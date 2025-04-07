import { createRef, useRef ,ReactNode} from "react"
import { cn } from "@/lib/utils"

interface ImageMouseTrailProps {
  items: string[] // Make sure ImageItem is defined
  children?: ReactNode
  className?: string
  imgClass?: string
  distance?: number
  maxNumberOfImages?: number
  fadeAnimation?: boolean
}

export default function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()))
  const currentZIndexRef = useRef(1)

  let globalIndex = 0
  let last = { x: 0, y: 0 }

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (containerRect) {
      const relativeX = x - containerRect.left
      const relativeY = y - containerRect.top
      image.style.left = `${relativeX}px`
      image.style.top = `${relativeY}px`

      if (currentZIndexRef.current > 40) {
        currentZIndexRef.current = 1
      }
      image.style.zIndex = String(currentZIndexRef.current)
      currentZIndexRef.current++

      image.dataset.status = "active"
      if (fadeAnimation) {
        setTimeout(() => {
          image.dataset.status = "inactive"
        }, 1500)
      }
      last = { x, y }
    }
  }

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y)
  }

  const deactivate = (image: HTMLImageElement) => {
    image.dataset.status = "inactive"
  }

  // Type guards for MouseEvent and TouchEvent
  const isMouseEvent = (e: MouseEvent | TouchEvent): e is MouseEvent => {
    return 'clientX' in e && 'clientY' in e
  }

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    let x, y;

    // Handle MouseEvent
    if (isMouseEvent(e)) {
      x = e.clientX
      y = e.clientY
    } 
    // Handle TouchEvent
    else {
      x = e.touches[0].clientX
      y = e.touches[0].clientY
    }

    if (distanceFromLast(x, y) > window.innerWidth / distance) {
      const lead = refs.current[globalIndex % refs.current.length].current
      const tail = refs.current[(globalIndex - maxNumberOfImages) % refs.current.length]?.current
      if (lead) activate(lead, x, y)
      if (tail) deactivate(tail)
      globalIndex++
    }
  }

  return (
    <section
      onMouseMove={handleOnMove as unknown as React.MouseEventHandler<HTMLElement>}  // Casting to the correct type
      onTouchMove={handleOnMove as unknown as React.TouchEventHandler<HTMLElement>}  // Casting to the correct type
      ref={containerRef}
      className={cn(
        "relative grid h-[600px] w-full place-content-center overflow-hidden rounded-lg ",
        className
      )}
    >
      {items.map((item, index) => (
        <img
          key={index}
          className={cn(
            "opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%]  scale-0 rounded-3xl object-cover transition-transform duration-300  data-[status='active']:scale-100   data-[status='active']:opacity-100 data-[status='active']:duration-500 ",
            imgClass
          )}
          data-index={index}
          data-status="inactive"
          src={item}
          alt={`image-${index}`}
          ref={refs.current[index]}
        />
      ))}
      {children}
    </section>
  )
}