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
        ut.product_category_option(".product_left");
        ut.product_screen(".product_screen");
        ut.product_list(".product_list");
    })
})