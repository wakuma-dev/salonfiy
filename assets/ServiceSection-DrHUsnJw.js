import{r as e,t}from"./jsx-runtime-BkSabwWG.js";import{i as n,t as r}from"./Store-Bs5sDopL.js";import{t as i}from"./createLucideIcon-f1qGY3sv.js";import{A as a}from"./index-E9ze4XU3.js";import{t as o}from"./services-DiBcHyYd.js";var s=i(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),c=i(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),l=i(`move-right`,[[`path`,{d:`M18 8L22 12L18 16`,key:`1r0oui`}],[`path`,{d:`M2 12H22`,key:`1m8cig`}]]),u=e(n(),1),d=t(),f=[`Hair`,`Makeup`,`Nails`,`Facial & Skincare`,`Massage & Spa`,`Foot Care`,`Hair Removal`];function p(){let e=r(e=>e.theme),t=r(e=>e.selectedCategory),n=r(e=>e.setSelectedCategory),i=(0,u.useMemo)(()=>f,[]);return(0,d.jsx)(`div`,{className:`w-full scrollbar-hide overflow-x-auto 
     ${e===`light`?`bg-[#fafafa] text-black`:`bg-[#1B1B1B] text-white`}`,children:(0,d.jsx)(`div`,{className:`w-max min-w-full flex items-center md:justify-center gap-1`,children:i.map(r=>(0,d.jsx)(`button`,{onClick:()=>n(r),className:`outline-none shrink-0 px-2.5 py-1.5 text-[14px] leading-[19px] cursor-pointer rounded-full 
                    border 
                    ${e===`light`?`border-gray-300`:`border-gray-700`}
                    ${t===r?`bg-[#0F172A] text-white`:``}`,children:r},r))})})}function m({service:e}){let t=r(e=>e.theme);return(0,d.jsx)(`article`,{className:`w-full overflow-hidden rounded-4xl ${t===`light`?`bg-white text-black`:`bg-[#1e1e1e] text-white`}`,children:(0,d.jsxs)(a,{to:`/services/${e.id}`,className:`block w-full`,children:[(0,d.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`,decoding:`async`,className:`aspect-square w-full object-cover md:aspect-[4/3]`}),(0,d.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-1 px-4 py-2`,children:[(0,d.jsx)(`span`,{className:`text-[14px] font-semibold leading-[19px] hover:text-[#6d28d9]`,children:e.name}),(0,d.jsxs)(`p`,{className:`text-[13px] font-normal leading-[19px] text-[#64748b]`,children:[e.price,` ETB`]})]})]})})}function h({services:e}){return(0,d.jsx)(`div`,{className:`flex gap-2 lg:gap-4`,children:e.map(e=>(0,d.jsx)(`div`,{className:`\r
            w-[42vw]\r
            shrink-0\r
            sm:w-[35vw]\r
            md:w-[30%]\r
            lg:w-[calc((100%-4rem)/5)]\r
          `,children:(0,d.jsx)(m,{service:e})},e.id))})}function g({title:e,subTitle:t,tag:n,category:i}){console.log(`title`,e),console.log(`subTitle`,t);let a=(0,u.useRef)(null),f=r(e=>e.theme),[p,m]=(0,u.useState)(!1),[g,_]=(0,u.useState)(!1),v=(0,u.useMemo)(()=>o.filter(e=>e.category===i&&e.tags.includes(n)),[i,n]),y=()=>{let e=a.current;if(!e)return;let{scrollLeft:t,scrollWidth:n,clientWidth:r}=e;m(t>1),_(t+r<n-1)},b=e=>{let t=a.current;t&&t.scrollBy({left:e===`right`?300:-300,behavior:`smooth`})};return(0,u.useEffect)(()=>{let e=a.current;if(e)return y(),e.addEventListener(`scroll`,y),window.addEventListener(`resize`,y),()=>{e.removeEventListener(`scroll`,y),window.removeEventListener(`resize`,y)}},[v]),v.length===0?null:(0,d.jsxs)(`section`,{className:`relative w-full`,children:[(0,d.jsxs)(`div`,{className:`flex items-center justify-between w-full my-2`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col items-start gap-0.5`,children:[(0,d.jsx)(`h3`,{className:`text-[20px] leading-[24px] md:text-[27px] leading-[32px] tracking-tight font-bold`,children:e}),(0,d.jsx)(`p`,{className:`max-w-[200px] md:max-w-full text-[13px] leading-[19px] md:text-[16px] md:leading-[24px] \r
    font-normal tracking-normal`,children:t})]}),(0,d.jsx)(`div`,{className:`flex items-center justify-center 
                    w-8 h-8 md:w-9 md:h-9 cursor-pointer bg-black rounded-full
                    ${f===`light`?`bg-white`:`bg-[#2A2A2A]`}`,children:(0,d.jsx)(l,{className:`w-4  h-4 md:w-5 md:h-5`})})]}),(0,d.jsx)(`div`,{ref:a,className:`w-full overflow-x-auto scroll-smooth scrollbar-hide`,children:(0,d.jsx)(h,{services:v})}),p&&(0,d.jsx)(`button`,{type:`button`,"aria-label":`Scroll services left`,onClick:()=>b(`left`),className:`
            absolute
            -left-5
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            p-2
            shadow-md
            cursor-pointer
            md:flex
             ${f===`light`?`bg-white text-black hover:bg-gray-100`:`bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]`}
          `,children:(0,d.jsx)(c,{size:20})}),g&&(0,d.jsx)(`button`,{type:`button`,"aria-label":`Scroll services right`,onClick:()=>b(`right`),className:`
            absolute
            -right-4
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            p-2
            shadow-md
            cursor-pointer
            md:flex
            ${f===`light`?`bg-white text-black hover:bg-gray-100`:`bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]`}
          `,children:(0,d.jsx)(s,{size:20})})]})}function _(){let e=r(e=>e.selectedCategory);return(0,d.jsxs)(`section`,{className:`w-full`,children:[(0,d.jsx)(p,{}),(0,d.jsxs)(`div`,{className:`mx-auto max-w-9/10`,children:[(0,d.jsx)(g,{title:`Recommended for You`,subTitle:`Handpicked services based on what you love`,tag:`recommend`,category:e}),(0,d.jsx)(g,{title:`Trending Now`,subTitle:`Discover the services everyone is loving right now`,tag:`trending`,category:e}),(0,d.jsx)(g,{title:`New Arrivals`,subTitle:`Explore the latest services added to our collection`,tag:`new`,category:e})]})]})}export{_ as default};