/**
 * Created by Administrator on 2017/3/21.
 */
require(['../../config'],function () {
    var landing =false;
    require(['utli','jquery'],function (ut,$) {
        $(".header-wrap").load('public_header.html',{head:1},function () {//导入分页公用头部
            ut.public_p_h_btn(".nav_l",".nav_l ul");//公用头部菜单展示
            ut.index_nav_l_hover(".nav_l ul li a");//首页公用头部左hover换字效果
            ut.public_p_h_btn(".nav_r_sj",".h_nav_qrShow");//公用头部二维码展示
            ut.index_logo_rotate(".p_h_logo_1",".p_h_logo_2");//公用头部logo 3D旋转效果
            ut.sarch("#keyword",".search ul");//搜索框跨域
            ut.public_p_h_btn(".shopping_cart",".shopping_show");//显示购物车
            ut.h_m_list(".h_menu_target",".h_menu_list .layout");//公用头部列表
            ut.public_p_h_btn(".h_menu_hover",".h_menu_list");//公用头部显示
            landing=ut.index_landing_strength("#userName","#user_exit");//头部登陆状态
        });
        $(".foot-wrap").load('public_buttom.html',{head:1},function () {//导入公用底部
            require(["utli"],function (ut) {
                ut.public_button(".f_m");//底部列表
                ut.public_p_h_btn(".h_n_sc",".h_b_nav");//分页头部按钮
                ut.Placed_top_hover(".Placed_top div");//置顶按钮hover效果
                ut.Placed_top(".Placed_top",".Placed_top_img2");//置顶和隐藏
                ut.regustered_qrShow(".Placed_top_img1",".Placed_top_qrShow");//展示二维码
            });
        });
    });
    require(['utli','jquery'],function (ut,$) {
        ut.goods_magnify(".magnify_img",".magnify_show");//商品详情页放大镜效果
        ut.share_img(".share_img");//详情页分享小图标
        ut.public_p_h_btn(".share_qr span",".share_qr b");//详情页分享显示二维码
        var size;
        $(".size ul li a:not(.gray)").click(function () {//尺寸点击
            $(".size ul li a:not(.gray)").css({background:"#fff","color":"#000"});
            $(this).css({background:"#000","color":"#fff"});
            size=$(this).html();
        });
        $(".add_shopping_cart").click(function () {
            function addGoods() {
                if (size==undefined){
                }else {
                    var good=new NewGoods($(".goods_title").html(),$(".color p").html(),$(".price i").html(),size,$(".quantity p").html(),"../img/goods.jpg");
                    var arr=[];
                    arr.push(good);
                    jarr=JSON.stringify(arr);
                    console.log(jarr);
                    setCookie("goods",jarr,30);
                }
            }
           var g =getCookie("goods");
           if (g==undefined){
               addGoods();
           }else {
              var jg=JSON.parse(g);
              var pdxt=false;
              for(var i=0;i<jg.length;i++){
                  if (jg[i].color==$(".color p").html()&&jg[i].size==size){
                      jg[i].quantity=parseInt($(".quantity p").html())+parseInt(jg[i].quantity);
                      g=JSON.stringify(jg);
                      setCookie("goods",g,30);
                      pdxt=true;
                      return;
                  }
              }
              if (pdxt==false){
                  var good=new NewGoods($(".goods_title").html(),$(".color p").html(),$(".price i").html(),size,$(".quantity p").html(),"../img/goods.jpg");
                  console.log(jg);
                  jg.push(good);
                  g=JSON.stringify(jg);
                  setCookie("goods",g,30);
              }
           }
           function NewGoods(name,color,price,size,quantity,src) {
               this.name =name;
               this.color = color;
               this.price = price;
               this.size = size;
               this.quantity = quantity;
               this.src=src;
           }
        });
        ut.goods_quantity("#plus","#subtract",".quantity p");//详情页数量增加减少按钮
        ut.size_infos(".size_infos");//尺码表
        ut.goods_infos_img(".goods_infos_img_box");//商品详情图片
        ut.comments_switch_btn(".comments_switch a");//评价按钮切换
        ut.comments_list(".comments_list",1);//评价列表
        var page=1;
        $(".comments_page a").click(function () {
                if ($(this).attr("class")){
                }else {
                    $(".comments_page").find("a").removeClass("comments_page_target");
                    $(this).addClass("comments_page_target");
                    page=$(this).html();
                    $("html,body").animate({scrollTop:$(".comments_box").offset().top},500,ut.comments_list(".comments_list",page))
                }
            });//详情翻页按钮
        $(".comments_page button").click(function () {
            if (page<3){
                page=parseInt(page)+1;
                $(".comments_page").find("a").removeClass("comments_page_target");
                $(".comments_page a").eq(parseInt(page)-1).addClass("comments_page_target");
                $("html,body").animate({scrollTop:$(".comments_box").offset().top},500,ut.comments_list(".comments_list",page))
            }
        });//详情下一页按钮
        ut.goods_consulting(".goods_consulting");//商品咨询
        ut.shopping_consulting(".shopping_consulting");//购买咨询
        ut.after_service_btn(".after_service_btn",".after_service");//售后服务下拉提示
    })
});