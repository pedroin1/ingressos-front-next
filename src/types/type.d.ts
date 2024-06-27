export interface IEventModel {
  id: string;
  name: string;
  description: string;
  date: string;
  price: number;
  rating: number;
  image_url: string;
  location: string;
}

export interface ISpotModel {
  id: string;
  name: string;
  status: string;
}
