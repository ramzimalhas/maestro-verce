var m=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var U=Object.prototype.hasOwnProperty;var N=r=>m(r,"__esModule",{value:!0});var u=(r,s)=>{for(var t in s)m(r,t,{get:s[t],enumerable:!0})},b=(r,s,t,i)=>{if(s&&typeof s=="object"||typeof s=="function")for(let e of v(s))!U.call(r,e)&&(t||e!=="default")&&m(r,e,{get:()=>s[e],enumerable:!(i=p(s,e))||i.enumerable});return r};var d=(r=>(s,t)=>r&&r.get(s)||(t=b(N({}),s,1),r&&r.set(s,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var y={};u(y,{default:()=>g});var a=require("@raycast/api"),n=require("react");var l=[{explorerName:"Etherscan",imageUrl:"https://etherscan.io/images/logo-ether.svg",chainName:"Ethereum",baseUrl:"etherscan.io",chainId:1,currency:"ETH",iconUri:"../assets/etherscan.svg"},{explorerName:"Etherscan",imageUrl:"https://etherscan.io/images/logo-ether.svg",chainName:"Ethereum Ropsten",baseUrl:"ropsten.etherscan.io",chainId:3,testNet:!0,currency:"ETH",iconUri:"../assets/etherscan.svg"},{explorerName:"Etherscan",imageUrl:"https://etherscan.io/images/logo-ether.svg",chainName:"Ethereum Rinkeby",baseUrl:"rinkeby.etherscan.io",chainId:4,testNet:!0,currency:"ETH",iconUri:"../assets/etherscan.svg"},{explorerName:"Etherscan",imageUrl:"https://etherscan.io/images/logo-ether.svg",chainName:"Ethereum Goerli",baseUrl:"goerli.etherscan.io",chainId:5,testNet:!0,currency:"ETH",iconUri:"../assets/etherscan.svg"},{explorerName:"Etherscan",imageUrl:"https://etherscan.io/images/logo-ether.svg",chainName:"Ethereum Kovan",baseUrl:"kovan.etherscan.io",chainId:42,testNet:!0,currency:"ETH",iconUri:"../assets/etherscan.svg"},{explorerName:"Optimistic",imageUrl:"https://etherscan.io/images/services/logo-Optimism.svg",chainName:"Optimism",baseUrl:"optimistic.etherscan.io",iconUri:"../assets/Optimism.svg",chainId:10,currency:"ETH"},{explorerName:"Optimistic",imageUrl:"https://etherscan.io/images/services/logo-Optimism.svg",chainName:"Optimism Kovan",testNet:!0,baseUrl:"kovan-optimistic.etherscan.io",iconUri:"../assets/Optimism.svg",chainId:69,currency:"ETH"},{explorerName:"BscScan",imageUrl:"https://etherscan.io/images/services/logo-bscscan.svg",chainName:"BNB Smart Chain",baseUrl:"bscscan.com",chainId:56,iconUri:"../assets/bscscan.svg",currency:"BNB"},{explorerName:"BscScan",imageUrl:"https://etherscan.io/images/services/logo-bscscan.svg",chainName:"BNB Smart Chain Testnet",testNet:!0,baseUrl:"testnet.bscscan.com",iconUri:"../assets/bscscan.svg",chainId:97,currency:"BNB"},{explorerName:"Hooscan",imageUrl:"https://etherscan.io/images/services/logo-hoo.svg",chainName:"Hoo Smart Chain",baseUrl:"hooscan.com",iconUri:"../assets/hooscan.svg",chainId:70,currency:"HOO"},{explorerName:"polygonscan",imageUrl:"https://etherscan.io/images/services/logo-polygonscan.svg",chainName:"Polygon",baseUrl:"polygonscan.com",iconUri:"../assets/polygonscan.svg",chainId:137,currency:"MATIC"},{explorerName:"FTMScan",imageUrl:"https://etherscan.io/images/services/logo-ftmscan-new.svg",chainName:"Fantom",baseUrl:"ftmscan.com",chainId:250,iconUri:"../assets/ftmscan.svg",currency:"FTM"},{explorerName:"FTMScan",imageUrl:"https://etherscan.io/images/services/logo-ftmscan-new.svg",chainName:"Fantom Testnet",testNet:!0,baseUrl:"testnet.ftmscan.com",iconUri:"../assets/ftmscan.svg",currency:"FTM",chainId:4002},{explorerName:"polygonscan",imageUrl:"https://etherscan.io/images/services/logo-polygonscan.svg",chainName:"Polygon Mumbai",testNet:!0,baseUrl:"polygonscan.com",iconUri:"../assets/polygonscan.svg",currency:"MATIC",chainId:80001},{explorerName:"snowtrace",imageUrl:"https://etherscan.io/images/services/logo-snowtrace.svg",chainName:"Avalanche C-Chain",baseUrl:"snowtrace.io",iconUri:"../assets/snowtrace.svg",chainId:43114,currency:"AVAX"},{explorerName:"snowtrace",imageUrl:"https://etherscan.io/images/services/logo-snowtrace.svg",chainName:"Avalanche C-Chain Fuji",testNet:!0,baseUrl:"testnet.snowtrace.io",iconUri:"../assets/snowtrace.svg",currency:"AVAX",chainId:43113},{explorerName:"BTTCSCAN",imageUrl:"https://etherscan.io/images/services/logo-bttcscan.svg",chainName:"BitTorrent Chain Donau",testNet:!0,baseUrl:"testnet.bttcscan.com",currency:"BTT",iconUri:"../assets/bttcscan.svg",chainId:1028},{explorerName:"BTTCSCAN",imageUrl:"https://etherscan.io/images/services/logo-bttcscan.svg",chainName:"BitTorrent Chain",baseUrl:"bttcscan.com",currency:"BTT",iconUri:"../assets/bttcscan.svg",chainId:199},{explorerName:"Aurorascan",imageUrl:"https://etherscan.io/images/services/logo-aurora.svg",chainName:"Aurora",baseUrl:"aurorascan.dev",currency:"ETH",iconUri:"../assets/aurora.svg",chainId:1313161554},{explorerName:"Aurorascan",imageUrl:"https://etherscan.io/images/services/logo-aurora.svg",chainName:"Aurora Testnet",testNet:!0,baseUrl:"testnet.aurorascan.dev",iconUri:"../assets/aurora.svg",currency:"ETH",chainId:1313161555},{explorerName:"Celoscan",imageUrl:"https://etherscan.io/images/services/logo-celo.svg",chainName:"Celo Chain",baseUrl:"celoscan.xyz",chainId:42220,currency:"CELO",iconUri:"../assets/celo.svg"},{explorerName:"Celoscan",imageUrl:"https://etherscan.io/images/services/logo-celo.svg",chainName:"Celo Alfajores",testNet:!0,baseUrl:"alfajores.celoscan.xyz",chainId:44787,iconUri:"../assets/celo.svg",currency:"CELO"},{explorerName:"CLVscan",imageUrl:"https://etherscan.io/images/services/logo-clvscan.svg",chainName:"CLV Chain",baseUrl:"clvscan.com",iconUri:"../assets/CLVscan.svg",chainId:1024,currency:"CLV"},{explorerName:"HecoInfo",imageUrl:"https://etherscan.io/images/services/logo-hecochain.svg",chainName:"Huobi ECO Chain",baseUrl:"hecoinfo.com",iconUri:"../assets/hecoinfo.svg",currency:"HT",chainId:128},{explorerName:"HecoInfo",imageUrl:"https://etherscan.io/images/services/logo-hecochain.svg",chainName:"Huobi ECO Chain Testnet",testNet:!0,baseUrl:"testnet.hecoinfo.com",iconUri:"../assets/hecoinfo.svg",currency:"htt",chainId:256},{explorerName:"Arbiscan",imageUrl:"https://etherscan.io/images/services/logo-arbitrum.svg",chainName:"Arbitrum",baseUrl:"arbiscan.io",currency:"ETH",chainId:42161,iconUri:"../assets/arbitrum.svg"},{explorerName:"Arbiscan",imageUrl:"https://etherscan.io/images/services/logo-arbitrum.svg",chainName:"Arbitrum Rinkeby",testNet:!0,baseUrl:"testnet.arbiscan.io",chainId:421611,iconUri:"../assets/arbitrum.svg",currency:"ETH"},{explorerName:"Moonscan",imageUrl:"https://etherscan.io/images/services/logo-moonbeam.svg",chainName:"Moonbeam",baseUrl:"moonbeam.moonscan.io",iconUri:"../assets/moonbeam.svg",currency:"GLMR",chainId:1284},{explorerName:"Moonscan",imageUrl:"https://moonbase.moonscan.io/images/logo.svg",chainName:"Moonbeam Moonbase Alpha",testNet:!0,baseUrl:"moonbase.moonscan.io",iconUri:"../assets/moonbase.svg",currency:"DEV",chainId:1287},{explorerName:"Moonscan",imageUrl:"https://etherscan.io/images/services/logo-moonriver.svg",chainName:"Moonriver",baseUrl:"moonriver.moonscan.io",iconUri:"../assets/moonriver.svg",currency:"MOVR",chainId:1285},{explorerName:"cronoscan",imageUrl:"https://etherscan.io/images/services/logo-cronos.svg",chainName:"Cronos",baseUrl:"cronoscan.com",chainId:25,currency:"TCRO",iconUri:"../assets/cronos.svg"}],h=l[0];function g(){let[r,s]=(0,n.useState)(null);(0,n.useEffect)(()=>{(async()=>{let o=await a.LocalStorage.getItem("selected-explorer");if(o)try{let c=JSON.parse(o);s(c)}catch(c){s(h),console.log(c)}})()},[]);let{pop:t}=(0,a.useNavigation)(),i=async e=>{await a.LocalStorage.setItem("selected-explorer",JSON.stringify(e)),s(e),t(),(0,a.showToast)({title:"Explorer changed",message:`${e.chainName}`})};return _jsx(a.List,{isShowingDetail:!0,searchBarPlaceholder:"Search for an Explorer"},l.map(e=>{let o=[],c=[e.currency,e.explorerName,e.chainId.toString()];return r?.chainName===e.chainName&&o.push({text:"Selected",icon:"\u2705",tooltip:"The explorer used in searches."}),e?.testNet?c.push("testnet"):c.push("mainnet"),_jsx(a.List.Item,{key:e.chainName,title:e.chainName,icon:{source:e.iconUri},keywords:c,accessories:o,detail:_jsx(a.List.Item.Detail,{markdown:`# ${e.chainName}
[${e.baseUrl}](https://${e.baseUrl})
![](${e.imageUrl})`,metadata:_jsx(a.List.Item.Detail.Metadata,null,_jsx(a.List.Item.Detail.Metadata.Label,{title:"Explorer Name",text:e.explorerName}),_jsx(a.List.Item.Detail.Metadata.Separator,null),_jsx(a.List.Item.Detail.Metadata.Label,{title:"Currency",text:e.currency}),_jsx(a.List.Item.Detail.Metadata.Separator,null),_jsx(a.List.Item.Detail.Metadata.Label,{title:"Chain ID",text:e.chainId.toString()}),_jsx(a.List.Item.Detail.Metadata.Separator,null),_jsx(a.List.Item.Detail.Metadata.Label,{title:"Network Type",text:e.testNet?"Testnet":"Mainnet"}),_jsx(a.List.Item.Detail.Metadata.Separator,null))}),actions:_jsx(a.ActionPanel,null,_jsx(a.Action.OpenInBrowser,{url:`https://${e.baseUrl}`}),_jsx(a.Action,{icon:a.Icon.TwoArrowsClockwise,title:"Change Explorer",onAction:()=>i(e)}),_jsx(a.Action.CopyToClipboard,{shortcut:{modifiers:["cmd"],key:"c"},content:`https://${e.baseUrl}`}))})}))}module.exports=d(y);0&&(module.exports={});