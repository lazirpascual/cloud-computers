(this["webpackJsonpreact-shopping-website"]=this["webpackJsonpreact-shopping-website"]||[]).push([[0],{21:function(t){t.exports=JSON.parse('{"items":[{"name":"AMD Ryzen 5 5600X","price":299.99,"quantity":1,"category":"Processors","imgPath":"https://i.imgur.com/XVadBTJ.png","id":1},{"name":"AMD Ryzen 5 5800X","price":499.99,"quantity":1,"category":"Processors","imgPath":"https://i.imgur.com/xuuS84t.png","id":2},{"name":"AMD Ryzen 5 5950X","price":549.99,"quantity":1,"category":"Processors","imgPath":"https://i.imgur.com/lLaaLpH.png","id":3},{"name":"Kingston HyperX FURY DDR3","price":47.53,"quantity":1,"category":"Memory","imgPath":"https://i.imgur.com/RO9kJ7y.png","id":4},{"name":"Kingston HyperX FURY DDR4","price":36.99,"quantity":1,"category":"Memory","imgPath":"https://i.imgur.com/XO57N8K.png","id":5},{"name":"Kingston HyperX FURY DDR4 RGB","price":62.95,"quantity":1,"category":"Memory","imgPath":"https://i.imgur.com/8L0VQoc.png","id":6},{"name":"MSI B450 Tomahawk MAX","price":114.99,"quantity":1,"category":"Motherboard","imgPath":"https://i.imgur.com/OUNYe5z.png","id":7},{"name":"Asus TUF Gaming X570-Plus (Wi-Fi)","price":189.99,"quantity":1,"category":"Motherboard","imgPath":"https://i.imgur.com/SxWzVAx.png","id":8},{"name":"Asus ROG STRIX B450-F GAMING","price":112.93,"quantity":1,"category":"Motherboard","imgPath":"https://i.imgur.com/SZ7jDgh.png","id":9},{"name":"Nvidia GeForce RTX 3070","price":499.99,"quantity":1,"category":"Video Card","imgPath":"https://i.imgur.com/30aJbIL.jpg","id":10},{"name":"Nvidia GeForce RTX 3080","price":699.99,"quantity":1,"category":"Video Card","imgPath":"https://i.imgur.com/Ul4frwi.jpg","id":11},{"name":"Nvidia GeForce RTX 3090","price":1499.99,"quantity":1,"category":"Video Card","imgPath":"https://i.imgur.com/xex37JS.jpg","id":12},{"name":"Fractal Design Meshify C","price":95.99,"quantity":1,"category":"Case","imgPath":"https://i.imgur.com/b3ieUZw.jpg","id":13},{"name":"Lian Li PC-011 Dynamic","price":139.99,"quantity":1,"category":"Case","imgPath":"https://i.imgur.com/txxg1H2.jpg","id":14},{"name":"NZXT H510 Elite","price":149.88,"quantity":1,"category":"Case","imgPath":"https://i.imgur.com/LfqmqW9.jpg","id":15}]}')},38:function(t,e,a){},69:function(t,e,a){"use strict";a.r(e);var i=a(0),c=a.n(i),r=a(15),n=a.n(r),o=(a(38),a(25)),s=a(8),m=a(87),d=a(90),j=a(91),g=a(48),h=a.n(g),u=a(89),p=a(99),l=a(92),b=a(2),x=Object(m.a)((function(t){return{header:{backgroundColor:"inherit",color:"black",boxShadow:"0px 0px 0px 0px",marginTop:100},spacing:{fontSize:"25px",marginLeft:100,marginRight:100,textDecoration:"none",color:"inherit"},toolbar:{display:"flex",marginRight:130,justifyContent:"flex-end"},navbar:{marginBottom:200}}})),O=function(){var t=x(),e=Object(u.a)();return Object(b.jsxs)("div",{className:t.navbar,children:[Object(b.jsx)(p.a,{appear:!1,direction:"down",in:!e,children:Object(b.jsx)(d.a,{position:"fixed",className:t.header,children:Object(b.jsxs)(j.a,{className:t.toolbar,children:[Object(b.jsx)(o.b,{to:"/",className:t.spacing,children:Object(b.jsx)(l.a,{variant:"h6",children:"CLOUD COMPUTERS"})}),Object(b.jsx)(o.b,{to:"/shop",className:t.spacing,children:Object(b.jsx)(l.a,{variant:"h6",children:"Shop"})}),Object(b.jsx)(o.b,{to:"/cart",className:t.spacing,children:Object(b.jsx)(h.a,{fontSize:"large"})})]})})}),Object(b.jsx)(j.a,{})]})},y=a(71),f=Object(m.a)({main:{paddingLeft:"5%",paddingTop:"20%",color:"white"}}),v=function(){var t=f();return Object(b.jsx)("div",{className:"home-bg",children:Object(b.jsxs)("div",{className:t.main,children:[Object(b.jsx)(l.a,{variant:"h3",gutterBottom:!0,children:"Nvidia Gefore RTX 3090"}),Object(b.jsx)(l.a,{variant:"h5",gutterBottom:!0,children:"Now available for preorder, shipping December, 2020."}),Object(b.jsx)(y.a,{variant:"contained",size:"large",children:Object(b.jsx)(l.a,{className:"button",variant:"h5",gutterBottom:!0,children:"SHOP NOW"})})]})})},P=a(31),N=a(21),C=Object(i.createContext)(),R=function(t){var e=Object(i.useState)([]),a=Object(P.a)(e,2),c=a[0],r=a[1];Object(i.useEffect)((function(){r(N)}),[]);return Object(b.jsx)(C.Provider,{value:{products:c,setProducts:r,filterProduct:function(t){var e={items:{}};e.items=c.items.filter((function(e){return e.category===t})),r(e)}},children:t.children})},S=a(95),q=a(96),M=a(97),X=a(93),D=a(94),B=Object(m.a)({root:{backgroundColor:"#f2eeeb",maxWidth:600,margin:15},media:{height:225,paddingTop:25,paddingBottom:25}}),T=function(){var t=B(),e=Object(i.useContext)(C).products;return Object(b.jsx)(X.a,{children:Object(b.jsx)(D.a,{container:!0,children:e.items.map((function(e){return Object(b.jsx)(D.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsxs)(S.a,{className:t.root,children:[Object(b.jsx)(q.a,{className:t.media,component:"img",src:e.imgPath,title:e.name}),Object(b.jsxs)(M.a,{children:[Object(b.jsx)(l.a,{gutterBottom:!0,variant:"h6",component:"h2",children:e.name}),Object(b.jsxs)(l.a,{variant:"body1",color:"textSecondary",component:"p",children:["$",e.price]})]})]},e.id)})}))})})},w=a(98),A=Object(m.a)({main:{marginBottom:150},category:{fontSize:"17px",justifyContent:"flex-start"}}),L=function(){var t=A(),e=Object(i.useContext)(C),a=e.setProducts,c=e.filterProduct,r=Object(i.useState)("All Products"),n=Object(P.a)(r,2),o=n[0],s=n[1],m=Object(i.useState)(!0),d=Object(P.a)(m,2),j=d[0],g=d[1],h=function(){g(!j)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(l.a,{className:t.main,variant:"p",children:"Shop /"}),Object(b.jsx)(l.a,{className:t.main,variant:"h4",gutterBottom:!0,children:o}),Object(b.jsx)(w.a,{orientation:"vertical",color:"inherit","aria-label":"vertical outlined primary button group",variant:"text",size:"large",children:j?[{category:"Processors"},{category:"Memory"},{category:"Motherboard"},{category:"Video Card"},{category:"Case"}].map((function(e){return Object(b.jsx)(y.a,{className:t.category,onClick:function(){return t=e.category,c(t),s(t),void h();var t},children:e.category},e.category)})):Object(b.jsx)(y.a,{className:t.category,onClick:function(){a(N),s("All Products"),h()},children:"View All Products"})})]})},k=Object(m.a)({root:{maxWidth:"30%",paddingLeft:"10%"},main:{maxWidth:"70%"}}),z=function(){var t=k(),e=Object(i.useContext)(C).setProducts;return Object(i.useEffect)((function(){e(N)}),[]),Object(b.jsx)("div",{className:"shop-bg",children:Object(b.jsxs)(D.a,{container:!0,children:[Object(b.jsx)(D.a,{className:t.root,item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)(L,{})}),Object(b.jsx)(D.a,{className:t.main,item:!0,xs:"auto",md:"auto",lg:"auto",children:Object(b.jsx)(T,{})})]})})},F=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{children:"Checkout"})})},G=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",component:v}),Object(b.jsx)(s.a,{exact:!0,path:"/shop",component:z}),Object(b.jsx)(s.a,{exact:!0,path:"/cart",component:F})]})]})},U=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(R,{children:Object(b.jsx)(G,{})})})};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.eee751ad.chunk.js.map