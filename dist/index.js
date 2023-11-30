var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import fetch from "node-fetch";
const fetchProjectors = () => __awaiter(void 0, void 0, void 0, function* () {
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
                Referer: "https://www.facebook.com/marketplace/brussels/search/?query=projector",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            body: "av=100000400483429&__user=100000400483429&__a=1&__req=13&__hs=19691.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1010124865&__s=ls1g09%3Am1dl45%3Anlou0h&__hsi=7307332585609281094&__dyn=7AzHK4HzE4e5Q1ryaxG4Vp62-m1xDwAxu13wFwhUKbgS3q5UObwNwnof8boG0x8bo6u3y4o2Gwfi0LVEtwMw65xO2OU7m2210wEwgolzUO0-E7m4oaEnxO0Bo7O2l2Utwwwi831wiE567Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E6a1TxWm2CVEbUGdG1Fwh888cA0z8c86-3u364UrwFg662S269wqQ1FwgU4q3G3WfKufw&__csr=guNvf92AOn4nmTsAGsJ8IpPiZtEA89h2IOHRFljXnO8DvqHO-htAOGJvGJbHhailEgWQWQ9AQXJkcWimFoyquKVbK9J1KGyoOqjtQuqFQhVBDyokGEPGm9gHyuimqumiicxlzpV8gK4UhGcwyzEx0IyF8W2a4oK5oO8GegC9Ay98F0IDxCi68Ku1ExqfwyAykcAUyczA18U5q9zEqxq1iKax-79UiJ1teUyaG6EhwjocosxC2e2W3O2e7ofE9U9E7OEa8pDw50z46E2KwzwZwmK48ng0IW9vBw8AweE84FUK5U0Uy0xE3Xy68g08_U0cvE0mDg0iCw0aQi0iy0kK0dVg1582Dw12m59E5i0dpwa20c7w0ALw0xaxC260diw0SXw9G0oqdw1Op04EwZw16C09zGyGu2e3mty8&__comet_req=15&fb_dtsg=NAcMeuqG6xiPhv56mQitXXFuG8xVFGQxF1kv70ZM3q9XczuhbXvPJNw%3A36%3A1620060741&jazoest=25606&lsd=IM0BpqcqwOC3cVucrfPWSa&__aaid=0&__spin_r=1010124865&__spin_b=trunk&__spin_t=1701370949&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentContainerQuery&variables=%7B%22buyLocation%22%3A%7B%22latitude%22%3A50.86424%2C%22longitude%22%3A4.35234%7D%2C%22contextual_data%22%3Anull%2C%22count%22%3A24%2C%22cursor%22%3Anull%2C%22flashSaleEventID%22%3A%22%22%2C%22hasFlashSaleEventID%22%3Afalse%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22projector%20screen%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A50.86424%2C%22filter_location_longitude%22%3A4.35234%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A56%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22savedSearchID%22%3Anull%2C%22savedSearchQuery%22%3A%22projector%20screen%22%2C%22scale%22%3A1%2C%22shouldIncludePopularSearches%22%3Afalse%2C%22topicPageParams%22%3A%7B%22location_id%22%3A%22brussels%22%2C%22url%22%3Anull%7D%7D&server_timestamps=true&doc_id=24319041337710208",
            method: "POST",
        });
        const { data } = yield res.json();
        const edges = data.marketplace_search.feed_units.edges;
        edges.forEach((element, i) => {
            console.log("elemenet", i, element);
        });
    }
    catch (error) { }
});
fetchProjectors();
const app = express();
const port = 9000;
app.get("/", (req, res) => {
    res.send("hellp");
});
app.listen(port, () => {
    console.log("server started this is new");
});
