export type ProductType = {
  id: number
  name: string
  href: string
  price: number
  discount: {
    active: boolean,
    oldPrice: number,
  }
  imageSrc: string
  imageAlt: string
  description: string
}