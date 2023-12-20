// types.ts

export type PriceInfo = {
  priceCents: number;
  priceType: "FIXED" | "NEGOTIABLE"; // Add other possible values if applicable
};

export type Location = {
  cityName: string;
  countryName: string;
  countryAbbreviation: string;
  distanceMeters: number;
  isBuyerLocation: boolean;
  onCountryLevel: boolean;
  abroad: boolean;
  latitude: number;
  longitude: number;
};

export type SellerInformation = {
  sellerId: number;
  sellerName: string;
  showSoiUrl: boolean;
  showWebsiteUrl: boolean;
  isVerified: boolean;
};

export type Attribute = {
  key: string;
  value: string;
  values: string[];
};

export type Picture = {
  id: number;
  mediaId: string;
  url: string;
  extraSmallUrl: string;
  mediumUrl: string;
  largeUrl: string;
  extraExtraLargeUrl: string;
  aspectRatio: {
    width: number;
    height: number;
  };
};

export type Item = {
  itemId: string;
  title: string;
  description: string;
  categorySpecificDescription: string;
  thinContent: boolean;
  priceInfo: PriceInfo;
  location: Location;
  date: string;
  imageUrls: string[];
  sellerInformation: SellerInformation;
  categoryId: number;
  priorityProduct: "NONE" | "FEATURED" | "HIGHLIGHTED"; // Add other possible values if applicable
  videoOnVip: boolean;
  urgencyFeatureActive: boolean;
  napAvailable: boolean;
  attributes: Attribute[];
  extendedAttributes: Attribute[];
  traits: string[];
  verticals: string[];
  pictures: Picture[];
  vipUrl: string;
};

export type Listing = {
  [key: string]: Item;
};
