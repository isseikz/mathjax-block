!function(){"use strict";var e,t={259:function(){var e=window.wp.blocks,t=window.wp.element,n=(window.wp.i18n,window.wp.blockEditor),r=window.wp.components,o=JSON.parse('{"u2":"create-block/mathjax-block"}');(0,e.registerBlockType)(o.u2,{edit:function(e){let{attributes:o,setAttributes:a}=e;return(0,t.createElement)("section",(0,n.useBlockProps)(),(0,t.createElement)(r.TextControl,{value:o.content,onChange:e=>{a({formula:e})}}))},save:function(e){let{attributes:r}=e;return(0,t.createElement)("section",n.useBlockProps.save(),(0,t.createElement)("span",{className:"mathjax-formula"},r.formula))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],u=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var s=c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},n=self.webpackChunkmathjax_block=self.webpackChunkmathjax_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(259)}));o=r.O(o)}();