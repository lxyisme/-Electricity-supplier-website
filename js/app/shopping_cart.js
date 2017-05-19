/**
 * Created by Administrator on 2017/3/24.
 */
require(['../../config'],function () {
    var landing =false;
    require(['jquery'], function ($) {
        $(".header-wrap").load('public_paging_header.html', {head: 1}, function () {//导入分页公用头部
        });
        $(".foot-wrap").load('public_buttom.html', {head: 1}, function () {//导入公用底部
            require(["utli"], function (ut) {
                ut.public_button(".f_m");//底部列表
                ut.public_p_h_btn(".h_n_sc", ".h_b_nav");//分页头部按钮
                ut.Placed_top_hover(".Placed_top div");//置顶按钮hover效果
                ut.Placed_top(".Placed_top", ".Placed_top_img2");//置顶和隐藏
                ut.regustered_qrShow(".Placed_top_img1", ".Placed_top_qrShow");//展示二维码
                ut.public_header_landing_state("#userName","#user_exit");//分页公共头部判断登陆
            });
        })
    });
    require(["utli","jquery"],function (ut,$) {
        ut.shopping_cart_hint(".landing_hint button");
        var info =getCookie("goods");
        var user =getCookie("userinfo");
        var juser =JSON.parse(user);
        juser.state==1?landing=true:landing=false;
        if (landing==true){
            $(".landing_hint p").html("温馨提示：1. 选购单中的商品不保留库存，请及时结算。 2. 商品的价格、相关活动信息及库存以订单提交时为准。")
        }
        if (info==undefined){
            $(".empty").css({display:"block"});
            $(".cart_box").css({display:"none"})
        }else {
            $(".empty").css({display:"none"});
            $(".cart_box").css({display:"block"});
            ut.shopping_cart_content(".cart_content");
        }
    })
});
