import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";

const isServerSide = typeof window == 'undefined';

const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
    url: 'https://api-sa-east-1.graphcms.com/v2/ckzppiotf47aq01z20f22c40j/master',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache };