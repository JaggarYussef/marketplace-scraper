var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
export const fetchProjectors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch("https://www.facebook.com/api/graphql/", {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9,nl;q=0.8,ar;q=0.7,fr;q=0.6",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                dpr: "1",
                pragma: "no-cache",
                "sec-ch-prefers-color-scheme": "dark",
                "sec-ch-ua": '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                "sec-ch-ua-full-version-list": '"Google Chrome";v="119.0.6045.199", "Chromium";v="119.0.6045.199", "Not?A_Brand";v="24.0.0.0"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": '""',
                "sec-ch-ua-platform": '"Windows"',
                "sec-ch-ua-platform-version": '"10.0.0"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "viewport-width": "384",
                "x-asbd-id": "129477",
                "x-fb-friendly-name": "CometMarketplaceSearchContentContainerQuery",
                "x-fb-lsd": "IM0BpqcqwOC3cVucrfPWSa",
                cookie: "c_user=100000400483429; datr=55pTZId5Mb2O7gaJSg2Xd8Ko; sb=6ZpTZOMS1w5q5HFDlqwggITN; dpr=2; locale=en_US; fbl_st=101426264%3BT%3A28356165; fbl_cs=AhD%2Bhptlu7SVyBEw4Y4gwRCMGEVPYVJGYUJsPVAydndBTXYycm5MK2NPKw; fbl_ci=762640645022640; vpd=v1%3B1192x582x2; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1701370953886%2C%22v%22%3A1%7D; xs=36%3AJbqfLHdBWZnOFA%3A2%3A1620060741%3A-1%3A5767%3A%3AAcWDCwDDpAYwXJE7RL7fBm_hV3eEIfqyUuvIV17bXJmA; fr=11Ucj0wOswRHWqFTc.AWVl6Xs8cSZfMzeH0o_hYr3CeBQ.BlaNxN.yL.AAA.0.0.BlaNxN.AWWebgV8nmc; wd=384x1286",
                Referer: "https://www.facebook.com/marketplace/item/1076205730480348",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            body: `av=100000400483429&__user=100000400483429&__a=1&__req=13&__hs=19691.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1010124865&__s=ls1g09%3Am1dl45%3Anlou0h&__hsi=7307332585609281094&__dyn=7AzHK4HzE4e5Q1ryaxG4Vp62-m1xDwAxu13wFwhUKbgS3q5UObwNwnof8boG0x8bo6u3y4o2Gwfi0LVEtwMw65xO2OU7m2210wEwgolzUO0-E7m4oaEnxO0Bo7O2l2Utwwwi831wiE567Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E6a1TxWm2CVEbUGdG1Fwh888cA0z8c86-3u364UrwFg662S269wqQ1FwgU4q3G3WfKufw&__csr=guNvf92AOn4nmTsAGsJ8IpPiZtEA89h2IOHRFljXnO8DvqHO-htAOGJvGJbHhailEgWQWQ9AQXJkcWimFoyquKVbK9J1KGyoOqjtQuqFQhVBDyokGEPGm9gHyuimqumiicxlzpV8gK4UhGcwyzEx0IyF8W2a4oK5oO8GegC9Ay98F0IDxCi68Ku1ExqfwyAykcAUyczA18U5q9zEqxq1iKax-79UiJ1teUyaG6EhwjocosxC2e2W3O2e7ofE9U9E7OEa8pDw50z46E2KwzwZwmK48ng0IW9vBw8AweE84FUK5U0Uy0xE3Xy68g08_U0cvE0mDg0iCw0aQi0iy0kK0dVg1582Dw12m59E5i0dpwa20c7w0ALw0xaxC260diw0SXw9G0oqdw1Op04EwZw16C09zGyGu2e3mty8&__comet_req=15&fb_dtsg=NAcMeuqG6xiPhv56mQitXXFuG8xVFGQxF1kv70ZM3q9XczuhbXvPJNw%3A36%3A1620060741&jazoest=25606&lsd=IM0BpqcqwOC3cVucrfPWSa&__aaid=0&__spin_r=1010124865&__spin_b=trunk&__spin_t=1701370949&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentContainerQuery&variables=%7B%22buyLocation%22%3A%7B%22latitude%22%3A50.86424%2C%22longitude%22%3A4.35234%7D%2C%22contextual_data%22%3Anull%2C%22count%22%3A24%2C%22cursor%22%3Anull%2C%22flashSaleEventID%22%3A%22%22%2C%22hasFlashSaleEventID%22%3Afalse%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22projector%20screen%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A50.86424%2C%22filter_location_longitude%22%3A4.35234%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A56%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22savedSearchID%22%3Anull%2C%22savedSearchQuery%22%3A%22projector%20screen%22%2C%22scale%22%3A1%2C%22shouldIncludePopularSearches%22%3Afalse%2C%22topicPageParams%22%3A%7B%22location_id%22%3A%22brussels%22%2C%22url%22%3Anull%7D%7D&server_timestamps=true&
        doc_id=24319041337710208`,
            method: "POST",
        });
        const edges = data.marketplace_search.feed_units.edges;
        edges.forEach((element, i) => {
            console.log("elemenst", i, element);
        });
    }
    catch (error) { }
});
export const fetchProjectorsDetails = () => __awaiter(void 0, void 0, void 0, function* () {
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
        __dyn: "7AzHK4HzEmgDx-9zk1ryaxG4QihwLBwopU98nwgUaqwh8KbgS3qi4EObwNwnof8boG4E762S1DwUx60xU8k1sw9u0LVEy58c83RwvEgxO2OU7m2210wEwgolzUO0wE7u12wOx62G5Usw9m1cwLwBgK7o8417wc61awkovwRwlE-U2exi4UaEW4UWu1jxS6FobrwKxm5oe8cEW4-5pUfEe88o4qum7-8wywoE7u7FoarCwLyESE6C14wwwOg2cwMwhEkxe3u364UrwFgbUcobo8oC1hxB0qo4e3i4oeEfE-VU-",
        __csr: "gbk4cfNcIl4Mj_6hcG9NcrtEJtMBddkGf4MALkj6N4FbKLHcvaJv9hsDGQBnjoBaJfLAq9GAjAiKFrp9dKiBCVyXQWFAFqLSrJD_XjHkxt4puUFaByrpJKAiQm9LyLBFpuExnJtO5GimQWByXAokQhbQmF4dykGVKmiGHVAaBLBGbXKaK5eieQKuUHy98KaDzqVqhaFaCtaaCADgyqqh2u4bwFyEWKi9GfAAybooCyojAGK5eHgC8mU-bBoCm48OFJ28W8BUG66cBx6744K7ppU9VUSGBUC4FaUszES9x2FK8xe22HwIzosQ9mm3-5pm5VUy4by448aoOim2rU_ybwECyQexfBK2ei5oogcGxzhrAzo8o988p8tKEeEpxujqBU5Cew95by8nwqoW0CJk9xm17zEC4qBxKq14wmUoxEC9wh19A9wgoB1X8iOlqDycqy8oaPmB8ljHiNcM7mbJxebgSmiUjwMxm65xy5LyoZ1K0wU8e18wHxO5U1185y49Gxy7y28nU5e1ax28oKby8iwbG59UTzk1pzocCcwtEdE6u0wp8jz87y0l2010pw4LGha2l4wbu0Imm8w2Go2bw5sg0Evy8520o-0G82ow0v7o0Ma4Q5IU2jw0Ukxt1ne0gq0P82Xw5ODw96481lE0HO09EwupKfw2Jojxn815w5Sw7twdu0Qo6W0102DEE1V-089w6WwNzU0N_xG0U80PS0qC0fuym19w0Cxwbe0djwdC1HAF058A9wdC1Owho23oy6O-Fkaw2DQ082y4awgE5C4UlxWu2y",
        __comet_req: "15",
        fb_dtsg: "NAcO85ZUEqNeJo_7Pw-uqef_6WEI57C97MUGC84Aq7J7IZUDPx-I5YQ:36:1701515977",
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
        const res = yield fetch("https://www.facebook.com/api/graphql/", {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9,nl;q=0.8,ar;q=0.7,fr;q=0.6",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                dpr: "1",
                pragma: "no-cache",
                "sec-ch-prefers-color-scheme": "dark",
                "sec-ch-ua": '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                "sec-ch-ua-full-version-list": '"Google Chrome";v="119.0.6045.200", "Chromium";v="119.0.6045.200", "Not?A_Brand";v="24.0.0.0"',
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
                cookie: "datr=55pTZId5Mb2O7gaJSg2Xd8Ko; sb=6ZpTZOMS1w5q5HFDlqwggITN; locale=en_US; vpd=v1%3B1192x582x2; c_user=100000400483429; oo=v1; fr=0pApcG1ZyjmKiwihH.AWXMLif0gaRTtVK_F8LxtMPbvZQ.BlaxLL.yL.AAA.0.0.BlcIs8.AWWZwLwQHXk; xs=36%3AR0G1Kf1ixFjmGw%3A2%3A1701515977%3A-1%3A5767%3A%3AAcVoKa7-oOjAAXUeNKiU8_OaHjZwasaFTuWE-WSC4Q; presence=C%7B%22lm3%22%3A%22u.100000244665819%22%2C%22t3%22%3A%5B%5D%2C%22utc3%22%3A1701875248823%2C%22v%22%3A1%7D; wd=1575x1279",
                Referer: "https://www.facebook.com/marketplace/brussels/search/?query=projector",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            body: "",
            method: "POST",
        });
        const { data } = yield res.json();
        console.log("detailed data", data);
    }
    catch (error) {
        console.log("Error while getting lsiting details", error);
    }
});
