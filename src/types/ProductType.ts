type brandType = {
  id: number;
  nameKr: string;
  nameEn: string;
};

interface ProductType {
  brand: brandType;
  brandId: number;
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
}

export default ProductType;
