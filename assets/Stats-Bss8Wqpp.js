import{r as e,t}from"./jsx-runtime-BkSabwWG.js";import{i as n,t as r}from"./Store-Bs5sDopL.js";var i=e(n(),1);function a({end:e,start:t,duration:n=3e3}){let[r,a]=(0,i.useState)(0);return(0,i.useEffect)(()=>{if(!t)return;let r=null,i,o=t=>{r===null&&(r=t);let s=t-r,c=Math.min(s/n,1),l=1-(1-c)**3;a(Math.floor(l*e)),c<1?i=requestAnimationFrame(o):a(e)};return i=requestAnimationFrame(o),()=>{cancelAnimationFrame(i)}},[e,t,n]),r}var o=t(),s=[{value:1e4,label:`salon services booked`,featured:!0},{value:5e3,label:`stylists & beauty professionals`},{value:1e3,label:`salons & beauty professionals`},{value:20,label:`cities using Salonify`}];function c({value:e,label:t,featured:n=!1,start:r}){let i=a({end:e,start:r,duration:2e3});return(0,o.jsxs)(`div`,{className:`text-center`,children:[(0,o.jsxs)(`h3`,{className:n?`
              bg-gradient-to-r
              from-[#E95EB4]
              to-[#F28AAD]
              bg-clip-text
              text-6xl
              font-extrabold
              leading-none
              tracking-tight
              text-transparent
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
            `:`
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              sm:text-5xl
            `,children:[i.toLocaleString(),`+`]}),(0,o.jsx)(`p`,{className:n?`mt-4 text-base opacity-70 sm:text-lg md:text-xl`:`mx-auto mt-2 max-w-xs text-base leading-relaxed opacity-70 sm:text-lg`,children:t})]})}function l(){let e=r(e=>e.theme)===`light`,t=(0,i.useRef)(null),[n,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=t.current;if(!e)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),n.disconnect())},{threshold:.25});return n.observe(e),()=>{n.disconnect()}},[]),(0,o.jsx)(`section`,{ref:t,"aria-labelledby":`stats-heading`,className:`
        w-full
        ${e?`bg-[#fafafa] text-black`:`bg-[#1b1b1b] text-white`}
      `,children:(0,o.jsxs)(`div`,{className:`\r
          mx-auto\r
          flex\r
          max-w-[90%]\r
          flex-col\r
          items-center\r
          gap-20\r
          py-20\r
          md:gap-24\r
          md:py-28\r
          lg:py-32\r
        `,children:[(0,o.jsxs)(`header`,{className:`mx-auto max-w-3xl text-center`,children:[(0,o.jsx)(`h2`,{id:`stats-heading`,className:`\r
              text-3xl\r
              font-semibold\r
              leading-tight\r
              tracking-tight\r
              sm:text-4xl\r
              md:text-5xl\r
            `,children:`The modern destination for salon self-care`}),(0,o.jsx)(`p`,{className:`\r
              mt-4\r
              text-base\r
              leading-relaxed\r
              opacity-70\r
              sm:text-lg\r
              md:text-xl\r
            `,children:`One place to discover, book, and manage your salon experience.`})]}),(0,o.jsx)(c,{value:s[0].value,label:s[0].label,featured:s[0].featured,start:n}),(0,o.jsx)(`div`,{className:`\r
            grid\r
            w-full\r
            grid-cols-1\r
            gap-12\r
            md:grid-cols-3\r
            md:gap-8\r
          `,children:s.slice(1).map(e=>(0,o.jsx)(c,{value:e.value,label:e.label,start:n},e.label))})]})})}export{l as default};