(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["kakaologin"],{e698:function(n,e,o){"use strict";o.r(e);var t=o("7a23"),a=Object(t["g"])("img",{src:"//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg",width:"222"},null,-1);function c(n,e,o,c,i,r){return Object(t["p"])(),Object(t["d"])("div",null,[Object(t["g"])("a",{id:"custom-login-btn",onClick:e[1]||(e[1]=function(n){return r.kakaoLogin()})},[a])])}o("96cf");var i=o("1da1"),r={components:{},data:function(){return{code:""}},mounted:function(){},methods:{kakaoLogin:function(){window.Kakao.Auth.login({scope:"profile, account_email",success:this.getKakaoAccount})},getKakaoAccount:function(){window.Kakao.API.request({url:"/v2/user/me",success:function(n){var e=n.kakao_account,o=e.profile.nickname,t=e.email;console.log("nickname",o),console.log("email",t),console.log(e),alert("로그인 성공!")},fail:function(n){console.log(n)}})},login:function(n){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.$api("/api/login",{param:[{email:n.email,nickname:n.profile.nickname,gender:n.gender},{nickname:n.profile.nickname,gender:n.gender}]});case 2:e.$store.commit("user",n),e.$router.push({path:"test"});case 4:case"end":return o.stop()}}),o)})))()}}};r.render=c;e["default"]=r}}]);
//# sourceMappingURL=kakaologin.d5ba1077.js.map