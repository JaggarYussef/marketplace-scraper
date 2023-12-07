import fetch from "node-fetch";

export const fetchProjectors = async () => {
  try {
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
    const listingsArray = edges.data.marketplace_search.feed_units.edges;

    const listingsIdsArray = listingsArray
      .filter((listing) => listing.node.listing)
      .map((listing) => {
        const id = listing.node.listing.id;
        return id;
      });
    return listingsIdsArray;
  } catch (error) {
    console.log("error fetching projectors", error);
  }
};

export const fetchProjectorsDetails = async () => {
  const bodyVariables = {
    UFI2CommentsProvider_commentsKey: "MarketplacePDP",
    feedbackSource: 56,
    feedLocation: "MARKETPLACE_MEGAMALL",
    referralCode: "null",
    scale: 1,
    should_show_new_pdp: false,
    targetId: "703631001718511",
    useDefaultActor: false,
    __relay_internal__pv__CometUFIIsRTAEnabledrelayprovider: false,
    __relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider: false,
  };
  const encodedVariables = encodeURI(JSON.stringify(bodyVariables));
  console.log("encoded VARS", encodedVariables);

  const bodyObject = JSON.stringify({
    av: "100000400483429",
    __user: "100000400483429",
    __a: "1",
    __req: "63",
    __hs: "19697.HYP%3Acomet_pkg.2.1..2.1",
    dpr: "1",
    __ccg: "EXCELLENT",
    __rev: "1010238839",
    __s: "zb1c4z:xyd2qp:pq0chm",
    __hsi: "7309495286217578047",
    __dyn:
      "7AzHK4HzEmgDx-9zk1ryaxG4QihwLBwopU98nwgUaqwh8KbgS3qi4EObwNwnof8boG4E762S1DwUx60xU8k1sw9u0LVEy58c83RwvEgxO2OU7m2210wEwgolzUO0wE7u12wOx62G5Usw9m1cwLwBgK7o8417wc61awkovwRwlE-U2exi4UaEW4UWu1jxS6FobrwKxm5oe8cEW4-5pUfEe88o4qum7-8wywoE7u7FoarCwLyESE6C14wwwOg2cwMwhEkxe3u364UrwFgbUcobo8oC1hxB0qo4e3i4oeEfE-VU-",
    __csr:
      "gbk4cfNcIl4Mj_6hcG9NcrtEJtMBddkGf4MALkj6N4FbKLHcvaJv9hsDGQBnjoBaJfLAq9GAjAiKFrp9dKiBCVyXQWFAFqLSrJD_XjHkxt4puUFaByrpJKAiQm9LyLBFpuExnJtO5GimQWByXAokQhbQmF4dykGVKmiGHVAaBLBGbXKaK5eieQKuUHy98KaDzqVqhaFaCtaaCADgyqqh2u4bwFyEWKi9GfAAybooCyojAGK5eHgC8mU-bBoCm48OFJ28W8BUG66cBx6744K7ppU9VUSGBUC4FaUszES9x2FK8xe22HwIzosQ9mm3-5pm5VUy4by448aoOim2rU_ybwECyQexfBK2ei5oogcGxzhrAzo8o988p8tKEeEpxujqBU5Cew95by8nwqoW0CJk9xm17zEC4qBxKq14wmUoxEC9wh19A9wgoB1X8iOlqDycqy8oaPmB8ljHiNcM7mbJxebgSmiUjwMxm65xy5LyoZ1K0wU8e18wHxO5U1185y49Gxy7y28nU5e1ax28oKby8iwbG59UTzk1pzocCcwtEdE6u0wp8jz87y0l2010pw4LGha2l4wbu0Imm8w2Go2bw5sg0Evy8520o-0G82ow0v7o0Ma4Q5IU2jw0Ukxt1ne0gq0P82Xw5ODw96481lE0HO09EwupKfw2Jojxn815w5Sw7twdu0Qo6W0102DEE1V-089w6WwNzU0N_xG0U80PS0qC0fuym19w0Cxwbe0djwdC1HAF058A9wdC1Owho23oy6O-Fkaw2DQ082y4awgE5C4UlxWu2y",
    __comet_req: "15",
    fb_dtsg:
      "NAcO85ZUEqNeJo_7Pw-uqef_6WEI57C97MUGC84Aq7J7IZUDPx-I5YQ:36:1701515977",
    jazoest: "25014",
    lsd: "9e_v1CQYIGOOPMJJD3DKXX",
    __aaid: "0",
    __spin_r: "1010238839",
    __spin_b: "trunk",
    __spin_t: "1701874492",
    fb_api_caller_class: "RelayModern",
    fb_api_req_friendly_name: "MarketplacePDPContainerQuery",
    variables: encodedVariables,
    server_timestamps: "true",
    doc_id: "7126632264094278",
  });

  console.log("body", bodyObject);

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
        "viewport-width": "1575",
        "x-asbd-id": "129477",
        "x-fb-friendly-name": "MarketplacePDPContainerQuery",
        "x-fb-lsd": "9e_v1CQYIGOOPMJJD3DKXX",
        cookie:
          "datr=55pTZId5Mb2O7gaJSg2Xd8Ko; sb=6ZpTZOMS1w5q5HFDlqwggITN; locale=en_US; vpd=v1%3B1192x582x2; c_user=100000400483429; oo=v1; fr=0pApcG1ZyjmKiwihH.AWXMLif0gaRTtVK_F8LxtMPbvZQ.BlaxLL.yL.AAA.0.0.BlcIs8.AWWZwLwQHXk; xs=36%3AR0G1Kf1ixFjmGw%3A2%3A1701515977%3A-1%3A5767%3A%3AAcVoKa7-oOjAAXUeNKiU8_OaHjZwasaFTuWE-WSC4Q; presence=C%7B%22lm3%22%3A%22u.100000244665819%22%2C%22t3%22%3A%5B%5D%2C%22utc3%22%3A1701875248823%2C%22v%22%3A1%7D; wd=1575x1279",
        Referer:
          "https://www.facebook.com/marketplace/brussels/search/?query=projector",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: "",
      method: "POST",
    });

    const { data } = await res.json();

    console.log("detailed data", data);
  } catch (error) {
    console.log("Error while getting lsiting details", error);
  }
};
