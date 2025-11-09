"use strict";(()=>{var e={};e.id=786,e.ids=[786],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},21727:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>l,patchFetch:()=>y,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>m,staticGenerationAsyncStorage:()=>p});var s={};t.r(s),t.d(s,{GET:()=>c});var o=t(49303),a=t(88716),n=t(60670),i=t(87070);async function c(){try{let e=new Date,r=new Date(e.getTime()-864e5),t=await fetch(process.env.NEXT_PUBLIC_BITQUERY_URL,{method:"POST",headers:{"Content-Type":"application/json","X-API-KEY":process.env.NEXT_PUBLIC_BITQUERY_KEY},body:JSON.stringify({query:`
          query {
            ethereum {
              dexTrades(
                options: { limit: 10, desc: "trades" }
                time: { since: "${r.toISOString()}" }
              ) {
                baseCurrency {
                  symbol
                  name
                  address
                }
                quoteCurrency {
                  symbol
                }
                quotePrice
                block {
                  timestamp {
                    time(format: "%Y-%m-%d %H:%M:%S")
                  }
                }
                trades: count
              }
            }
          }
        `})}),s=await t.json();if(s.errors)throw console.error("Bitquery API error:",s.errors),Error(s.errors[0].message);if(!s.data?.ethereum?.dexTrades)throw console.error("Unexpected data structure:",s),Error("Invalid data structure received from Bitquery");let o=new Map;s.data.ethereum.dexTrades.forEach(e=>{let r=e.baseCurrency.address;(!o.has(r)||e.trades>o.get(r).trades)&&o.set(r,{id:r,name:e.baseCurrency.name,symbol:e.baseCurrency.symbol,price:e.quotePrice,priceChange:0,trades:e.trades})});let a=Array.from(o.values());return i.NextResponse.json(a)}catch(e){return console.error("Error fetching cryptocurrency data:",e),i.NextResponse.json({error:"Failed to fetch cryptocurrency data",details:e instanceof Error?e.message:"Unknown error"},{status:500})}}let u=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/coins/route",pathname:"/api/coins",filename:"route",bundlePath:"app/api/coins/route"},resolvedPagePath:"/Users/bash/Documents/GitHub/crypticApp/src/app/api/coins/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:p,serverHooks:m}=u,l="/api/coins/route";function y(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:p})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,211,138],()=>t(21727));module.exports=s})();