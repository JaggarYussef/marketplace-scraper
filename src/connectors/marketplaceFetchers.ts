import fetch from "node-fetch";

//TODO:
// Turn the GET requests into a GraphQL query
//
// It is possible to use one GQL query instead of making two different fetch request

const fetchListings = async (): Promise<string[]> => {
  try {
    console.log("Running Listings Id fetcher...");

    const res: Response = await fetch("https://www.facebook.com/api/graphql/", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,nl;q=0.8,ar;q=0.7,fr;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        dpr: "1",
        pragma: "no-cache",
        "sec-ch-prefers-color-scheme": "dark",
        "sec-ch-ua":
          '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        "sec-ch-ua-full-version-list":
          '"Google Chrome";v="119.0.6045.200", "Chromium";v="119.0.6045.200", "Not?A_Brand";v="24.0.0.0"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": '""',
        "sec-ch-ua-platform": '"Windows"',
        "sec-ch-ua-platform-version": '"10.0.0"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "viewport-width": "1344",
        "x-asbd-id": "129477",
        "x-fb-friendly-name": "CometMarketplaceSearchContentContainerQuery",
        "x-fb-lsd": "Sk-zCG6nuzYOCrwOq_icMm",
        cookie:
          "datr=55pTZId5Mb2O7gaJSg2Xd8Ko; sb=6ZpTZOMS1w5q5HFDlqwggITN; c_user=100000400483429; oo=v1; fr=0xjk4AH1ZZieuq8U9.AWWTOxIEZdZVvhxa7bpUhoSK2tY.BldbeE.yL.AAA.0.0.BldbeE.AWWw0BojyoY; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1702213514845%2C%22v%22%3A1%7D; wd=1344x1279; xs=36%3AoB1pLwH89EhVIQ%3A2%3A1702213505%3A-1%3A5767%3A%3AAcU27V-7bnMi-sca3VYzkP9e43_OKc8iqVYa6D5Ffg",
        Referer:
          "https://www.facebook.com/marketplace/brussels/search/?query=projector",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: "av=100000400483429&__user=100000400483429&__a=1&__req=51&__hs=19701.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1010323978&__s=plxehx%3Aodwqve%3A1rdj8j&__hsi=7310951348603023921&__dyn=7AzHK4HwkEng5K8G6EjBAo2nDwAxu13wFG14yUJ3odF8vyUco5S3O2Saw8i2S1DwUx60GE5O0BU2_CxS320om78bbwto886C11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61awhUC7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y11xfxmu3W3y261eBx_y88E6a1TxWm2CVEbUGdG1Fwh888cA0z8c84q58jwTwNxe6Uak1xwJwxyo566k1FwgU4q3G1eKufw&__csr=gds4AtMLbd1n2dh4YoxlRqbPRb95iYxtONlTn9vkgH_b5V5hdd4XiFXKHmLLVQBaGEKFGmW_heQGWKXFd4K8CCXq-bKJ4y8GhqKqG8WF2GgFqDylyp9b8QcKi9VUiySiES8VAqUSum8ld2Ft166HCUCvykQ7keBzV9RhrgnUy4WzayVAh3Q22ueG699Gz9E-48K9xCdUf8hxqE6ei9UuxK7UC3G3adUlK8z8O17wTguwhawywj8lwoE6aUoVEcUfoW3C58Cm0Do5y0kq0hm0wEx03I81e81AonwcSaoogrw4Iw2PA0i8w3wxKu0eaw0oGE03e6w2G81t408gw17a0wO4y4awqUWt03Y806ny02CG2603iW0OpA0kG02Ay&__comet_req=15&fb_dtsg=NAcMVWAh8lPC1ZulIwwUbaCcn0THmFORddH16I3Tlbq1YHvTFKpLlvQ%3A36%3A1702213505&jazoest=25428&lsd=Sk-zCG6nuzYOCrwOq_icMm&__aaid=0&__spin_r=1010323978&__spin_b=trunk&__spin_t=1702213508&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentContainerQuery&variables=%7B%22buyLocation%22%3A%7B%22latitude%22%3A50.86424%2C%22longitude%22%3A4.35234%7D%2C%22contextual_data%22%3Anull%2C%22count%22%3A24%2C%22cursor%22%3Anull%2C%22flashSaleEventID%22%3A%22%22%2C%22hasFlashSaleEventID%22%3Afalse%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22projector%20screen%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A50.86424%2C%22filter_location_longitude%22%3A4.35234%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A56%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22savedSearchID%22%3Anull%2C%22savedSearchQuery%22%3A%22projector%20screen%22%2C%22scale%22%3A1%2C%22shouldIncludePopularSearches%22%3Afalse%2C%22topicPageParams%22%3A%7B%22location_id%22%3A%22brussels%22%2C%22url%22%3Anull%7D%7D&server_timestamps=true&doc_id=24319041337710208",
      method: "POST",
    });
    const edges = await res.json();
    console.log("edges ", edges);

    const listingsArray = edges.data.marketplace_search.feed_units.edges;

    const listingsIdsArray = listingsArray
      .filter((listing) => listing.node.listing)
      .map((listing) => {
        const id = listing.node.listing.id;
        return id;
      });
    console.log(`${listingsArray.length} listing have been returned`);
    return listingsIdsArray;
  } catch (error) {
    console.log("error fetching listings", error);
    throw error;
  }
};

