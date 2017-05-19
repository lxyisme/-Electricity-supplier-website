/**
 * Created by Administrator on 2017/3/15.
 */
require(['../../config'],function () {
    require(['jquery'],function ($) {
        $(".header-wrap").load('public_paging_header.html',{head:1},function () {//导入分页公用头部
        });
        $(".foot-wrap").load('public_buttom.html',{head:1},function () {//导入公用底部
            require(["utli"],function (ut) {
                ut.public_button(".f_m");//底部列表
                ut.public_p_h_btn(".h_n_sc",".h_b_nav");//分页头部按钮
                ut.Placed_top_hover(".Placed_top div");//置顶按钮hover效果
                ut.Placed_top(".Placed_top",".Placed_top_img2");//置顶和隐藏
                ut.regustered_qrShow(".Placed_top_img1",".Placed_top_qrShow");//展示二维码
                ut.public_header_landing_state("#userName","#user_exit");//分页公共头部判断登陆
            });
        })
    });
    require(["utli","jquery"],function (ut,$) {
        //登陆界面
        ut.landing_qr(".land_qr_img",".hint");//登陆界面二维码动画效果
        ut.landing_select(".land_s a",".select");//登陆界面下拉选项框
        ut.landing_s_btn(".l_q_b_l",".l_q_b_r",".l_pt",".l_sj");//普通登陆，手机短信登陆切换
        ut.landing_Verification(".v_img li");//登陆界面验证码
        ut.landing_Verification(".v_img_cp li");//登陆界面验证码
        $(".v_c_btn").click(function () {//登陆界面换验证码
            ut.landing_Verification(".v_img li");
        });
        $(".v_c_btn_cp").click(function () {//登陆界面换验证码
            ut.landing_Verification(".v_img_cp li");
        });
        ut.landing_switch(".land_1 .land_btn",".land_2 .land_btn",".land_1",".land_2");//登陆界面二维码登陆，账号登陆切换
        ut.landing_strength(".dl",".user_input:nth-child(1)",".user_input:nth-child(2)");//验证登陆，改变登陆状态

        //注册界面
        ut.registered_select(".re_sel",".re_ipt_pon span");
        var phone=false;
        $(".re_ipt_pon input").blur(function () {//判断手机号
                if(!(/^1[34578]\d{9}$/.test($(".re_ipt_pon input").val()))){
                    $(this).parent().find(".phone_validation").html("*请输入正确的手机号");
                    phone= false;
                }else {
                    $(this).parent().find(".phone_validation").html("");
                    phone= true;
                }
            }).keyup(function () {
                if(/^1[34578]\d{9}$/.test($(".re_ipt_pon input").val())){
                    $(this).parent().find(".phone_validation").html("");
                    phone=true;
                }
            });
        ut.registered_Password_strength(".re_psw");//判断密码强度
        var password=false;
        $(".re_psw").find("input").blur(function () {//判断密码长度
            if($(this).val().length>=8 && $(this).val().length<=16){
                $(".re_psw").find(".password_validation").html("");
                password=true;
            }else {
                $(".re_psw").find(".password_validation").html("密码长度不得小于8为同时不得大于16位");
                password=false;
            }
        });
        $(".re_rebtn button").click(function () {
            if (phone&&password){
                ut.save_Username_password(".re_ipt_pon input",".re_psw input");//注册，把信息存入cookie
                window.location.href="landing.html"
            }
        });
        ut.regustered_qrShow(".re_qrShow",".re_qrShow_box");
    })

});