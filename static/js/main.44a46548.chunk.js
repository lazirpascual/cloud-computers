(this["webpackJsonpreact-shopping-website"]=this["webpackJsonpreact-shopping-website"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"items":[{"name":"AMD Ryzen 5 5600X","price":299.99,"quantity":1,"category":"Processors","imgPath":"https://i.imgur.com/XVadBTJ.png","imgPreview":"https://i.imgur.com/53XOJCb.jpg","productPreview":"https://i.imgur.com/G48nIgG.png","id":1},{"name":"AMD Ryzen 5 5800X","price":499.99,"quantity":1,"category":"Processors","imgPath":"https://i.imgur.com/xuuS84t.png","imgPreview":"https://i.imgur.com/m4Bppno.jpg","productPreview":"https://i.imgur.com/0szXExr.png","id":2},{"name":"AMD Ryzen 5 5950X","price":549.99,"quantity":1,"category":"Processors","imgPath":"https://i.imgur.com/lLaaLpH.png","imgPreview":"https://i.imgur.com/kf9CMsb.jpg","productPreview":"https://i.imgur.com/AW3qqlX.png","id":3},{"name":"Kingston HyperX FURY DDR3","price":47.53,"quantity":1,"category":"Memory","imgPath":"https://i.imgur.com/RO9kJ7y.png","imgPreview":"https://i.imgur.com/QvVzIf6.jpg","productPreview":"https://i.imgur.com/K81Tm08.png","id":4},{"name":"Kingston HyperX FURY DDR4","price":36.99,"quantity":1,"category":"Memory","imgPath":"https://i.imgur.com/XO57N8K.png","imgPreview":"https://i.imgur.com/gZpAjUL.jpg","productPreview":"https://i.imgur.com/V6Pz7Rc.png","id":5},{"name":"Kingston HyperX FURY DDR4 RGB","price":62.95,"quantity":1,"category":"Memory","imgPath":"https://i.imgur.com/8L0VQoc.png","imgPreview":"https://i.imgur.com/920tOW9.jpg","productPreview":"https://i.imgur.com/H2hcsGH.png","id":6},{"name":"MSI B450 Tomahawk MAX","price":114.99,"quantity":1,"category":"Motherboard","imgPath":"https://i.imgur.com/OUNYe5z.png","imgPreview":"https://i.imgur.com/WwcZg1w.jpg","productPreview":"https://i.imgur.com/YvMBi7g.png","id":7},{"name":"Asus TUF Gaming X570-Plus (Wi-Fi)","price":189.99,"quantity":1,"category":"Motherboard","imgPath":"https://i.imgur.com/SxWzVAx.png","imgPreview":"https://i.imgur.com/2pPKJV9.jpg","productPreview":"https://i.imgur.com/G6yBbK2.png","id":8},{"name":"Asus ROG STRIX B450-F GAMING","price":112.93,"quantity":1,"category":"Motherboard","imgPath":"https://i.imgur.com/SZ7jDgh.png","imgPreview":"https://i.imgur.com/1uoqG6H.jpg","productPreview":"https://i.imgur.com/lF134wO.png","id":9},{"name":"Nvidia GeForce RTX 3070","price":499.99,"quantity":1,"category":"Video Card","imgPath":"https://i.imgur.com/30aJbIL.jpg","imgPreview":"https://i.imgur.com/FHQ1jbQ.jpg","productPreview":"https://i.imgur.com/4kbseqM.png","id":10},{"name":"Nvidia GeForce RTX 3080","price":699.99,"quantity":1,"category":"Video Card","imgPath":"https://i.imgur.com/Ul4frwi.jpg","imgPreview":"https://i.imgur.com/dhLP0Ys.jpg","productPreview":"https://i.imgur.com/Os0FXl2.png","id":11},{"name":"Nvidia GeForce RTX 3090","price":1499.99,"quantity":1,"category":"Video Card","imgPath":"https://i.imgur.com/xex37JS.jpg","imgPreview":"https://i.imgur.com/gCuegUp.jpg","productPreview":"https://i.imgur.com/GGc48yD.png","id":12},{"name":"Fractal Design Meshify C","price":95.99,"quantity":1,"category":"Case","imgPath":"https://i.imgur.com/b3ieUZw.jpg","imgPreview":"https://i.imgur.com/iOrrWY6.jpg","productPreview":"https://i.imgur.com/x4CmFCt.png","id":13},{"name":"Lian Li PC-011 Dynamic","price":139.99,"quantity":1,"category":"Case","imgPath":"https://i.imgur.com/txxg1H2.jpg","imgPreview":"https://i.imgur.com/mQFgwsd.jpg","productPreview":"https://i.imgur.com/6cRCmi4.png","id":14},{"name":"NZXT H510 Elite","price":149.88,"quantity":1,"category":"Case","imgPath":"https://i.imgur.com/LfqmqW9.jpg","imgPreview":"https://i.imgur.com/GrmUQgX.jpg","productPreview":"https://i.imgur.com/AERYN78.png","id":15}]}')},30:function(e,t,i){},84:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i.n(r),c=i(16),n=i.n(c),o=(i(30),i(20)),s=i(8),m=i(62),p=i(18),g=i(2),j=Object(r.createContext)(),d=function(e){var t=Object(r.useState)([]),i=Object(p.a)(t,2),a=i[0],c=i[1];return Object(g.jsx)(j.Provider,{value:{productList:a,addProduct:function(e){c([].concat(Object(m.a)(a),[e]))},deleteProduct:function(e){var t=a.filter((function(t){return t.id!==e}));c(t)}},children:e.children})},u=i(101),h=i(103),l=i(104),b=i(58),O=i.n(b),x=i(102),v=i(116),P=i(105),f=i(115),y=Object(u.a)((function(e){return{header:{backgroundColor:"inherit",color:"black",boxShadow:"0px 0px 0px 0px",marginTop:100},spacing:{fontSize:"25px",marginLeft:100,marginRight:100,textDecoration:"none",color:"inherit"},company:{fontSize:"25px",marginLeft:100,marginRight:"auto",textDecoration:"none",color:"inherit"},navbar:{marginBottom:200}}})),w=function(){var e=y(),t=Object(r.useContext)(j).productList,i=Object(x.a)(),a=Object(s.g)().pathname.split("/")[2];return Object(g.jsxs)("div",{className:e.navbar,children:[Object(g.jsx)(v.a,{appear:!1,direction:"down",in:!i,children:Object(g.jsx)(h.a,{position:"fixed",className:e.header,children:Object(g.jsxs)(l.a,{className:a||"home",children:[Object(g.jsx)(o.b,{to:"/react-shopping-website/",className:e.company,children:Object(g.jsx)(P.a,{variant:"h6",children:Object(g.jsx)(f.a,{letterSpacing:4,children:"CLOUD COMPUTERS"})})}),Object(g.jsx)(o.b,{to:"/react-shopping-website/shop",className:e.spacing,children:Object(g.jsx)(P.a,{variant:"h6",children:"Shop"})}),Object(g.jsxs)(o.b,{to:"/react-shopping-website/cart",className:e.spacing,children:[Object(g.jsx)(O.a,{fontSize:"large"})," (",t.length,")"]})]})})}),Object(g.jsx)(l.a,{})]})},N=i(88),C=Object(u.a)({main:{paddingLeft:120,paddingTop:"35vh",color:"rgb(248, 244, 240)"},button:{marginTop:20}}),S=function(){var e=C(),t=Object(s.f)();return Object(g.jsx)("div",{className:"home-bg",children:Object(g.jsxs)("div",{className:e.main,children:[Object(g.jsx)(P.a,{variant:"h3",gutterBottom:!0,children:"Nvidia Gefore RTX 3090"}),Object(g.jsx)(P.a,{variant:"h5",gutterBottom:!0,children:"Now available for preorder, shipping December, 2020."}),Object(g.jsx)(N.a,{onClick:function(){return t.push("/react-shopping-website/shop")},className:e.button,variant:"contained",size:"large",children:Object(g.jsx)(P.a,{className:"button",variant:"h5",gutterBottom:!0,children:"SHOP NOW"})})]})})},D=i(28),T=Object(r.createContext)(),q=function(e){var t=Object(r.useState)([]),i=Object(p.a)(t,2),a=i[0],c=i[1];Object(r.useEffect)((function(){c(D)}),[]);return Object(g.jsx)(T.Provider,{value:{products:a,setProducts:c,filterProduct:function(e){var t={items:{}};t.items=a.items.filter((function(t){return t.category===e})),c(t)}},children:e.children})},M=i(106),R=Object(u.a)({media:{height:250,paddingTop:25,paddingBottom:25},mediaHovered:{height:250,paddingTop:25,paddingBottom:25,transform:"scale3d(1.3, 1.3, 1)",transition:"all .1s cubic-bezier(.61,1,.88,1),transform .15s cubic-bezier(.61,1,.88,1)"}}),L=function(e){var t=e.product,i=R(),a=Object(r.useState)(!1),c=Object(p.a)(a,2),n=c[0],o=c[1];return Object(g.jsx)(M.a,{onMouseOver:function(){return o(!0)},onMouseOut:function(){return o(!1)},className:n?i.mediaHovered:i.media,component:"img",src:n?t.imgPreview:t.imgPath,title:t.name})},X=Object(r.createContext)(),B=function(e){var t=Object(r.useState)({}),i=Object(p.a)(t,2),a=i[0],c=i[1];return Object(g.jsx)(X.Provider,{value:{preview:a,savePreview:function(e){c({name:e.name,price:e.price,quantity:e.quantity,category:e.category,imgPath:e.imgPath,imgPreview:e.imgPreview,productPreview:e.productPreview,id:e.id})}},children:e.children})},z=i(109),k=i(110),G=i(107),F=i(108),A=Object(u.a)({root:{backgroundColor:"#f2eeeb",maxWidth:700,height:425,margin:15,cursor:"pointer"}}),U=function(){var e=A(),t=Object(r.useContext)(T).products,i=Object(r.useContext)(X).savePreview,a=Object(s.f)();return Object(g.jsx)(G.a,{children:Object(g.jsx)(F.a,{container:!0,children:t.items.map((function(t){return Object(g.jsx)(F.a,{item:!0,xs:12,md:6,lg:4,children:Object(g.jsxs)(z.a,{onClick:function(){return function(e){i(e),a.push("/react-shopping-website/preview")}(t)},className:e.root,children:[Object(g.jsx)(L,{product:t}),Object(g.jsxs)(k.a,{children:[Object(g.jsx)(P.a,{gutterBottom:!0,variant:"h6",component:"h2",children:t.name}),Object(g.jsxs)(P.a,{variant:"body1",component:"p",children:["$",t.price]})]})]},t.id)})}))})})},H=i(111),I=Object(u.a)({main:{marginBottom:150},category:{fontSize:"17px",justifyContent:"flex-start"}}),V=function(){var e=I(),t=Object(r.useContext)(T),i=t.setProducts,a=t.filterProduct,c=Object(r.useState)("All Products"),n=Object(p.a)(c,2),o=n[0],s=n[1],m=Object(r.useState)(!0),j=Object(p.a)(m,2),d=j[0],u=j[1],h=function(){u(!d)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(P.a,{className:e.main,variant:"p",children:"Shop /"}),Object(g.jsx)(P.a,{className:e.main,variant:"h4",gutterBottom:!0,children:o}),Object(g.jsx)(H.a,{orientation:"vertical",color:"inherit","aria-label":"vertical outlined primary button group",variant:"text",size:"large",children:d?[{category:"Processors"},{category:"Memory"},{category:"Motherboard"},{category:"Video Card"},{category:"Case"}].map((function(t){return Object(g.jsx)(N.a,{className:e.category,onClick:function(){return e=t.category,a(e),s(e),void h();var e},children:t.category},t.category)})):Object(g.jsx)(N.a,{className:e.category,onClick:function(){i(D),s("All Products"),h()},children:"View All Products"})})]})},W=Object(u.a)({root:{maxWidth:"30%",paddingLeft:"10%"},main:{maxWidth:"70%"}}),E=function(){var e=W(),t=Object(r.useContext)(T).setProducts;return Object(r.useEffect)((function(){t(D)}),[]),Object(g.jsx)("div",{className:"shop-bg",children:Object(g.jsxs)(F.a,{container:!0,children:[Object(g.jsx)(F.a,{className:e.root,item:!0,xs:12,md:6,lg:4,children:Object(g.jsx)(V,{})}),Object(g.jsx)(F.a,{className:e.main,item:!0,xs:"auto",md:"auto",lg:"auto",children:Object(g.jsx)(U,{})})]})})},J=i(112),Y=i(59),K=i.n(Y),Q=i(113),Z=Object(u.a)({cartDetails:{marginTop:30,marginLeft:140},name:{marginTop:30,marginLeft:30},divider:{marginTop:10},image:{width:200,height:125}}),$=function(e){var t=e.product,i=Z(),a=Object(r.useContext)(j).deleteProduct;return Object(g.jsxs)(G.a,{children:[Object(g.jsxs)(F.a,{container:"center",children:[Object(g.jsx)("img",{className:i.image,src:t.imgPath,alt:t.name}),Object(g.jsx)(P.a,{className:i.name,variant:"body1",children:t.name}),Object(g.jsx)(P.a,{className:i.cartDetails,variant:"body1",children:t.quantity}),Object(g.jsx)(P.a,{className:i.cartDetails,variant:"body1",children:t.price}),Object(g.jsx)(P.a,{className:i.cartDetails,variant:"body1",children:"$0.00"}),Object(g.jsx)(J.a,{className:i.cartDetails,children:Object(g.jsx)(K.a,{onClick:function(){return a(t.id)}})})]}),Object(g.jsx)(Q.a,{className:i.divider})]})},_=Object(u.a)({cartDetails:{marginTop:30,marginLeft:115},divider:{marginTop:30},heading:{marginLeft:125}}),ee=function(){var e=_(),t=Object(r.useContext)(j).productList;return Object(g.jsxs)(G.a,{children:[Object(g.jsx)(P.a,{variant:"h2",children:"Shopping Cart"}),Object(g.jsx)(Q.a,{className:e.divider}),Object(g.jsxs)(F.a,{container:!0,className:e.heading,children:[Object(g.jsx)(P.a,{className:e.cartDetails,variant:"h6",children:"Product Details"}),Object(g.jsx)(P.a,{className:e.cartDetails,variant:"h6",children:"Quantity"}),Object(g.jsx)(P.a,{className:e.cartDetails,variant:"h6",children:"Price"}),Object(g.jsx)(P.a,{className:e.cartDetails,variant:"h6",children:"Subtotal"})]}),Object(g.jsx)(Q.a,{className:e.divider}),t.length?t.map((function(e){return Object(g.jsx)($,{product:e},e.id)})):Object(g.jsx)(P.a,{className:e.divider,variant:"h5",children:"Your Cart is Empty"})]})},te=i(60),ie=i.n(te),re=Object(u.a)({productInfo:{marginTop:40},productName:{marginTop:50},price:{marginLeft:250,marginTop:180},addCart:{marginTop:50},image:{marginTop:20}}),ae=function(){var e=re(),t=Object(r.useContext)(X).preview,i=Object(r.useContext)(j).addProduct,a=Object(s.f)();return Object(g.jsx)(G.a,{className:"cart-bg",children:Object(g.jsxs)(F.a,{container:!0,direction:"row",alignItems:"flex-start",spacing:10,children:[Object(g.jsxs)(F.a,{item:!0,xs:6,md:6,lg:6,children:[Object(g.jsx)(N.a,{onClick:function(){return a.push("/react-shopping-website/shop")},size:"large",variant:"contained",color:"primary",children:"Back To Shopping"}),Object(g.jsxs)(P.a,{variant:"h6",className:e.productInfo,children:["Shop / ",t.category]}),Object(g.jsx)(P.a,{align:"center",variant:"h3",className:e.productName,gutterBottom:!0,children:t.name}),Object(g.jsx)(F.a,{container:!0,justify:"center",children:Object(g.jsx)("img",{className:e.image,src:t.productPreview,alt:t.name})})]}),Object(g.jsxs)(F.a,{item:!0,xs:6,md:"auto",lg:"auto",className:e.price,children:[Object(g.jsx)(P.a,{variant:"h6",children:Object(g.jsx)(f.a,{letterSpacing:6,children:"CLOUD COMPUTERS"})}),Object(g.jsxs)(P.a,{variant:"h3",className:e.productInfo,children:["$",t.price]}),Object(g.jsx)(N.a,{onClick:function(){return i(t)},startIcon:Object(g.jsx)(ie.a,{}),size:"large",variant:"outlined",className:e.productInfo,style:{width:250,height:70},color:"secondary",children:"Add To Cart"})]})]})})},ce=function(){return Object(g.jsxs)(o.a,{children:[Object(g.jsx)(w,{}),Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{exact:!0,path:"/react-shopping-website/",component:S}),Object(g.jsx)(s.a,{exact:!0,path:"/react-shopping-website/shop",component:E}),Object(g.jsx)(s.a,{exact:!0,path:"/react-shopping-website/cart",component:ee}),Object(g.jsx)(s.a,{exact:!0,path:"/react-shopping-website/preview",component:ae})]})]})},ne=i(61),oe=i(114),se=Object(ne.a)({palette:{primary:{main:"#778899"},secondary:{main:"#006400"}},typography:{h6:{fontFamily:"Montserrat, sans-serif"}}}),me=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(q,{children:Object(g.jsx)(B,{children:Object(g.jsx)(d,{children:Object(g.jsx)(oe.a,{theme:se,children:Object(g.jsx)(ce,{})})})})})})};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(me,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.44a46548.chunk.js.map