var g=void 0,l=null,m=this;function q(a){return a.call.apply(a.bind,arguments)}function r(a,c){var b=c||m;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}else return function(){return a.apply(b,arguments)}}function s(){s=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q:r;return s.apply(l,arguments)};function t(a){this.mode=u;this.data=a}t.prototype={d:function(){return this.data.length},write:function(a){for(var c=0;c<this.data.length;c++)a.put(this.data.charCodeAt(c),8)}};var u=4;function v(a,c){if(a.length==g)throw Error(a.length+"/"+c);for(var b=0;b<a.length&&a[b]==0;)b++;this.p={length:a.length-b+c};for(var d=0;d<a.length-b;d++)this.p[d]=a[d+b]}
v.prototype={get:function(a){return this.p[a]},d:function(){return this.p.length},multiply:function(a){for(var c={length:this.d()+a.d()-1},b=0;b<this.d();b++)for(var d=0;d<a.d();d++)c[b+d]^=w(x(this.get(b))+x(a.get(d)));return new v(c,0)},F:function(a){if(this.d()-a.d()<0)return this;var c=x(this.get(0))-x(a.get(0)),b={length:this.d()},d;for(d=0;d<this.d();d++)b[d]=this.get(d);for(d=0;d<a.d();d++)b[d]^=w(x(a.get(d))+c);return(new v(b,0)).F(a)}};function x(a){if(a<1)throw Error("glog("+a+")");return y[a]}function w(a){for(;a<0;)a+=255;for(;a>=256;)a-=255;return z[a]}var z={length:256},y={length:256},A;for(A=0;A<8;A++)z[A]=1<<A;for(A=8;A<256;A++)z[A]=z[A-4]^z[A-5]^z[A-6]^z[A-8];for(A=0;A<255;A++)y[z[A]]=A;var B=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,
76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];function C(a){for(var c=0;a!=0;)c++,a>>>=1;return c}function D(a,c,b){switch(a){case 0:return(c+b)%2==0;case 1:return c%2==0;case 2:return b%3==0;case 3:return(c+b)%3==0;case 4:return(Math.floor(c/2)+Math.floor(b/3))%2==0;case 5:return c*b%2+c*b%3==0;case 6:return(c*b%2+c*b%3)%2==0;case 7:return(c*b%3+(c+b)%2)%2==0;default:throw Error("bad maskPattern:"+a);}}
function E(a,c){if(1<=c&&c<10)switch(a){case 1:return 10;case 2:return 9;case u:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(c<27)switch(a){case 1:return 12;case 2:return 11;case u:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(c<41)switch(a){case 1:return 14;case 2:return 13;case u:return 16;case 8:return 12;default:throw Error("mode:"+a);}else throw Error("type:"+c);};function F(a,c){this.J=a;this.A=c}
var G=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,
20],[6,43,15,2,44,16]];function H(a,c){switch(c){case 1:return G[(a-1)*4+0];case 0:return G[(a-1)*4+1];case 3:return G[(a-1)*4+2];case 2:return G[(a-1)*4+3]}};function I(){this.buffer={length:0};this.length=0}I.prototype={get:function(a){return(this.buffer[Math.floor(a/8)]>>>7-a%8&1)==1},put:function(a,c){for(var b=0;b<c;b++)this.G((a>>>c-b-1&1)==1)},G:function(a){var c=Math.floor(this.length/8);this.buffer.length<=c&&(this.buffer[this.buffer.length++]=0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};function J(a,c){this.g=a;this.C=c;this.b=this.g*4+17;this.c=[this.b];for(var b=0;b<this.b;b++){this.c[b]=[this.b];for(var d=0;d<this.b;d++)this.c[b][d]=l}this.m=l;this.B=[]}
J.prototype={P:function(a){this.B.push(new t(a));this.m=l},a:function(a,c){if(a<0||this.b<=a||c<0||this.b<=c)throw Error(a+","+c);return this.c[a][c]},S:function(){this.D(!1,this.R())},D:function(a,c){this.q(0,0);this.q(this.b-7,0);this.q(0,this.b-7);this.V();this.W();this.X(a,c);this.g>=7&&this.Y(a);if(this.m==l){var b=this.g,d=this.B,h=this.C,e=H(b,h);if(e==g)throw Error("bad rs block @ typeNumber:"+b+"/errorCorrectLevel:"+h);for(var f=e.length/3,h={length:0},i=0;i<f;i++)for(var k=e[i*3+0],n=e[i*
3+1],j=e[i*3+2],o=0;o<k;o++)h[h.length++]=new F(n,j);e=new I;for(f=0;f<d.length;f++)i=d[f],e.put(i.mode,4),e.put(i.d(),E(i.mode,b)),i.write(e);for(f=b=0;f<h.length;f++)b+=h[f].A;if(e.length>b*8)throw Error("code length overflow. ("+e.length+">"+b*8+")");for(e.length+4<=b*8&&e.put(0,4);e.length%8!=0;)e.G(!1);for(;;){if(e.length>=b*8)break;e.put(236,8);if(e.length>=b*8)break;e.put(17,8)}d=b=n=0;f={length:h.length};i={length:h.length};for(k=0;k<h.length;k++){var o=h[k].A,p=h[k].J-o,b=Math.max(b,o),d=
Math.max(d,p);f[k]={length:o};for(j=0;j<f[k].length;j++)f[k][j]=255&e.buffer[j+n];n+=o;j=p;o=new v([1],0);for(p=0;p<j;p++)o=o.multiply(new v([1,w(p)],0));j=o;o=(new v(f[k],j.d()-1)).F(j);i[k]={length:j.d()-1};for(j=0;j<i[k].length;j++)p=j+o.d()-i[k].length,i[k][j]=p>=0?o.get(p):0}for(j=e=0;j<h.length;j++)e+=h[j].J;e={length:e};for(j=n=0;j<b;j++)for(k=0;k<h.length;k++)j<f[k].length&&(e[n++]=f[k][j]);for(j=0;j<d;j++)for(k=0;k<h.length;k++)j<i[k].length&&(e[n++]=i[k][j]);this.m=e}this.T(this.m,c)},q:function(a,
c){for(var b=-1;b<=7;b++)if(!(a+b<=-1||this.b<=a+b))for(var d=-1;d<=7;d++)c+d<=-1||this.b<=c+d||(this.c[a+b][c+d]=0<=b&&b<=6&&(d==0||d==6)||0<=d&&d<=6&&(b==0||b==6)||2<=b&&b<=4&&2<=d&&d<=4?!0:!1)},R:function(){for(var a=0,c=0,b=0;b<8;b++){this.D(!0,b);var d;d=this.b;for(var h=0,e=g,f=g,e=0;e<d;e++)for(f=0;f<d;f++){for(var i=0,k=this.a(e,f),n=-1;n<=1;n++)if(!(e+n<0||d<=e+n))for(var j=-1;j<=1;j++)f+j<0||d<=f+j||n==0&&j==0||k==this.a(e+n,f+j)&&i++;i>5&&(h+=3+i-5)}for(e=0;e<d-1;e++)for(f=0;f<d-1;f++)if(i=
0,this.a(e,f)&&i++,this.a(e+1,f)&&i++,this.a(e,f+1)&&i++,this.a(e+1,f+1)&&i++,i==0||i==4)h+=3;for(e=0;e<d;e++)for(f=0;f<d-6;f++)this.a(e,f)&&!this.a(e,f+1)&&this.a(e,f+2)&&this.a(e,f+3)&&this.a(e,f+4)&&!this.a(e,f+5)&&this.a(e,f+6)&&(h+=40);for(f=0;f<d;f++)for(e=0;e<d-6;e++)this.a(e,f)&&!this.a(e+1,f)&&this.a(e+2,f)&&this.a(e+3,f)&&this.a(e+4,f)&&!this.a(e+5,f)&&this.a(e+6,f)&&(h+=40);for(f=i=0;f<d;f++)for(e=0;e<d;e++)this.a(e,f)&&i++;h+=Math.abs(100*i/d/d-50)/5*10;d=h;if(b==0||a>d)a=d,c=b}return c},
W:function(){for(var a=8;a<this.b-8;a++)this.c[a][6]==l&&(this.c[a][6]=a%2==0);for(a=8;a<this.b-8;a++)this.c[6][a]==l&&(this.c[6][a]=a%2==0)},V:function(){for(var a=B[this.g-1],c=0;c<a.length;c++)for(var b=0;b<a.length;b++){var d=a[c],h=a[b];if(this.c[d][h]==l)for(var e=-2;e<=2;e++)for(var f=-2;f<=2;f++)this.c[d+e][h+f]=e==-2||e==2||f==-2||f==2||e==0&&f==0?!0:!1}},Y:function(a){var c;c=this.g;for(var b=c<<12;C(b)-C(7973)>=0;)b^=7973<<C(b)-C(7973);c=c<<12|b;for(var d,b=0;b<18;b++)d=!a&&(c>>b&1)==1,
this.c[Math.floor(b/3)][b%3+this.b-8-3]=d;for(b=0;b<18;b++)d=!a&&(c>>b&1)==1,this.c[b%3+this.b-8-3][Math.floor(b/3)]=d},X:function(a,c){var b;b=this.C<<3|c;for(var d=b<<10;C(d)-C(1335)>=0;)d^=1335<<C(d)-C(1335);b=(b<<10|d)^21522;for(var h,d=0;d<15;d++)h=!a&&(b>>d&1)==1,d<6?this.c[d][8]=h:d<8?this.c[d+1][8]=h:this.c[this.b-15+d][8]=h;for(d=0;d<15;d++)h=!a&&(b>>d&1)==1,d<8?this.c[8][this.b-d-1]=h:d<9?this.c[8][15-d-1+1]=h:this.c[8][15-d-1]=h;this.c[this.b-8][8]=!a},T:function(a,c){for(var b=-1,d=this.b-
1,h=7,e=0,f=this.b-1;f>0;f-=2)for(f==6&&f--;;){for(var i=0;i<2;i++)if(this.c[d][f-i]==l){var k=!1;e<a.length&&(k=(a[e]>>>h&1)==1);D(c,d,f-i)&&(k=!k);this.c[d][f-i]=k;h--;h==-1&&(e++,h=7)}d+=b;if(d<0||this.b<=d){d-=b;b=-b;break}}}};var K=Array.prototype;function L(a){K.splice.apply(a,M(arguments,1))}function M(a,c,b){return arguments.length<=2?K.slice.call(a,c):K.slice.call(a,c,b)};function N(a,c){this.x=a!==g?a:0;this.y=c!==g?c:0}N.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function O(a,c){this.x=a;this.y=c}(function(){function a(){}a.prototype=N.prototype;O.fa=N.prototype;O.prototype=new a})();function P(a){return Math.sqrt(a.x*a.x+a.y*a.y)}O.prototype.scale=function(a){this.x*=a;this.y*=a;return this};O.prototype.normalize=function(){return this.scale(1/P(this))};O.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};function Q(a,c){a==l&&(a=0);c==l&&(c=0);this.f=new N(a,c);this.target=new N;this.j=new O(0,0);this.M=Math.random()*0.5}Q.prototype.update=function(a){var c,b;c=new O(this.target.x-this.f.x,this.target.y-this.f.y);a&&(b=new O(this.f.x-a.x,this.f.y-a.y),a=P(b),b.normalize().scale(1E3/a),c.add(b));this.j.scale(1-R);this.j.add(c.scale((1+this.M)/S));P(this.j)>T&&this.j.normalize().scale(T);this.f.x+=this.j.x;this.f.y+=this.j.y};var S=200,R=0.08,T=20;var U={};
(function(a){U=function(){throw"Ticker cannot be instantiated.";};U.h=[];U.l=[];U.o=!1;U.s=!1;U.N=0;U.w=0;U.z=0;U.v=0;U.t=0;U.i=[];U.Q=function(a){if(!U.s)U.s=!0,U.H();this.U(a);U.l[U.h.length]=!0;U.h.push(a)};U.U=function(a){U.h!=l&&(a=U.h.indexOf(a),a!=-1&&(U.h.splice(a,1),U.l.splice(a,1)))};U.da=function(){U.h=[];U.l=[]};U.aa=function(a){if(U.i.length<2)return-1;a=Math.min(U.i.length-1,a||5);return 1E3/((U.i[0]-U.i[a])/a)};U.ea=function(a){U.o=a};U.ba=function(){return U.o};U.getTime=function(a){return U.K()-
U.N-(a?U.w:0)};U.ca=function(a){return U.z-(a?U.v:0)};U.O=function(){U.H();U.z++;var a=U.getTime(!1),b=a-U.t,d=U.o;d&&(U.v++,U.w+=b);U.t=a;for(var b=U.l,h=U.h.slice(),e=h?h.length:0,f=0;f<e;f++){var i=b[f],k=h[f];k==l||d&&i||k.I==l||k.I()}U.i.unshift(a);U.i.length>100&&U.i.pop()};U.K=function(){return(new Date).getTime()};U.H=function(){(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(c){a.setTimeout(c,
1E3/60)})(U.O)};a.Z=U})(window);function V(a,c){this.canvas=a;this.input=c;this.g=10;this.size=this.g*4+17;this.scale=5;this.k=(this.size+W*2)*this.scale;$(c).width(this.k).val("Type your message here...").bind("keyup",s(this.r,this));$(this.canvas).attr("width",this.k).attr("height",this.k).mousemove(s(this.L,this)).mouseout(s(this.n,this)).mouseleave(s(this.n,this)).mouseenter(s(this.n,this));this.context=this.canvas.getContext("2d");this.context.setTransform(1,0,0,1,this.scale*W,this.scale*W);this.e=[];this.r();U.Q(this)}
V.prototype.n=function(){this.u=l};V.prototype.L=function(a){var c=$(this.canvas).offset();this.u=new N(a.pageX-c.left-(W+0.5)*this.scale,a.pageY-c.top-(W+0.5)*this.scale)};
V.prototype.r=function(){var a,c;c=$(this.input).val();if(this.value!==c){this.value=c;a=new J(this.g,3);a.P(c);a.S();var b,d;c=[];for(d=0;d<this.size;){for(b=0;b<this.size;)a.a(d,b)&&c.push(new N(b*this.scale,d*this.scale)),b++;d++}for(;this.e.length>c.length;)a=Math.floor(Math.random()*this.e.length),K.splice.call(this.e,a,1);for(;this.e.length<c.length;)b=d=(this.size-1)*this.scale/2,b=new Q(b,d),a=Math.floor(Math.random()*this.e.length),L(this.e,a,0,b);a=this.e;b=this.size;a.length&&(b%=a.length,
b>0?K.unshift.apply(a,a.splice(-b,b)):b<0&&K.push.apply(a,a.splice(0,-b)));for(a=0;a<c.length;)this.e[a].target.x=c[a].x,this.e[a].target.y=c[a].y,a++;this.$=!1}};V.prototype.I=function(){var a,c;this.context.fillStyle="white";this.context.fillRect(-W*this.scale,-W*this.scale,this.k,this.k);this.context.fillStyle="black";for(a=0;a<this.e.length;)c=this.e[a],c.update(this.u),this.context.fillRect(c.f.x,c.f.y,this.scale,this.scale),a++};var W=10,X="Application".split("."),Y=m;
!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)!X.length&&V!==g?Y[Z]=V:Y=Y[Z]?Y[Z]:Y[Z]={};
