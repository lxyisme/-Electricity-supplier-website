/**
 * Created by Administrator on 2017/3/18.
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
        ut.index_carousel(".index_c_btn_l", ".index_c_btn_r", ".index_carousel_img li", ".index_carousel_btns li");
        ut.index_goods_list_json(".goods_list_1", "index_module1");//首页商品数据列表1
        ut.index_goods_carousel(".goods_carousel_btn_l",".goods_carousel_btn_r",".goods_carousel_list");//首页商品数据列表轮播
        ut.brand(".brand");//品牌列表
        ut.news_goods_1(".goods_list_3");//大图模块
        ut.module_json(".goods_list_4","index_module2");//json数据加载模块
        ut.module_json(".goods_list_5","index_module3");//json数据加载模块
        ut.module_json(".goods_list_6","index_module4");//json数据加载模块
        ut.module_json(".goods_list_7","index_module5");//json数据加载模块
        ut.module_json_last(".goods_list_8")
    })
})