const fetchListingsDetails = async (listingsId: String) => {
  console.log("Running Listings Details...");
  console.log("Running Details for Listing id: ", listingsId);

  const bodyVariable = {
    UFI2CommentsProvider_commentsKey: "MarketplacePDP",
    feedbackSource: 56,
    feedLocation: "MARKETPLACE_MEGAMALL",
    referralCode: "null",
    scale: 1,
    should_show_new_pdp: false,
    targetId: listingsId,
    useDefaultActor: false,
    __relay_internal__pv__CometUFIIsRTAEnabledrelayprovider: false,
    __relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider: false,
  };
  const encodedBodyVariable = encodeURI(JSON.stringify(bodyVariable));

  try {
    const res = await await fetch("https://www.facebook.com/api/graphql/", {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
        Accept: "*/*",
        "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-FB-Friendly-Name": "MarketplacePDPContainerQuery",
        "X-FB-LSD": "yV9uK7Jf9V-U_kT_Te_qfu",
        "X-ASBD-ID": "129477",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
      },
      referrer:
        "https://www.facebook.com/marketplace/114632485219548/search/?query=nikon",
      body: "av=61554975741900&__user=61554975741900&__a=1&__req=3z&__hs=19710.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1010504186&__s=64cf9t%3Anzigix%3Aakvi4a&__hsi=7314339309730027812&__dyn=7AzHK4HwkEng5K8G6EjBAo2nDwAxu13wFG1gyUW3qi7UK360CEboG0IE6u3y4o2Gwfi0LVEtwMw65xO2OU7m221FwgolzUO0-E7m4oaEnxO0Bo7O2l2Utwwwi831wiE4u9x-3m1mzXw8W58jwGzEaE5e7oqBwJK2W5olwuEjUlDw-wUwxwjFovUaU3VBwFKq2-azqwqo4i1jg2cwMwrUdUcojxK2B0oobo8oC1Hg6C13whEeE4WVU-4E&__csr=gXvEatsh45Ohj5ncZlkBHaCHsh9Oh5qknsBLZdZkLmGp7VDh9aO8BGiGhaCi-HApetABQRmWgDh4AV8Gm_yqACADyEB-Ey5GBRyqAGQi-cBxqQl29KqfDybG3h3--m4V84a6Ua4dDCwTxfxSEhCgCFawr8CdCyEb9K0OU-4Ea84e4U625o4G12wrK1AwaS1eDCxa4otwrU1ro6m06OE5606XoS2mm8wsrw04Wexe5cw0Y6fwdC09Jw3bo15U0S-1_w2WE1fVU0sNU0jgw14G0eJw20u04WU04RO2i0gq04Wo&__comet_req=15&fb_dtsg=NAcNcgj5WtBZ4GYBxCY72A_l_MtKqsd0dIMzxLVVamK0pTdwJH8IURA%3A2%3A1703002194&jazoest=25370&lsd=yV9uK7Jf9V-U_kT_Te_qfu&__aaid=0&__spin_r=1010504186&__spin_b=trunk&__spin_t=1703002329&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=MarketplacePDPContainerQuery&variables=%7B%22UFI2CommentsProvider_commentsKey%22%3A%22MarketplacePDP%22%2C%22feedbackSource%22%3A56%2C%22feedLocation%22%3A%22MARKETPLACE_MEGAMALL%22%2C%22referralCode%22%3A%22null%22%2C%22scale%22%3A1%2C%22should_show_new_pdp%22%3Afalse%2C%22targetId%22%3A%22215404764808854%22%2C%22useDefaultActor%22%3Afalse%2C%22__relay_internal__pv__CometUFIIsRTAEnabledrelayprovider%22%3Afalse%2C%22__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider%22%3Afalse%7D&server_timestamps=true&doc_id=25130333589887232",
      method: "POST",
      mode: "cors",
    });

    console.log("DetailedObjecs text", await res.text());

    const detailsObject = await res.json();
    // console.log("detailsObject json", detailsObject);

    const {
      base_marketplace_listing_title,
      delivery_types,
      is_live,
      is_sold,
      listing_photos,
      primary_listing_photo,
      listing_price,
      location,
      location_text,
      marketplace_listing_title,
      redacted_description,
      shipping_offered,
      story: { strikethrough_pric: discount },
      attribute_data,
    } = detailsObject.data.viewer.marketplace_product_details_page.target;

    const transformedDetailsObject = {
      listingTitle: base_marketplace_listing_title,
      secondaryTitle: marketplace_listing_title,
      deliveryTypes: delivery_types,
      available: is_live,
      sold: is_sold,
      mainPhoto: primary_listing_photo.listing_image.uri,
      // photo_1: listing_photos[0].image.uri,
      // photo_2: primary_listing_photo[1].image.uri,
      // photo_3: primary_listing_photo[2].image.uri,
      // photo_4: primary_listing_photo[3].image.uri,
      price: listing_price.amount,
      currency: listing_price.currency,
      geolocation: location,
      location: location_text.text,
      description: redacted_description.text,
      shipping: shipping_offered,
      discount: { discount },
      labels: attribute_data,
    };

    console.log("this is listig details ", transformedDetailsObject);
  } catch (error) {
    console.log("Error while getting lsistsngd detasils", error);
  }
};
export const detailedListings = async () => {
  // const ids = await fetchListings();
  // const detailedListings = ids.map((id: String) => {
  //   fetchListingsDetails(id);
  // });
  fetchListingsDetails("1720836448393684");

  return detailedListings;
};
