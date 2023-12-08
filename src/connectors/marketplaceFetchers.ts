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
        "viewport-width": "1575",
        "x-asbd-id": "129477",
        "x-fb-friendly-name": "CometMarketplaceSearchContentContainerQuery",
        "x-fb-lsd": "4hTmycgQboyHyGN0XFG00X",
        cookie:
          "datr=55pTZId5Mb2O7gaJSg2Xd8Ko; sb=6ZpTZOMS1w5q5HFDlqwggITN; locale=en_US; vpd=v1%3B1192x582x2; c_user=100000400483429; oo=v1; fr=0pApcG1ZyjmKiwihH.AWXMLif0gaRTtVK_F8LxtMPbvZQ.BlaxLL.yL.AAA.0.0.BlcIs8.AWWZwLwQHXk; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1701962747457%2C%22v%22%3A1%7D; xs=36%3AR0G1Kf1ixFjmGw%3A2%3A1701515977%3A-1%3A5767%3A%3AAcUJMd1M4HrBe9lh7wBhMOBQeAk_dh6f8LQ09HC0hFU; wd=1575x1279",
        Referer:
          "https://www.facebook.com/marketplace/brussels/search/?query=projector",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: "av=100000400483429&__user=100000400483429&__a=1&__req=k1&__hs=19698.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1010269597&__s=5zxe2i%3Axyd2qp%3Awtjp88&__hsi=7309874316213573765&__dyn=7AzHK4HwBgDx-5Q1ryaxG4Qihw9uu2i5U4e2CE4ibyQdwSAx-bwyzE5S3O2Saxa1NwJwkEkwUx60xU8k1sw9u0LVEtwMw65xOfxOU7m2210wEwgolzUO0wE7u12wOx62G5Usw9m1cwLwBgK7o8417wIw9i1awhUC7Udo5qfK0zEkxe2GexeeDwkUtxGm2SUbElxm3y3aexfxmu3W3rwxwhFVovUy2a1ywtUuBwFKq2-azqwqo4i223908O3216xi4UdUcojxK2B0LwNwJwxyo566k1FwgU4q3G3WfKufw&__csr=gf4t7YfNY6kY8l2IJhYj6hqP_274nd4Nnis8lqOIDN2quyfaDOTOTfOnSgWFkHp5q8BjptrGGlWujQL9JlkDBGhKGAWUy8AyqB9ABryeIyBiAtTDGFpVEOX-q_y4GACjh48GVcBeGp-AmVolgVrjAl28y8Za-jABKicgGAX-qn_AXUJmlkECuVoGicoGiUiCAgJeGyryA5ppoDyoC4oGaz8lLyk4KqmjmUthkcybAK8iAUWETjx-dx2K8zHVFVK9GaK9yFKu9xau8BokCKE-dx22Zamqu6ohy9QUhF3UKmidxa9xy5US49oy6uiEixe6oybyEBeHHBDxSA8wJyWAzoKt1GEaFpo8kfm7HwLAxd2UJ0xUgyEsyp9ETKXxS4E9Eoxq2e0OE2Ewh8GiXxS17wAgCi1vw8274cK0DE3Twlo6C3S5U6i1sjIvAiFr5wQxyfobokyk5HDsg6Ux1yp7wo6bP1RB95k9Exkiccx5Pwny0oEo-0IE7e58mwbiExxC0rOc_xu1zADUjhF8cU4uhkE4q3u2C2aaw0Anw4_w1tu0h6bJa0s61swfcE0HO0bDwZw61wfR6w4RwuU07Hy0ca5pU3sw0T-wbS4o13U3Ew5Yw9N04-w4hwzg1zEG0MU1GE6e9zA0cYwbO4UlRwso1So2-weq1Jw16e091w3OU0g6w7HwkUma0bXw27EG2S0bMw1a-0hKm0cDwf5xS0ffw1mu0Ot051w28U1gA3a0g56DgG0j20Fo2xy8yaz9ayoGz02mEjwdGt2E0z50&__comet_req=15&fb_dtsg=NAcOfNhwv2pXnF5JJXjCXlRLrA-RWuDoOgUfYEY1rXzjXo7Vyp7XM1Q%3A36%3A1701515977&jazoest=25539&lsd=4hTmycgQboyHyGN0XFG00X&__aaid=0&__spin_r=1010269597&__spin_b=trunk&__spin_t=1701962742&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentContainerQuery&variables=%7B%22buyLocation%22%3A%7B%22latitude%22%3A50.86424%2C%22longitude%22%3A4.35234%7D%2C%22contextual_data%22%3Anull%2C%22count%22%3A24%2C%22cursor%22%3Anull%2C%22flashSaleEventID%22%3A%22%22%2C%22hasFlashSaleEventID%22%3Afalse%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22projector%20screen%20with%20stand%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A50.86424%2C%22filter_location_longitude%22%3A4.35234%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A56%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22savedSearchID%22%3Anull%2C%22savedSearchQuery%22%3A%22projector%20screen%20with%20stand%22%2C%22scale%22%3A1%2C%22shouldIncludePopularSearches%22%3Afalse%2C%22topicPageParams%22%3A%7B%22location_id%22%3A%22brussels%22%2C%22url%22%3Anull%7D%7D&server_timestamps=true&doc_id=24319041337710208",
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
    const res = await fetch("https://www.facebook.com/api/graphql/", {
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
        "viewport-width": "295",
        "x-asbd-id": "129477",
        "x-fb-friendly-name": "MarketplacePDPContainerQuery",
        "x-fb-lsd": "4hTmycgQboyHyGN0XFG00X",
        cookie:
          "datr=55pTZId5Mb2O7gaJSg2Xd8Ko; sb=6ZpTZOMS1w5q5HFDlqwggITN; vpd=v1%3B1192x582x2; c_user=100000400483429; oo=v1; fr=0pApcG1ZyjmKiwihH.AWXMLif0gaRTtVK_F8LxtMPbvZQ.BlaxLL.yL.AAA.0.0.BlcIs8.AWWZwLwQHXk; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1701962747457%2C%22v%22%3A1%7D; wd=295x1286; xs=36%3AR0G1Kf1ixFjmGw%3A2%3A1701515977%3A-1%3A5767%3A%3AAcVL5J8vwOzfnpOUPkAAOpe2rm-vxkT6ZZ80fHADkXQ",
        Referer:
          "https://www.facebook.com/marketplace/brussels/search?query=projector%20s",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: `
      av=100000400483429
      &__user=100000400483429
      &__a=1
      &__req=m6
      &__hs=19698.HYP%3Acomet_pkg.2.1..2.1
      &dpr=1
      &__ccg=EXCELLENT
      &__rev=1010269597
      &__s=tn73o5%3Axyd2qp%3Awtjp88
      &__hsi=7309874316213573765
      &__dyn=7AzHK4HwBgDx-5Q1ryaxG4Qihw9uu2i5U4e2CE4ibyQdwSAx-bwyzE5S3O2Saxa1NwJwkEkwUx60xU8k1sw9u0LVEtwMw65xOfxOU7m2210wEwgolzUO0wE7u12wOx62G5Usw9m1cwLwBgK7o8417wIw9i1awhUC7Udo5qfK0zEkxe2GexeeDwkUtxGm2SUbElxm3y3aexfxmu3W3rwxwhFVovUy2a1ywtUuBwFKq2-azqwqo4i223908O3216xi4UdUcojxK2B0LwNwJwxyo566k1FwgU4q3G3WfKufw
      &__csr=gf4t7YfNY6kY8l2IJhYj6hqP_274nd4Nnis8lqOIDN2quyfaDOTOTfOnSgWFkHp5q8BjptrGGlWujQL9JlkDBGhKGAWUy8AyqB9ABryeIyBiAtTDGFpVEOX-q_y4GACjh48GVcBeGp-AmVolgVrjAl28y8Za-jABKicgGAX-qn_AXUJmlkECuVoGicoGiUiCAgJeGyryA5ppoDyoC4oGaz8lLyk4KqmjmUthkcybAK8iAUWETjx-dx2K8zHVFVK9GaK9yFKu9xau8BokCKE-dx22Zamqu6ohy9QUhF3UKmidxa9xy5US49oy6uiEixe6oybyEBeHHBDxSA8wJyWAzoKt1GEaFpo8kfm7HwLAxd2UJ0xUgyEsyp9ETKXxS4E9Eoxq2e0OE2Ewh8GiXxS17wAgCi1vw8274cK0DE3Twlo6C3S5U6i1sjIvAiFr5wQxyfobokyk5HDsg6Ux1yp7wo6bP1RB95k9Exkiccx5Pwny0oEo-0IE7e58mwbiExxC0rOc_xu1zADUjhF8cU4uhkE4q3u2C2aaw0Anw4_w1tu0h6bJa0s61swfcE0HO0bDwZw61wfR6w4RwuU07Hy0ca5pU3sw0T-wbS4o13U3Ew5Yw9N04-w4hwzg1zEG0MU1GE6e9zA0cYwbO4UlRwso1So2-weq1Jw16e091w3OU0g6w7HwkUma0bXw27EG2S0bMw1a-0hKm0cDwf5xS0ffw1mu0Ot051w28U1gA3a0g56DgG0j20Fo2xy8yaz9ayoGz02mEjwdGt2E0z50&__comet_req=15&fb_dtsg=NAcOfNhwv2pXnF5JJXjCXlRLrA-RWuDoOgUfYEY1rXzjXo7Vyp7XM1Q%3A36%3A1701515977
      &jazoest=25539
      &lsd=4hTmycgQboyHyGN0XFG00X
      &__aaid=0
      &__spin_r=1010269597
      &__spin_b=trunk
      &__spin_t=1701962742
      &fb_api_caller_class=RelayModern
      &fb_api_req_friendly_name=MarketplacePDPContainerQuery
      &variables=${encodedBodyVariable}
      &server_timestamps=true
      &doc_id=7126632264094278`,
      method: "POST",
    });

    const detailsObject = await res.json();
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

    // console.log("this is listing details ", transformedDetailsObject);
  } catch (error) {
    console.log("Error while getting lsitng details", error);
  }
};
export const detailedListings = async () => {
  const ids = await fetchListings();
  const detailedListings = ids.map((id: String) => {
    fetchListingsDetails(id);
  });

  return detailedListings;
};
