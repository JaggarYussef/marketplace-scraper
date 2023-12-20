import fetch from "node-fetch";
import { Listing } from "../types/secondHandTypes";

export const fetchAllListings = async () => {
  const searchParam = new URL(
    "https://www.2dehands.be/lrp/api/search?attributesByKey[]=Language%3Aall-languages"
  );
  searchParam.searchParams.append("limit", `30`);
  searchParam.searchParams.append("offset", `0`);
  searchParam.searchParams.append("query", `projector`);
  searchParam.searchParams.append("searchInTitleAndDescription", `true`);
  searchParam.searchParams.append("viewOptions", `list-view`);

  try {
    const response: Response = await fetch(searchParam.href, {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
      },
      referrer: "https://www.2dehands.be/",
      method: "GET",
      mode: "cors",
    });

    const parsedResponse = await response.json();
    const arrayOfListings = parsedResponse.listings.map((listing: Listing) => {
      const negotiable = listing.priceInfo.priceType === "FIXED" ? false : true;
      return {
        id: listing.itemId,
        title: listing.title,
        description: listing.categorySpecificDescription,
        price: listing.priceInfo.priceCents / 100,
        negotiable: negotiable,
        locationName: listing.location.cityName,
        latitude: listing.location.latitude,
        longitude: listing.location.longitude,
        postedDate: listing.date,
        sellerId: listing.sellerInformation.sellerId,
        sellerName: listing.sellerInformation.sellerName,
        sellerWebsite: listing.sellerInformation.sellerWebsiteUrl,
        attributes: listing.attributes,
        externalAttributes: listing.externalAttributes,
        verticals: listing.verticals,
        pictures: listing.pictures[0].extraExtraLargeUrl,
      };
    });

    console.log("this is parsed res", arrayOfListings);
  } catch (error) {
    console.log("Error While Fetching 2deHands All Listing ", error);
  }
};
