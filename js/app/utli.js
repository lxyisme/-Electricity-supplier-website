/**
 * Created by Administrator on 2017/3/15.
 */
define(["jquery","cookie"],function ($,ck) {
    return{
        public_button:function (b_div) {//底部列表
            var $ul =$("<ul>").appendTo($(b_div));
            var nr=[["新手专区", "注册登录", "购物结算", "下单支付", "收货评价"], ["会员中心", "会员制度", "会员优惠", "账户管理", "密码管理"], ["购物指南", "发票", "尺码对照", "尺码解读", "商品咨询"], ["支付方式", "在线支付", "货到付款", "分期支付", "优惠券、有货币"], ["配送方式", "配送说明", "运费说明", "验货签收", "收货样品"], ["售后服务", "退换货政策", "退换货流程", "时效承诺", "投诉与建议"], ["APP常见问题", "IPhone版", "Android版", "wap版", "IPAD版"]];
            for(var i=0;i<7;i++){
            var $li =$("<li>");
            $ul.append($li);
            for(var j=0;j<5;j++){
                var $a=$("<a>").attr({href:"javascript:"});
                if (j==0){
                    $a.addClass("f_m_t").removeAttr("href");
                }
                $a.html(nr[i][j]).appendTo($li);
            }
            }
        },
        landing_qr:function (qr1,qr2) {//登陆界面二维码动画效果
            $(qr1).hover(function () {
                $(this).stop().animate({left:"-20px"},300);
                $(qr2).stop().css({"display":"block"}).animate({opacity:1},400)
                $(qr2).hover(function () {
                    $(qr1).stop().animate({left:"-20px"},300);
                    $(this).stop().css({"display":"block"}).animate({opacity:1},400)
                },function () {
                    $(this).stop().animate({opacity:0},300).css({display:"none"});
                    $(qr1).stop().animate({left:"66px"},300);
                })
            },function () {
                $(qr2).stop().animate({opacity:0},300).css({display:"none"});
                $(this).stop().animate({left:"66px"},300);
            })
        },
        public_p_h_btn:function (a,b) {//分页头部按钮
            $(a).mouseenter(function () {
                $(b).css( {"display":"block","z-index":"4"}).stop().animate({opacity:1},300)
            }).mouseleave(function () {
                $(b).css( {"display":"none"}).stop().animate({opacity:0},300)
            })
        },
        public_header_landing_state:function (a,b) {//分页公共头部判断登陆
            var user =getCookie("userinfo");
            var juser =JSON.parse(user);
            if (juser.state==1){
                $(a).html(juser.username).attr({href:""}).css({"margin-right":"4px"});
                $(b).html("退出").attr({href:""});
                $(b).click(function () {
                    juser.state=0;
                    user=JSON.stringify(juser);
                    setCookie("userinfo",user,30);
                    location.reload()
                })
            }
        },
        landing_select:function (a,b) {//登陆界面下拉选项框
            $(a).click(function (event) {
                event.stopPropagation();
                $(b).stop().css({border:"1px #000 solid"}).animate({height:"240px"},400);
                return false;
            });
            $(""+b+" li").click(function () {
                $(a).html($(this).html());
                $(b).stop().animate({height:"0"},400,function () {
                    $(b).css({border:"none"})
                });
                return false;
            });
            $("html,body").click(function () {
                $(b).stop().animate({height:"0"},400,function () {
                    $(b).css({border:"none"})
                });
            })
        },
        landing_s_btn:function (a,b,c,d) {//普通登陆，手机短信登陆切换
            $(a).click(function () {
                $(this).stop().animate({"background-position-x":"0"},300).css({"color":"#fff"});
                $(b).stop().animate({"background-position-x":"-135px"},300).css({"color":"#000"});
                $(c).css({display:"block"})
                $(d).css({display:"none"})
            });
            $(b).click(function () {
                $(a).stop().animate({"background-position-x":"135px"},300).css({"color":"#000"});
                $(this).stop().animate({"background-position-x":"0"},300).css({"color":"#fff"});
                $(d).css({display:"block"})
                $(c).css({display:"none"})
            });
        },
        landing_Verification:function (a) {//登陆界面验证码
            var qc =[];
            var r=[];
            for(var i=0;i<4;i++){
                var randomNum =parseInt(Math.random()*20+1);
                var randomNum2 =parseInt(Math.random()*4+1);
                randomNum2*=90;
                r.push(randomNum2);
               qc.push(randomNum);
               for(var j=0;j<qc.length;j++){
                       while (randomNum ==qc[j]){
                           randomNum =parseInt(Math.random()*20+1);
                       }
               }
                $(a).eq(i).css({"background":"url(../img/Logintoregister/V_code/"+randomNum+".jpg) no-repeat center","background-size":"cover","transform":"rotate("+randomNum2+"deg)"})
            }
            $(a).click(function () {
                r[$(this).index()]+=90;
                var pd=0;
                $(this).css({"transform":"rotate("+r[$(this).index()]+"deg)"});
                for(var i=0;i<4;i++){
                    if(r[i]%360==0){
                        pd+=1;
                    }
                }
                console.log(pd);
            });
            // return pd;
        },
        landing_switch:function (a,b,c,d) {//登陆界面二维码登陆，账号登陆切换
            $(a).click(function () {
                $(c).css({"display":"none"});
                $(d).css({"display":"block"})
            });
            $(b).click(function () {
                $(d).css({"display":"none"});
                $(c).css({"display":"block"})
            });
        },
        landing_strength:function (a,b,c) {//验证登陆，改变登陆状态
            $(a).click(function () {
                var user =getCookie("userinfo");
                var juser =JSON.parse(user);
                if($(b).val()==juser.username&&$(c).val()==juser.password){
                    juser.state=1;
                    user=JSON.stringify(juser);
                    setCookie("userinfo",user,30);
                    window.location.href="index.html"
                }else {
                    console.log("用户名密码错误");
                }
            })
        },
        registered_select:function (a,b) {//注册界面下拉框
            $(a).change(function () {
                $(""+a+" option").each(function () {
                    if ($(this).val()==$(a).val()){
                        $(b).html($(this).data("id"))
                    }
                })
            })
        },
        registered_Password_strength:function (a) {//判断密码强度
          $(a).find("input").keyup(function () {
              /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/g.test($(this).val())?$(a).find("p span").eq(0).css({background:"#f00",color:"#fff"}):$(a).find("p span").eq(0).css({background:"#e8e8e8",color:"#B9BABA"});
              /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/g.test($(this).val())?$(a).find("p span").eq(1).css({background:"yellow",color:"#fff"}):$(a).find("p span").eq(1).css({background:"#e8e8e8",color:'#B9BABA'});
              /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)/g.test($(this).val())?$(a).find("p span").css({background:"#e8e8e8",color:"#B9BABA"}).eq(2).css({background:"#0f0",color:"#fff"}):$(a).find("p span").eq(2).css({background:"#e8e8e8",color:"#B9BABA"});
              $(this).val().length==0?$(a).find("p span").css({background:"#e8e8e8",color:"#B9BABA"}):true;
          });
        },
        save_Username_password:function (a,b) {//注册，把信息存入cookie
            var du=getCookie("userinfo");
            if (du!=undefined){
                var jdu=JSON.parse(du);
                console.log(jdu);
                jdu.username===$(a).val()?console.log('用户名存在'):newCookie();
            }else {
                newCookie()
            }
            function newCookie() {
                var us=new User($(a).val(),$(b).val(),0);
                var usStr = JSON.stringify(us);
                setCookie("userinfo",usStr, 30);
            }
          function User(name,password,state) {
              this.username=name;
              this.password=password;
              this.state =state;
          }
        },
        regustered_qrShow:function (a,b) {//展示二维码
            $(a).hover(function () {
                $(b).css({"display":"block"})
            },function () {
                var s = setTimeout(function () {
                    $(b).css({"display":"none"})
                },100);
                $(b).hover(function () {
                    $(this).css({"display":"block"})
                    clearTimeout(s)
                },function () {
                    $(this).css({"display":"none"})
                });
            })
        },
        Placed_top_hover:function (a) {//置顶按钮hover效果
            $(a).hover(function () {
                $(this).stop().animate({opacity:"1"},200)
            },function () {
                $(this).stop().animate({opacity:".6"},200)
            })
        },
        Placed_top:function (a,b) {//置顶和隐藏
            $(window).scroll(function () {
                if ($(window).scrollTop()>10){
                    $(a).css({display:"block"})
                }else {
                    $(a).css({display:"none"})
                }
            });
            $(b).click(function () {
                $("html,body").animate({scrollTop:"0"})
            })
        },
        index_nav_l_hover:function (a) {//首页公用头部左hover换字效果
            $(a).hover(function () {
                $(this).html($(this).data("change")).css({"color":"#000"});
            },function () {
                $(this).html($(this).data("change2")).css({"color":"#A3A7AF"});
            })
        },
        index_landing_strength:function (a,b) {//首页公用头部登陆判断
            var user =getCookie("userinfo");
            var juser =JSON.parse(user);
            if (juser.state==1){
                $(a).html(juser.username).attr({href:""}).css({"margin-right":"4px"});
                $(b).html("退出").attr({href:""});
                $(b).click(function () {
                    juser.state=0;
                    user=JSON.stringify(juser);
                    setCookie("userinfo",user,30);
                    location.reload()
                });
                return true;
            }else {
                return false;
            }
        },
        index_logo_rotate:function (a,b) {//公用头部logo 3D旋转效果
            var c =180;
            var d=0;
            var e=1;
            var f=0;
            setInterval(function () {
                c+=180;
                d+=180;
                e+=1;
                f+=1;
                $(a).css({animation:" rotateX"+e%2+" 1s"});
                $(b).css({animation:" rotateX"+f%2+" 1s"});
                setTimeout(function () {
                    if(e%2 == 0){
                        $(a).css({transform:"rotateX(180deg)",animation:"none"});
                        $(b).css({transform:"rotateX(360deg)",animation:"none"});
                    }else {
                        $(a).css({transform:"rotateX(360deg)",animation:"none"});
                        $(b).css({transform:"rotateX(180deg)",animation:"none"});
                    }
                },990);
            },10000);
        },
        sarch:function (a,b) {//搜索框跨域
            $(a).on("input",function () {
                $.ajax({
                    url:"http://search.yohobuy.com/product/search/suggest?callback=?&return_type=jsonp&keyword="+window.encodeURIComponent($(a).val())+"&_=1489890213217",
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success:function (data) {
                        var obj =data.data;
                        console.log(obj);
                        if (obj.length>0){
                            $(b).css({display:"block"})
                        }else {
                            $(b).css({display:"none"})
                        }
                        $(b).html("");
                        for(var i=0;i<obj.length;i++){
                            var $li ="<li><a href="+obj[i].href+">"+obj[i].keyword+" <span>约"+obj[i].count+"件商品</span></a></li>"
                            $(b).append($li)
                        }
                        $(""+b+" li a").hover(function () {
                            $(this).css({background:"#EEEEEE"})
                        },function () {
                            $(this).css({background:"#fff"})
                        });
                        $("html,body").click(function () {
                            $(b).css({display:"none"})
                        });
                        $(a).click(function (event) {
                            event.stopPropagation();
                        })
                    }
                })
            })
        },
        h_m_list:function (a,b) {//公用头部列表
            $(a).hover(function () {
                // console.log($(this).data("json"));
                $(b).html("");
                $.ajax({
                    url:"../json/"+$(this).data("json")+"",
                    success:function (res) {
                        // console.log(res);
                        var list =[];
                        var a=0;
                        for(var i=0;i<res.data.length;i++){
                            if(!list[a]){
                                list[a]=[];
                            }
                            if (list[a].length%10==0){
                                a+=1;
                                list[a] =[];
                            }
                            list[a].push({p:res.data[i].title,b:"title"});
                            for(var j=0;j<res.data[i].list.length;j++){
                                if (list[a].length%10==0){
                                    a+=1;
                                    list[a] =[];
                                }
                                list[a].push({p:res.data[i].list[j]});
                            }
                        }
                        for(var c=1;c<list.length;c++){
                            var $ul=$("<ul>");
                            if (c>1){
                                $ul.css({width:"180px",padding:"0 50px"})
                            }
                            if (c<list.length-1){
                                $ul.css({"border-right":"1px #ccc solid"})
                            }
                            for(var q=0;q<list[c].length;q++){
                                var $li=$("<li>");
                                $li.html(list[c][q].p);
                                if (list[c][q].b){
                                    $li.addClass("h_n_title")
                                }
                                $ul.append($li);
                            }
                            $(b).append($ul)
                        }
                        var $div=$("<div>").addClass("h_n_list_img");
                        var $img=$("<img>").attr({src:res.img.src});
                        var $p =$("<p>").html(res.img.title);
                        $div.append($img).append($p);
                        $(b).append($div);
                    }
                })
            },function () {

            })
        },
        index_carousel:function (a,b,c,d) {//主页轮播图
            var jilu =0;
            var jilu2=0;
            var lb = setInterval(lunbo,4000);
            $(c).css({opacity:"0"}).eq(0).css({opacity:"1"});
            $(a).click(function () {
                jilu==0?jilu=7:jilu--;
                jilu+1>7?jilu2=0:jilu2=jilu+1;
                $(c).stop().animate({opacity:"0"},200).eq(jilu2).animate({opacity:".2"},100,function () {
                    $(c).eq(jilu2).animate({opacity:"0"},100)
                });
                $(c).eq(jilu).animate({opacity:"1"},200,function () {
                });
                // console.log(jilu);
                clearInterval(lb);
                lb = setInterval(lunbo,4000);
            });
            $(b).click(function () {
                jilu==7?jilu=0:jilu++;
                jilu-1<0?jilu2=7:jilu2=jilu-1;
                $(c).stop().animate({opacity:"0"},200).eq(jilu2).animate({opacity:".2"},100,function () {
                    $(c).eq(jilu2).animate({opacity:"0"},100)
                });
                $(c).eq(jilu).animate({opacity:"1"},200,function () {
                });
                clearInterval(lb);
                lb = setInterval(lunbo,4000);
            });
            $(d).hover(function () {
                $(this).find("p").stop().animate({opacity:0},200);
                clearInterval(lb);
                lb = setInterval(lunbo,4000);
                if (jilu ==$(this).index()){
                }else {
                    jilu =$(this).index();
                    $(c).stop().animate({opacity:"0"},200).eq(jilu).animate({opacity:"1"},200);
                }
            },function () {
                $(this).find("p").stop().animate({opacity:.5},200)
            });
            function lunbo() {
                jilu==7?jilu=0:jilu++;
                jilu-1<0?jilu2=7:jilu2=jilu-1;
                $(c).stop().animate({opacity:"0"},200).eq(jilu2).animate({opacity:".2"},100,function () {
                    $(c).eq(jilu2).animate({opacity:"0"},100)
                });
                $(c).eq(jilu).animate({opacity:"1"},200,function () {
                });
            }
        },
        index_goods_list_json:function (a,b) {//首页商品数据列表1
            $.ajax({
                url:"../json/"+b+".json",
                success:function (res) {
                        var $ul =$("<ul>");
                    for(var i=0;i<res.data.img.length;i++){
                        var $li =$("<li>").addClass("index_goods_img");
                        var $img=$("<img>").attr({"src":""+res.data.img[i]+""}).appendTo($li);
                        $ul.append($li)
                    }
                    if(res.data.banner){
                        var $li =$("<li>");
                        var $img=$("<img>").attr({"src":""+res.data.banner+""}).css({width:"1150px"}).appendTo($li);
                        $ul.append($li)
                    }
                    $(a).append($ul);
                }
            })
        },
        index_goods_carousel:function (a,b,c) {//商品列表轮播图
            var jilu=0
            $(a).click(function () {
                if (jilu==0){
                    jilu=2;
                    $(c).css({left:"-3450px"})
                }else {
                    jilu--;
                }
                $(c).stop().animate({left:""+jilu*-1150+"px"},200)
            })
            $(b).click(function () {
                if (jilu==3){
                    jilu=1;
                    $(c).css({left:"0"})
                }else {
                    jilu++;
                }
                $(c).stop().animate({left:""+jilu*-1150+"px"},200)
            })
            setInterval(function () {
                if (jilu==3){
                    jilu=1;
                    $(c).css({left:"0"})
                }else {
                    jilu++;
                }
                $(c).stop().animate({left:""+jilu*-1150+"px"},200)
            },5000)
        },
        brand:function (a) {//品牌列表json
            $.ajax({
                   url:"../json/brand.json",
                success:function (res) {
                       var $ul1=$("<ul>").addClass("brand_1");
                        var $ul2=$("<ul>").addClass("brand_2");
                    for(var i=0;i<res.brand_list1.length;i++){
                        if(i == 5){
                            var $btn1=$("<li>").addClass("brand_btn").append($("<a class='b_btn_t' id='b_btn_t1' href='javascript:'>")).append($("<a class='b_btn_b' id='b_btn_b1' href='javascript:'>"));
                            var $btn2=$("<li>").addClass("brand_btn").append($("<a class='b_btn_t' id='b_btn_t2' href='javascript:'>")).append($("<a class='b_btn_b' id='b_btn_b2' href='javascript:'>"));
                            $ul2.append($btn2);
                            $ul1.append($btn1)
                        }
                        var $li1 =$("<li>").addClass("index_goods_img").append($("<img>").attr({src:""+res.brand_list1[i]+""}));
                        var $li2 =$("<li>").addClass("index_goods_img").append($("<img>").attr({src:""+res.brand_list2[i]+""}));
                        $ul1.append($li1);
                        $ul2.append($li2)
                        }
                        $ul1.append($("<li>").addClass("brand_href").html("MORE>"))
                    $ul2.append($("<li>").addClass("brand_href").html("MORE>"))
                        $(a).append($ul1,$ul2);
                    $("#b_btn_b1,#b_btn_t1").click(function () {
                        $(".brand_1").css({"z-index":"0"});
                        $(".brand_1 img").stop().animate({"opacity":"0"},400);
                        $(".brand_2 img").stop().animate({"opacity":"1"},400);
                        $(".brand_2").css({"z-index":"1"});
                    });
                    $("#b_btn_b2,#b_btn_t2").click(function () {
                        $(".brand_2").css({"z-index":"0"},400);
                        $(".brand_2 img").stop().animate({"opacity":"0"},400)
                        $(".brand_1 img").stop().animate({"opacity":"1"},400)
                        $(".brand_1").css({"z-index":"1"});
                    })
                    }
                });
        },
        news_goods_1:function (a) {//大图模块
            $.ajax({
                url:"../json/news_goods_1.json",
                success:function (res) {
                    var $ul =$("<ul>");
                    for(var i=0;i<res.img.length;i++){
                        if (i==0){
                            $(a).append($("<p class='index_goods_img'>").append($("<img>").attr({src:""+res.img[i]+""})))
                        }else if (i==res.img.length-1){
                            $(a).append($("<p class='index_goods_img'>").append($("<img>").attr({src:""+res.img[i]+""})))
                        }else {
                            $ul.append($("<li class='index_goods_img'>").append($("<img>").attr({src:""+res.img[i]+""})))
                        }
                        if (i==1){
                            $(a).append($ul)
                        }
                    }
                }
            })
        },
        module_json:function (a,b) {//加载首页模块
        $.ajax({
            url:"../json/"+b+".json",
            success:function (res) {
                var $ul=$("<ul>").addClass("module_box");
                for(var i=0;i<res.data.length;i++){
                    if (i==0){
                        var $li1=$("<li class='module_left_img'><p><img src='"+res.data[i].left_img[0]+"'></p><p class='module_left_child2'><img src='"+res.data[i].left_img[1]+"'></p></li>")
                        $ul.append($li1);
                    }
                    else if(i==5) {
                        var $list=$("<ul>")
                        for(var j=0;j<res.data[i].list.length;j++){
                            var $xx=$("<li>").html(res.data[i].list[j]);
                            $list.append($xx)
                        }
                        var $li2=$("<li class='module_list'>").append($list);
                        $ul.append($li2);
                    }
                    else {
                        var $li3=$("<li class='index_goods_img'>").append($("<img>").attr({src:""+res.data[i]+""}))
                        console.log(1)
                        $ul.append($li3)
                    }
                    // console.log(res.data[i])
                }
                $(a).append($ul);
            }
        })
    },
        module_json_last:function (a) {
            $.ajax({
                url:"../json/index_module6.json",
                success:function (res) {
                    var $ul =$("<ul>").addClass("module_last");
                    for(var i=0;i<res.goods.length;i++){
                        var $li=$("<li><a><img class='index_goods_img' src='"+res.goods[i].thumb+"'><p>'"+res.goods[i].name+"'</p><span>￥"+res.goods[i].salePrice+"</span></a><li>")
                        $ul.append($li)
                    }
                    $(a).append($ul);
                }
            })
        },
        product_category_option:function (a) {//商品列表页，左下拉菜单
            $.ajax({
                url:"../json/product list/category_option.json",
                success:function (res) {
                    var $ul =$("<ul>").addClass("category_box")
                    $ul.append($("<li class='all_category'>全部商品</li>"))
                    for(var i =0;i<res.data.length;i++){
                        var $li =$("<li >").append($("<p class='category_title'>"+res.data[i][0].title+"</p>"));
                        var $list=$("<ul>").addClass("category_option");
                        for(var j=0;j<res.data[i][1].option.length;j++){
                            var $option=$("<li>").html(res.data[i][1].option[j])
                            $list.append($option)
                        }
                        $li.append($list);
                        $ul.append($li);
                    }
                    $(a).append($ul);
                    // class='category_unfold'
                    $(".category_box li").click(function () {
                        // console.log()
                        if ($(this).attr("class")){
                            $(this).find("ul").stop().animate({height:"0"},300,function () {
                                $(this).parent().removeClass("category_unfold");
                                console.log($(this).parent())
                            })

                        }else {
                            $(this).addClass("category_unfold");
                            $(this).find("ul").stop().animate({height:""+($(this).find("ul li").length*22)+"px"},500)
                        }
                        return false;
                    })
                }
            })
        },
        product_screen:function (a) {//商品选项
            $.ajax({
                url:"../json/product list/product_screen.json",
                success:function (res) {
                    var obj =res.data
                    for(var i=0;i<obj.length;i++){
                        var $span=$("<span>");
                        var $div=$("<div>");
                        var $ul =$("<ul>");
                        if (i==0){
                            $div.addClass("screen_brand");
                            $span.html("品牌：")
                            for(var j=0;j<obj[i].brand.length;j++){
                               $ul.append($("<li>"+obj[i].brand[j]+"</li>"))
                            }
                        }else if (i==1){
                            $div.addClass("screen_price");
                            $span.html("价格：")
                            for(var j=0;j<obj[i].price.length;j++){
                                $ul.append($("<li>"+obj[i].price[j]+"</li>"))
                            }
                        }else if (i==2){
                            $div.addClass("screen_color");
                            $span.html("颜色：")
                            for(var j=0;j<obj[i].color.name.length;j++){
                                var $li=$("<li>").html(obj[i].color.name[j]).appendTo($ul);
                                var $p =$("<p class='color_select'>").css({background:""+obj[i].color.value[j]+""}).appendTo($li);
                            }
                        }else if (i==3){
                            $div.addClass("screen_size");
                            $span.html("尺寸：")
                            for(var j=0;j<obj[i].size.length;j++){
                                $ul.append($("<li>"+obj[i].size[j]+"</li>"))
                            }
                        }else if (i==4){
                            $div.addClass("screen_advanced");
                            $span.html("高级选项：");
                            var $adv=$("<ul>").addClass("advanced_list");
                            for(var j=0;j<obj[i].advanced.length;j++){
                                var $list=$("<li>").addClass("advanced_box").html(obj[i].advanced[j][0].title).append($("<p>"));
                                // for(var c=0;c<obj[i].advanced[j][1].list.length;c++){
                                //     $("<li>"+obj[i].advanced[j][1].list[c]+"<p></p></li>").appendTo($adv)
                                // }
                                $ul.append($list).append($adv)
                            }
                        }
                        $div.append($span).append($ul)
                        $(a).append($div)
                    }
                    $(".screen_advanced>ul>li").hover(function () {
                        $(".product_screen").css({"margin-bottom":0});
                        $(".advanced_list").css({display:"block"}).html("");
                        $(this).children("p").css({display:"block"});
                        $(this).addClass("advanced_list_hover");
                        for(var i=0;i<obj[4].advanced[$(this).index()][1].list.length;i++){
                            $(".advanced_list").append("<li>"+obj[4].advanced[$(this).index()][1].list[i]+"</li>")
                        }
                        $(".advanced_list").hover(function (event) {
                            event.stopPropagation();
                            $(this).css({display:"block"});
                            $(".product_screen").css({"margin-bottom":0});
                        },function (event) {
                            event.stopPropagation();
                            $(this).css({display:"none"});
                            $(".product_screen").css({"margin-bottom":"61px"});
                        })
                    },function () {
                        $(".advanced_list").css({display:"none"});
                        $(this).removeClass("advanced_list_hover");
                        $(this).children("p").css({display:"none"});
                        $(".product_screen").css({"margin-bottom":"61px"});
                    })
                }
            })
        },
        product_list:function (a) {//商品列表页，商品列表
            $.ajax({
                url:"../json/product list/product_list.json",
                success:function (res) {
                    var $ul =$("<ul>").addClass("module_last");
                    for(var i=0;i<60;i++){
                        var $li=$("<li><a href='Goods_details.html'><img class='index_goods_img' src='"+res.goods[0].thumb+"'><p>"+res.goods[0].name+"</p><span class='product_list_brand'>"+res.goods[0].brand+"</span><span>￥"+res.goods[0].salePrice+"</span></a><li>")
                        $ul.append($li)
                    }
                    $(a).append($ul);
                }
            })
        },
        goods_magnify:function (a,b) {//商品详情页放大镜效果
            $(a).mouseenter(function () {
                $(a).find("p").css({"display":"block"})
                $(b).css({"display":"block"})
            });
            $(a).bind('mousemove',function (event) {
                var x =event.pageX-$(a).offset().left-$(a).find("p").outerWidth(false)/2;
                var y =event.pageY-$(a).offset().top-$(a).find("p").outerHeight(false)/2;
                if(y>$(a).height()-$(a).find("p").height()){
                    y =$(a).height()-$(a).find("p").height()
                }else if (y<0){
                    y=0;
                }
                if (x>$(a).width()-$(a).find("p").width()){
                    x=$(a).width()-$(a).find("p").width()
                }else if(x<0){
                    x=0;
                }
                $(a).find("p").css({left:x,top:y});
                //比例关系  遮罩宽度/小图宽度 = 放大镜宽度/大图宽
                //大图宽 = 小图宽度/遮罩宽度 *放大镜宽度
                var bl=-x/$(a).find("img").width()*$(b).find("img").width()
                var bt=-y/$(a).find("img").height()*$(b).find("img").height()
                var kd =$(a).find("img").width()/$(a).find("p").width()*$(b).width()
                $(b).find("img").css({top:bt,left:bl,width:kd})
            })
            $(a).mouseleave(function () {
                $(a).find("p").css({"display":"none"})
                $(b).css({"display":"none"})
            })
        },
        share_img:function (a) {//详情页分享小图标
            $(a).each(function () {
                // $(this).find("a").css({background:"url(../img/share.png) no-repeat top "+$(this).index()*-21+"px"})
                $(this).find("a").css({"background-position-x":""+($(this).index()-1)*-21+"px"});
                // console.log($(this).index())
            })
            // console.log()
        },
        goods_quantity:function (a,b,c) {//详情页数量增加减少按钮
            $(a).click(function () {
                if(parseInt($(c).html())<5){
                    $(c).html(parseInt($(c).html())+1)
                }
                if(parseInt($(c).html())==5){
                    $(a).css({color:"#999"})
                }else if(parseInt($(c).html())==1) {
                    $(b).css({color:"#999"})
                }else {
                    $(a).css({color:"#000"});
                    $(b).css({color:"#000"});
                }
            });
            $(b).click(function () {
                console.log($(c).html());
                if(parseInt($(c).html())>1){
                    $(c).html(parseInt($(c).html())-1)
                }
                if(parseInt($(c).html())==5){
                    $(a).css({color:"#999"})
                }else if(parseInt($(c).html())==1) {
                    $(b).css({color:"#999"})
                }else {
                    $(a).css({color:"#000"});
                    $(b).css({color:"#000"});
                }
            })
        },
        size_infos:function (a) {//尺码表
            $.ajax({
                url:"../json/other/size.json",
                success:function (res) {
                    var $ul=$("<ul>");
                    for(var i=0;i<res.data.list1.length;i++){
                        $ul.append($("<li><p>"+res.data.list1[i]+"</p><p>"+res.data.list2[i]+"</p><p>"+res.data.list3[i]+"</p></li>"))
                    }
                    $(a).append($ul);
                    $(a).find("ul li").each(function () {
                        if ($(this).index()%2==0){
                            $(this).css({background:"#f5f5f5"})
                            if($(this).index()==0){
                                $(this).css({color:"#767676","border-bottom":"1px #E0E0E0 solid"})
                            }
                        }
                    })
                }
            })
        },
        goods_infos_img:function (a) {//商品详情图片
            $.ajax({
                url:"../json/other/goods_infos.json",
                success:function (res) {
                    for(var i=0;i<res.src.length;i++){
                        $(a).append($("<img>").attr({src:""+res.src[i]+""}))
                    }
                }
            })
        },
        comments_switch_btn:function(a){//评价按钮切换
            $(a).click(function () {
                if($(this).attr("class")){

                }else {
                    $(a).removeClass("comments_switch_selected");
                    $(this).addClass("comments_switch_selected");
                }
            })
        },
        comments_list:function (a,b) {//评价列表
            $(a).html("");
            $.ajax({
                url:"../json/other/comments_page"+b+".json",
                success:function (res) {
                    for(var i=0;i<res.data.length;i++){
                        var $box=$("<div class='comments_list_box'>").appendTo($(a));
                        var $left=$("<div>").addClass("comments_list_left").append($("<p class='username_box'><span class='username'>"+res.data[i].userName+"</span><span class='star star_"+res.data[i].star+"'></span></p>"));
                        $left.append($("<p class='comment'>"+res.data[i].comment+"</p>"))
                        if (res.data[i].url){
                            $left.append($("<div class='user_img'><p style='background: url("+res.data[i].url+") no-repeat center;background-size:cover'><div class='big_user_img'>" +
                                "<button class='user_img_btn1'>收起</button><button class='user_img_btn2'>向左旋转</button><button class='user_img_btn3'>向右旋转</button>" +
                                "<p style='background: url("+res.data[i].url+") no-repeat center;background-size:cover'></p></div></div>"))
                        }
                        $left.append($("<p class='date'>"+res.data[i].date+"</p>"));
                        var $right=$("<div class='comments_list_right'><p>颜色："+res.data[i].color+"</p><p>尺码："+res.data[i].size+"</p><p>尺码符合度:合适</p></div>")
                        $box.append($left).append($right)
                    }
                    $(".user_img>p").click(function () {
                        console.log($(this).parent().attr("class").length)
                        if ($(this).parent().attr("class").length==8){
                            $(this).parent().addClass("user_img_open")
                        }else {
                            $(this).parent().removeClass("user_img_open")
                        }
                    });
                    var jiaodu=[];
                    $(".user_img_btn1").click(function () {
                        $(this).parent().parent().removeClass("user_img_open")
                    });
                        $(".user_img_btn2").click(function () {
                            if(jiaodu[$(this).index(".user_img_btn2")]){
                                jiaodu[$(this).index(".user_img_btn2")]-=90;
                            }else {
                                jiaodu[$(this).index(".user_img_btn2")]=0;
                                jiaodu[$(this).index(".user_img_btn2")]-=90;
                            }
                            console.log(jiaodu[$(this).index(".user_img_btn2")]);
                            $(this).parent().find("p").css({"transform":"rotate("+jiaodu[$(this).index(".user_img_btn2")]+"deg)"})
                        });
                    $(".user_img_btn3").click(function () {
                        if(jiaodu[$(this).index(".user_img_btn3")]){
                            jiaodu[$(this).index(".user_img_btn3")]+=90;
                        }else {
                            jiaodu[$(this).index(".user_img_btn3")]=0;
                            jiaodu[$(this).index(".user_img_btn3")]+=90;
                        }
                        console.log(jiaodu[$(this).index(".user_img_btn3")])
                        $(this).parent().find("p").css({"transform":"rotate("+jiaodu[$(this).index(".user_img_btn3")]+"deg)"})
                    })
                }
            });
        },
        goods_consulting:function (a) {//商品咨询
            $.ajax({
                url:"../json/other/goods_consulting.json",
                success:function (res) {
                    var $ul=$("<ul>");
                    for(var i=0;i<res.data.length;i++){
                        $ul.append($("<li class='question'>"+res.data[i].question+"</li><li class='answer'>"+res.data[i].answer+"</li>"))
                    }
                    $(a).append($ul)
                }
            })
        },
        shopping_consulting:function (a) {//购买咨询
            $.ajax({
                url:"../json/other/shopping_consulting.json",
                success:function (res) {
                    var $ul=$("<ul>");
                    for(var i=0;i<res.data.length;i++){
                        $ul.append($("<li class='question'>"+res.data[i].question+"<p>"+res.data[i].date+"</p></li><li class='answer'>"+res.data[i].answer+"</li>"))
                        $ul.append($("<li class='con_like'><p class='like'><a href='javascript:'></a><span>赞 ("+res.data[i].like+")</span></p>" +
                            "<b>|</b><p class='useful'><a href='javascript:'></a><span>有用 ("+res.data[i].useful+")</span></p></li>"))
                    }
                    $(a).append($ul)
                }
            })
        },
        after_service_btn:function (a,b) {//售后服务下拉提示
            $(a).click(function () {
                if($(a).attr("class").length==17){
                    $(this).addClass("after_service_btn_open")
                    $(this).css({ "background-image":"url(../img/other-infos/service_btn2.png)"})
                    $(b).stop().animate({height:"517px","padding-top":"40px"});
                }else {
                    $(this).removeClass("after_service_btn_open");
                    $(this).css({ "background-image":"url(../img/other-infos/service_btn1.png)"})
                    $(b).stop().animate({height:0,"padding-top":"0"});
                }

            })
        },
        shopping_cart_hint:function (a) {
            $(a).click(function () {
                $(this).parent().css({display:"none"});
            })
        },
        shopping_cart_content:function (a) {
            var g=getCookie("goods");
            var jg=JSON.parse(g);
            for(var i=0;i<jg.length;i++){
                var $div=$("<div class='cart_comments_box'>");
                $("<div class='goods_info'><input type='checkbox'><img src='"+jg[i].src+"' alt=''><div><h1>"+jg[i].name+"</h1><p><span>颜色："+jg[i].color+"</span>" +
                    "<b>尺码："+jg[i].size+"</b></p></div></div>").appendTo($div);
                $("<div class='unit_price'>"+jg[i].price+"</div>").appendTo($div);
                $("<div class='quantity'><button class='jian'></button><p>"+jg[i].quantity+"</p><button class='jia'></button></div>").appendTo($div);
                var danjia =jg[i].price.split("¥");
                $("<div class='total_price'>￥"+(parseInt(jg[i].quantity)*parseInt(danjia[1]))+"</div>").appendTo($div);
                $("<div class='operation'><a href='javascript:' class='del'>删除</a><a href='javascript:'>移入收藏</a>  </div>").appendTo($div);
                $(a).append($div)
            }
            $(".jian").click(function () {
                var s=$(this).parent().find("p").html();
                if (s>1){
                    $(this).parent().find("p").html(s-1);
                    jg[$(this).index(".jian")].quantity-=1;
                    $(".total_price").eq($(this).index(".jian")).html("￥"+parseInt(danjia[1])*(s-1)+"");
                    g=JSON.stringify(jg);
                    setCookie("goods",g,30);
                }
            });
            $(".jia").click(function () {
                var s=$(this).parent().find("p").html();
                $(this).parent().find("p").html(parseInt(s)+1);
                $(".total_price").eq($(this).index(".jia")).html("￥"+parseInt(danjia[1])*(parseInt(s)+1)+"");
                jg[$(this).index(".jia")].quantity=parseInt(s)+1;
                g=JSON.stringify(jg);
                setCookie("goods",g,30);
            });
            $(".del").click(function () {
               $(this).parent().parent().css({display:"none"});
                jg.splice($(this).index(".del"),1);
                $(this).removeClass("del");
               if (jg.length==0){
                   $(".empty").css({display:"block"});
                   $(".cart_box").css({display:"none"});
                   removeCookie("goods")
               }else {
                   g=JSON.stringify(jg);
                   setCookie("goods",g,30);
               }
            });
        }
    }
});