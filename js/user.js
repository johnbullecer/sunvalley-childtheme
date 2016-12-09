jQuery(document).ready(function(a) {
    function b(a, b) {
        var c = '<div class="alert alert-' + a + '"> <button data-dismiss="alert" type="button" class="close"><span aria-hidden="true">�</span> </button> <p class="text-small">' + b + "</p> </div>";
        return c
    }
    function e(c, d) {
        var e = a("#" + c).val();
        return "" == e || null == e ? (a(".console_msg_" + c).html(b("danger", d)),
        a("#" + c).css("borderColor", "red"),
        !1) : (a(".console_msg_" + c).html(""),
        a("#" + c).css("borderColor", "#C6DBE0"),
        !0)
    }
    function f(c, d, e) {
        var f = a("#" + c).val();
        return f.length == e || f.length < e ? (a(".console_msg_" + c).html(b("danger", d)),
        a("#" + c).css("borderColor", "red"),
        !1) : (a(".console_msg_" + c).html(""),
        a("#" + c).css("borderColor", "#C6DBE0"),
        !0)
    }
    function j() {
        setTimeout(function() {
            var b = a(".row_content_partner").height()
              , c = a("body").width();
            b > 0 && c > 960 && a(".user-left-menu>.st-page-sidebar-new").css("min-height", b)
        }, 1500)
    }
    function k(b, c) {
        "on" == a("." + b).val() ? a("." + c).fadeIn(500) : a("." + c).fadeOut(500),
        a("." + b).change(function() {
            "on" == a(this).val() ? a("." + c).fadeIn(500) : a("." + c).fadeOut(500)
        })
    }
    a(document).on("click", ".btn_add_wishlist", function(b) {
        var c = a(this);
        a.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_add_wishlist",
                data_id: a(this).data("id"),
                data_type: a(this).data("type")
            },
            dataType: "json",
            beforeSend: function() {}
        }).done(function(a) {
            c.html(a.icon).attr("data-original-title", a.title)
        })
    }),
    a(document).on("click", ".btn_remove_wishlist", function(c) {
        var d = a(this);
        a.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_remove_wishlist",
                data_id: a(this).data("id"),
                data_type: a(this).data("type")
            },
            dataType: "json",
            beforeSend: function() {
                a(".post-" + d.attr("data-id") + " .user_img_loading").show()
            }
        }).done(function(c) {
            "true" == c.status ? a(".post-" + c.msg).html(b(c.type, c.content)).attr("data-original-title", c.title) : a(".post-" + c.msg).append(b(c.type, c.content)).attr("data-original-title", c.title)
        })
    }),
    a(".btn_load_more_wishlist").click(function() {
        var b = a(this)
          , c = b.html();
        a.ajax({
            url: st_params.ajax_url,
            type: "GET",
            data: {
                action: "st_load_more_wishlist",
                data_per: a(".btn_load_more_wishlist").attr("data-per"),
                data_next: a(".btn_load_more_wishlist").attr("data-next")
            },
            dataType: "json",
            beforeSend: function() {
                b.html("Loading...")
            }
        }).done(function(d) {
            b.html(c),
            a("#data_whislist").append(d.msg),
            "true" == d.status ? (console.log(d),
            a(".btn_load_more_wishlist").attr("data-per", d.data_per)) : (a(".btn_load_more_wishlist").attr("disabled", "disabled"),
            a(".btn_load_more_wishlist").html("No More"))
        })
    }),
    a("#btn_add_media").click(function() {
        a("#my_image_upload").click()
    }),
    a("#my_image_upload").change(function() {
        a("#submit_my_image_upload").click()
    }),
    a(".btn_remove_post_type").click(function() {
        var c = a(this);
        a.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_remove_post_type",
                data_id: a(this).attr("data-id"),
                data_id_user: a(this).attr("data-id-user")
            },
            dataType: "json",
            beforeSend: function() {
                a(".post-" + c.attr("data-id") + " .user_img_loading").show()
            }
        }).done(function(c) {
            console.log(c),
            "true" == c.status ? a(".post-" + c.msg).html(b(c.type, c.content)) : a(".post-" + c.msg).append(b(c.type, c.content))
        })
    }),
    a("#btn_check_insert_post_type_hotel").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create hotel !"),
        a("#btn_insert_post_type_hotel").click())
    }),
    a("#btn_check_insert_post_type_room").click(function() {
        var b = !0;
        1 != e("title", "Warning : Room Name could not left empty") && (b = !1),
        1 != f("title", "Warning : Room Name no shorter than 4 characters", 4) && (b = !1),
        1 == b && (console.log("Submit create hotel !"),
        a("#btn_insert_post_type_room").click())
    }),
    a(document).on("click", ".btn_del_price_custom", function() {
        a(this).parent().parent().remove()
    }),
    a("#btn_add_custom_price").click(function() {
        var b = a(".data_price_html").html();
        a(".content_data_price").append(b),
        a("input.date-pick, .input-daterange, .date-pick-inline").datepicker({
            todayHighlight: !0,
            weekStart: 1
        })
    }),
    a("#btn_add_custom_price_by_number").click(function() {
        var b = a(".data_price_by_number_html").html();
        a(".content_data_price_by_number").append(b)
    }),
    a("#btn_add_extra_price").click(function(b) {
        var c = a(".data-extra-price-html").html();
        a(".content_extra_price").append(c)
    }),
    a(document).on("click", ".btn_del_extra_price", function() {
        a(this).parents(".item").remove()
    }),
    a("#btn_check_insert_post_type_tours").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create Tours !"),
        a("#btn_insert_post_type_tours").click())
    }),
    a("#btn_check_insert_activity").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create Activity !"),
        a("#btn_insert_post_type_activity").click())
    }),
    a("#btn_check_insert_cars").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create Cars !"),
        a("#btn_insert_post_type_cars").click())
    }),
    a("#btn_check_insert_post_type_rental").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create Rental !"),
        a("#btn_insert_post_type_rental").click())
    }),
    a("#btn_check_insert_post_type_cruise").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create cruise !"),
        a("#btn_insert_post_type_cruise").click())
    }),
    a("#btn_check_insert_cruise_cabin").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create cruise !"),
        a("#btn_insert_cruise_cabin").click())
    }),
    a("#btn_check_insert_post_type_location").click(function() {
        var b = !0;
        1 == b && (console.log("Submit create location !"),
        a("#btn_insert_post_type_location").click())
    }),
    a(document).on("change", ".btn-file :file", function() {
        var b = a(this)
          , c = b.val().replace(/\\/g, "/").replace(/.*\//, "");
        b.parent().parent().parent().find(".data_lable").val(c)
    }),
    a(document).on("change", ".btn-file.multiple :file", function() {
        for (var b = a(this), c = b[0].files, d = "", e = 0; e < c.length; e++)
            d += c[e].name + " , ";
        b.parent().parent().parent().find(".data_lable").val(d)
    }),
    a(".btn_del_avatar").click(function() {
        a("#id_avatar_user_setting").val(""),
        a(".data_lable").val("")
    }),
    a(".btn_load_his_withdrawal").click(function() {
        var b = a(this)
          , c = b.html();
        a.ajax({
            url: st_params.ajax_url,
            type: "GET",
            data: {
                action: "st_load_more_list_withdrawal",
                paged: b.attr("data-per"),
                show: "json"
            },
            dataType: "json",
            beforeSend: function() {
                b.html(st_params.text_loading)
            }
        }).done(function(a) {
            b.html(c),
            "true" == a.status ? (console.log(a),
            b.attr("data-per", a.data_per),
            b.parent().find("#data_history_withdrawal").append(a.html)) : (b.attr("disabled", "disabled"),
            b.html(st_params.text_no_more))
        })
    }),
    a(".btn_load_his_book").click(function() {
        var b = a(this)
          , c = b.html();
        a.ajax({
            url: st_params.ajax_url,
            type: "GET",
            data: {
                action: "st_load_more_history_book",
                paged: b.attr("data-per"),
                show: "json",
                data_type: b.attr("data-type")
            },
            dataType: "json",
            beforeSend: function() {
                b.html(st_params.text_loading)
            }
        }).done(function(a) {
            b.html(c),
            "true" == a.status ? (console.log(a),
            b.attr("data-per", a.data_per),
            b.parent().find("#data_history_book").append(a.html)) : (b.attr("disabled", "disabled"),
            b.html(st_params.text_no_more))
        })
    }),
    a("#btn_add_program").click(function() {
        var b = a("#html_program").html();
        console.log(b),
        a("#data_program").append(b)
    }),
    a("#btn_add_equipment_item").click(function() {
        var b = a("#html_equipment_item").html();
        console.log(b),
        a("#data_equipment_item").append(b)
    }),
    a("#btn_add_features").click(function() {
        var b = a("#html_features").html();
        console.log(b),
        a("#data_features").append(b)
    }),
    a("#btn_add_features_rental").click(function() {
        var b = a("#html_features_rental").html();
        console.log(b),
        a("#data_features_rental").append(b)
    }),
    a(document).on("click", ".btn_del_program", function() {
        a(this).parent().parent().parent().remove()
    }),
    a("li.menu_partner a").click(function() {
        var b = a(this).next(".sub_partner").css("display");
        console.log(b),
        "none" == b ? (a(this).next(".sub_partner").slideDown(500),
        a(".icon_partner", this).removeClass("fa-angle-left").addClass("fa-angle-down")) : (a(this).next(".sub_partner").slideUp(500),
        a(".icon_partner", this).removeClass("fa-angle-down").addClass("fa-angle-left"))
    }),
    a(".btn_on_off_post_type_partner").click(function() {
        var b = a(this);
        a.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_change_status_post_type",
                data_id: a(this).attr("data-id"),
                data_id_user: a(this).attr("data-id-user"),
                status: a(this).attr("data-status")
            },
            dataType: "json",
            beforeSend: function() {
                a(".post-" + b.attr("data-id") + " .user_img_loading").show()
            }
        }).done(function(c) {
            console.log(c),
            a(".post-" + b.attr("data-id") + " .user_img_loading").hide(),
            "true" == c.status && ("on" == b.attr("data-status") ? (b.attr("data-status", "off"),
            b.removeClass("fa-eye-slash").addClass("fa-eye")) : (b.attr("data-status", "on"),
            b.removeClass("fa-eye").addClass("fa-eye-slash")))
        })
    }),
    a("#add-new-facility").click(function(b) {
        var c = a("#template").html();
        a("#facility-wrapper").append(c).find(".facility-item").show(),
        b.preventDefault()
    }),
    a("#facility-wrapper").on("click", ".btn_del_facility", function(b) {
        a(this).closest(".facility-item").remove()
    }),
    a(".btn_featured_image").click(function() {
        var b = a(this);
        b.parent().parent().find("#id_featured_image").val(""),
        b.parent().parent().find(".data_lable").val(""),
        b.parent().remove()
    }),
    a(".btn_del_logo").click(function() {
        var b = a(this);
        b.parent().parent().find("#id_logo").val(""),
        b.parent().parent().find(".data_lable").val(""),
        b.parent().remove()
    }),
    a(".btn_del_gallery").click(function() {
        var b = a(this);
        b.parent().parent().find("#id_gallery").val(""),
        b.parent().parent().find(".data_lable").val(""),
        b.parent().remove()
    }),
    a("#btn_add_custom_paid_options").click(function() {
        var b = a(".paid_options_html").html();
        console.log(b),
        a(".content_data_paid_options").append(b)
    }),
    a("#btn_add_custom_add_new_facility").click(function() {
        var b = a(".add_new_facility_html").html();
        console.log(b),
        a(".content_data_add_new_facility").append(b),
        a(".st_icon").each(function() {
            a(this).iconpicker({
                icons: st_icon_picker.icon_list,
                iconClassPrefix: ""
            })
        })
    }),
    a(document).on("click", ".btn_del_custom_partner", function() {
        a(this).parent().parent().parent().remove()
    }),
    a("#btn_discount_by_adult").click(function() {
        var b = a("#html_discount_by_adult").html();
        console.log(b),
        a("#data_discount_by_adult").append(b)
    }),
    a("#btn_discount_by_child").click(function() {
        var b = a("#html_discount_by_child").html();
        console.log(b),
        a("#data_discount_by_child").append(b)
    }),
    a("#btn_hotel_policy").on("click", function() {
        var b = a("#html_hotel_policy").html();
        console.log(b),
        a("#data_hotel_policy").append(b)
    }),
    a("#btn_add_social").click(function() {
        var b = a("#html_add_social").html();
        console.log(b),
        a("#data_add_social").append(b)
    }),
    jQuery(window).bind("load", function(a) {
        j()
    }),
    jQuery(window).resize(function(a) {
        j()
    }),
    a("#st_form_add_partner .number").each(function() {
        var b = a(this);
        b.change(function() {
            var b = a(this).val();
            b = parseFloat(b),
            isNaN(b) && (b = 0),
            a(this).val(b)
        })
    }),
    a("#st_form_add_partner input.date-pick").each(function() {
        var b = a(this).closest("form");
        a(this, b).datepicker("setStartDate", "today")
    }),
    a(".check_all").on("ifClicked", function(b) {
        var c = a(this);
        c.prop("checked") ? c.parent().parent().parent().parent().parent().find(".item_tanoxomy").iCheck("uncheck") : c.parent().parent().parent().parent().parent().find(".item_tanoxomy").iCheck("check")
    }),
    a(".item_tanoxomy").on("ifClicked", function(b) {
        var c = a(this)
          , d = !0;
        c.parent().parent().parent().parent().parent().find(".item_tanoxomy").each(function() {
            var b = a(this);
            setTimeout(function() {
                "" == b.prop("checked") && (d = !1)
            }, 100)
        }),
        setTimeout(function() {
            1 == d ? c.parent().parent().parent().parent().parent().find(".check_all").iCheck("check") : c.parent().parent().parent().parent().parent().find(".check_all").iCheck("uncheck")
        }, 200)
    }),
    k("is_sale_schedule", "data_is_sale_schedule"),
    k("st_tour_external_booking", "data_st_tour_external_booking"),
    k("st_rental_external_booking", "data_st_rental_external_booking"),
    k("st_activity_external_booking", "data_st_activity_external_booking"),
    k("st_room_external_booking", "data_st_room_external_booking"),
    k("st_car_external_booking", "data_st_car_external_booking"),
    k("best-price-guarantee", "data_best-price-guarantee"),
    "" != a(".deposit_payment_status").val() ? a(".data_deposit_payment_status").fadeIn(500) : a(".data_deposit_payment_status").fadeOut(500),
    a(".deposit_payment_status").change(function() {
        "" != a(this).val() ? a(".data_deposit_payment_status").fadeIn(500) : a(".data_deposit_payment_status").fadeOut(500)
    }),
    "off" == a(".is_auto_caculate").val() ? a(".data_is_auto_caculate").fadeIn(500) : a(".data_is_auto_caculate").fadeOut(500),
    a(".is_auto_caculate").change(function() {
        "off" == a(this).val() ? a(".data_is_auto_caculate").fadeIn(500) : a(".data_is_auto_caculate").fadeOut(500)
    }),
    "price_by_date" == a(".is_custom_price").val() ? (a(".data_price_by_date").fadeIn(500),
    a(".data_price_by_number").fadeOut(0)) : (a(".data_price_by_date").fadeOut(0),
    a(".data_price_by_number").fadeIn(500)),
    a(".is_custom_price").change(function() {
        "price_by_date" == a(this).val() ? (a(".data_price_by_date").fadeIn(500),
        a(".data_price_by_number").fadeOut(0)) : (a(".data_price_by_date").fadeOut(0),
        a(".data_price_by_number").fadeIn(500))
    }),
    setTimeout(function() {
        a(".div_btn_submit input[type=submit]").removeAttr("disabled")
    }, 5e3)
}),
jQuery(function(a) {
    1 == a("#st_form_add_partner").hasClass("success") && (console.log("Reset"),
    a("#st_form_add_partner input[type=text]").val(""),
    a("#st_form_add_partner input[type=email]").val(""),
    a("#st_form_add_partner input[type=number]").val("0"),
    a("#st_form_add_partner .st_content").val(""),
    a("#st_form_add_partner textarea").html(""),
    a("#st_form_add_partner .user-profile-avatar").html(""),
    a("#st_form_add_partner .id_featured_image").val(""),
    a("#st_form_add_partner .id_logo").val(""),
    a("#st_form_add_partner .data_lable").val(""),
    a("#st_form_add_partner .content_data_add_new_facility").html(""),
    a("#st_form_add_partner .content_data_paid_options").html(""),
    a("#st_form_add_partner .content_data_price").html(""),
    a("#st_form_add_partner .selectize-input").html(""),
    a("#st_form_add_partner select").prop("selectedIndex", 0),
    a("#st_form_add_partner").find(".item_tanoxomy").iCheck("uncheck")),
    a(".input-daterange input.st_date_start").each(function() {
        var b = a(this).closest("form");
        a(this);
        a(this).datepicker({
            language: st_params.locale,
            autoclose: !0,
            todayHighlight: !0,
            startDate: "today",
            format: a("[data-date-format]").data("date-format"),
            weekStart: 1
        }).on("changeDate", function(c) {
            var d = c.date;
            d.setDate(d.getDate() + 1),
            a(".input-daterange input.st_date_end", b).datepicker("setDates", d),
            a(".input-daterange input.st_date_end", b).datepicker("setStartDate", d)
        }),
        a(".input-daterange input.st_date_end", b).datepicker({
            language: st_params.locale,
            startDate: "+1d",
            format: a("[data-date-format]").data("date-format"),
            autoclose: !0,
            todayHighlight: !0
        })
    })
}),
jQuery(function($) {
    function init_canvas_detail_post_type(div_content, id_rand, post_type, lable, data_item) {
        var id_div = "canvas_detail_post_type_" + id_rand
          , $content = $("." + div_content);
        $content.html('<canvas id="' + id_div + '" height="150"></canvas>'),
        lable = eval(lable),
        data_item = eval(data_item);
        var color = "237,​ 131,​ 35";
        switch (post_type) {
        case "st_hotel":
            color = "87, 142, 190";
            break;
        case "st_rental":
            color = "227, 91, 90";
            break;
        case "st_cars":
            color = "68, 182, 174";
            break;
        case "st_tours":
            color = "135, 117, 167";
            break;
        case "st_activity":
            color = "39, 174, 96"
        }
        var lineChartData = {
            labels: lable,
            datasets: [{
                label: "My First",
                fillColor: "rgba(" + color + ", 0.8)",
                strokeColor: "rgba(" + color + ", 1)",
                pointColor: "rgba(" + color + ", 1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(" + color + ", 1)",
                data: data_item
            }]
        }
          , ctx = document.getElementById(id_div).getContext("2d");
        new Chart(ctx).Line(lineChartData, {
            responsive: !0,
            animationEasing: "easeOutBounce"
        })
    }
    if ($(document).on("click", ".st_menu_new li.item", function() {
        var a = $(this).parent()
          , b = $(this);
        0 == b.hasClass("active") && (a.find("li.item").removeClass("active").find(".sub-menu").css("display", "none"),
        b.find(".sub-menu").fadeIn(500),
        b.addClass("active"))
    }),
    $(".input-date-start").each(function() {
        var a = $(this).closest("form");
        $(this);
        $(this).datepicker({
            language: st_params.locale,
            autoclose: !0,
            todayHighlight: !0,
            todayBtn: !0,
            format: $(this).data("date-format"),
            weekStart: 1
        }).on("changeDate", function(b) {
            var c = b.date;
            c.setDate(c.getDate() + 1),
            $(".input-date-end", a).datepicker("setDates", c)
        }),
        $(".input-date-end", a).datepicker({
            language: st_params.locale,
            format: $(this).data("date-format"),
            autoclose: !0,
            todayBtn: !0,
            todayHighlight: !0,
            weekStart: 1
        })
    }),
    $(document).on("click", ".btn_show_custom_date", function() {
        var a = $(this);
        console.log(a.hasClass("open")),
        1 == a.hasClass("open") ? ($(".div-custom-date").fadeOut(),
        a.removeClass("open")) : ($(".div-custom-date").fadeIn(),
        a.addClass("open"))
    }),
    $(document).on("click", ".btn_cancel", function() {
        $(".div-custom-date").fadeOut(),
        $(".btn_show_custom_date").removeClass("open")
    }),
    "custom_date||" == $(".custom_select_date").val() ? $(".data_custom_date").fadeIn() : $(".data_custom_date").fadeOut(),
    $(document).on("change", ".custom_select_date", function() {
        var a = $(this).val();
        "custom_date||" == a ? $(".data_custom_date").fadeIn() : $(".data_custom_date").fadeOut()
    }),
    $(document).on("click", ".btn_show_month_by_year", function() {
        var a = $(this).parent().parent().parent();
        a.find("tr").removeClass("active"),
        $(this).parent().parent().addClass("active");
        var b = $(this)
          , c = b.data("post-type")
          , d = b.data("year");
        $.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_load_month_by_year_partner",
                data_year: d,
                data_post_type: c
            },
            dataType: "json",
            beforeSend: function() {
                a.find(".active a.btn_show_month_by_year").html(b.data("loading"))
            }
        }).done(function(d) {
            $(".div_single_month .data_month").html(d.html),
            $(".div_single_month .bc_single").html(d.bc_title),
            a.find(".active a.btn_show_month_by_year").html(b.data("title")),
            $(".div_single_year").hide(),
            $(".div_single_day").hide(),
            $(".div_single_month").fadeIn(),
            $(".div_single_custom").hide(),
            init_canvas_detail_post_type("st_div_item_canvas_month", d.id_rand, c, d.js.lable, d.js.data)
        }).error(function(a) {
            console.log(a)
        })
    }),
    $(document).on("click", ".btn_show_day_by_month_year_partner", function() {
        var a = $(this).parent().parent().parent();
        a.find("tr").removeClass("active"),
        $(this).parent().parent().addClass("active");
        var b = $(this)
          , c = b.data("post-type")
          , d = b.data("year")
          , e = b.data("month");
        $.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_load_day_by_month_and_year_partner",
                data_year: d,
                data_month: e,
                data_post_type: c
            },
            dataType: "json",
            beforeSend: function() {
                a.find(".active a.btn_show_day_by_month_year_partner").html(b.data("loading"))
            }
        }).done(function(d) {
            $(".div_single_day .data_day").html(d.html),
            $(".div_single_day .bc_single").html(d.bc_title),
            a.find(".active a.btn_show_day_by_month_year_partner").html(b.data("title")),
            $(".div_single_year").hide(),
            $(".div_single_month").hide(),
            $(".div_single_day").fadeIn(),
            init_canvas_detail_post_type("st_div_item_canvas_day", d.id_rand, c, d.js.lable, d.js.data)
        }).error(function(a) {
            console.log(a)
        })
    }),
    $(document).on("click", ".btn_single_all_time", function() {
        $(".div_single_year").fadeIn(),
        $(".div_single_month").hide(),
        $(".div_single_day").hide()
    }),
    $(document).on("click", ".btn_single_year", function() {
        $(".div_single_year").hide(),
        $(".div_single_month").fadeIn(),
        $(".div_single_day").hide()
    }),
    $(document).on("click", ".btn_all_time_show_month_by_year", function() {
        var a = $(this).parent().parent().parent();
        a.find("tr").removeClass("active"),
        $(this).parent().parent().addClass("active");
        var b = $(this)
          , c = b.data("year");
        $.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_load_month_all_time_by_year_partner",
                data_year: c
            },
            dataType: "json",
            beforeSend: function() {
                a.find(".active a.btn_all_time_show_month_by_year").html(b.data("loading"))
            }
        }).done(function(c) {
            $(".div_all_time_month .data_all_time_month").html(c.html),
            $(".div_all_time_month .bc_all_time").html(c.bc_title),
            a.find(".active a.btn_all_time_show_month_by_year").html(b.data("title")),
            $(".div_all_time_year").hide(),
            $(".div_all_time_day").hide(),
            $(".div_all_time_month").fadeIn(),
            $(".div_custom_month").hide(),
            init_canvas_detail_post_type("st_div_item_all_time_canvas_month", c.id_rand, "st_hotel", c.js.lable, c.js.data)
        }).error(function(a) {
            console.log(a)
        })
    }),
    $(document).on("click", ".btn_all_time_show_day_by_month_year_partner", function() {
        var a = $(this).parent().parent().parent();
        a.find("tr").removeClass("active"),
        $(this).parent().parent().addClass("active");
        var b = $(this)
          , c = b.data("year")
          , d = b.data("month");
        $.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_load_day_all_time_by_month_and_year_partner",
                data_year: c,
                data_month: d
            },
            dataType: "json",
            beforeSend: function() {
                a.find(".active a.btn_all_time_show_day_by_month_year_partner").html(b.data("loading"))
            }
        }).done(function(c) {
            $(".div_all_time_day .data_all_time_day").html(c.html),
            $(".div_all_time_day .bc_all_time").html(c.bc_title),
            a.find(".active a.btn_all_time_show_day_by_month_year_partner").html(b.data("title")),
            $(".div_all_time_year").hide(),
            $(".div_all_time_month").hide(),
            $(".div_all_time_day").fadeIn(),
            init_canvas_detail_post_type("st_div_item_all_time_canvas_day", c.id_rand, "st_hotel", c.js.lable, c.js.data)
        }).error(function(a) {
            console.log(a)
        })
    }),
    $(document).on("click", ".btn_all_time", function() {
        $(".div_all_time_year").fadeIn(),
        $(".div_all_time_month").hide(),
        $(".div_all_time_day").hide()
    }),
    $(document).on("click", ".btn_all_time_year", function() {
        $(".div_all_time_year").hide(),
        $(".div_all_time_month").fadeIn(),
        $(".div_all_time_day").hide()
    }),
    $(".st_timepicker").length) {
        var time_picker_arg = {
            timeFormat: "hh:mm tt",
            showMeridian: !1
        };
        "12h" == st_params.time_format ? time_picker_arg.showMeridian = !0 : time_picker_arg.showMeridian = !1,
        $(".st_timepicker").timepicker(time_picker_arg)
    }
    $(".st_icon").each(function() {
        $(this).iconpicker({
            icons: st_icon_picker.icon_list,
            iconClassPrefix: ""
        })
    })
}),
jQuery(document).ready(function(a) {
    function d() {
        var b = !0;
        try {
            "" == a("#field-user_name").val() ? (a("#field-user_name").css("border-color", "red"),
            b = !1) : a("#field-user_name").css("border-color", "#ccc"),
            "" == a("#field-password").val() ? (a("#field-password").css("border-color", "red"),
            b = !1) : a("#field-password").css("border-color", "#ccc"),
            "" == a("#field-email").val() ? (a("#field-email").css("border-color", "red"),
            b = !1) : a("#field-email").css("border-color", "#ccc"),
            "on" != a(".term_condition:checked").val() ? (a(".term_condition").parent().css("border-color", "red"),
            b = !1) : a(".term_condition").parent().css("border-color", "#ccc")
        } catch (a) {
            console.log(a)
        }
        return b
    }
    function p(b) {
        var c = ""
          , d = "";
        q.length && a.each(q, function(a, b) {
            c += "<p class='item-location-from-to' data-index=" + a + " style='padding: 5px; margin-top: 5px; border-bottom: 1px solid #CCC; background: #EEE; font-weight: bold;'>" + b.pickup_text + " -> " + b.dropoff_text + " <span class='delete-item-location-from-to'>x</span></p>",
            d += '<input type="hidden" name="locations_from_to[pickup][]" value="' + b.pickup + '"><input type="hidden" name="locations_from_to[dropoff][]" value="' + b.dropoff + '">'
        }),
        a("#location-car-selected").html(c),
        a(".location-save-data").html(d)
    }
    function s(b) {
        "multi_location" == b && (a(".multi_location_wrapper").fadeIn(),
        a(".location_from_to_wrapper").fadeOut()),
        "check_in_out" == b && (a(".multi_location_wrapper").fadeOut(),
        a(".location_from_to_wrapper").fadeIn())
    }
    function w(b) {
        var c = !0;
        return a(".required", b).each(function(b, d) {
            var e = a(this).val();
            "" == e ? (c = !1,
            a(this).addClass("error")) : a(this).removeClass("error")
        }),
        c
    }
    1 == a(".register_form").data("reset") && (a(".register_form .data_field :input[type=text]").each(function() {
        a(this).val("")
    }),
    a(".data_image_certificates").each(function() {
        a(this).html("")
    })),
    a(".register_form .register_as").on("ifChecked", function(b) {
        var c = a(this).val();
        "partner" == c && a(".content_partner").slideDown(1e3),
        "normal" == c && a(".content_partner").slideUp(1e3),
        console.log(c)
    }),
    "partner" == a(".register_form .register_as:checked").val() && a(".content_partner").show(),
    a(".register_form .st_certificates").change(function() {
        a(this).data("type")
    });
    a(".register_form");
    if (a(".register_form").submit(function() {
        if (0 == a(this).hasClass("update_info_partner") && !d())
            return console.log("Error"),
            !1
    }),
    a("input#address").length) {
        var e = a("input.bt_ot_gmap_input_lat")
          , f = a("input.bt_ot_gmap_input_lng")
          , g = a("#bt_ot_gmap_st_street_number")
          , h = a("#bt_ot_gmap_st_locality")
          , i = a("#bt_ot_gmap_st_route")
          , j = a("#bt_ot_gmap_st_sublocality_level_1")
          , k = a("#bt_ot_gmap_st_administrative_area_level_2")
          , l = a("#bt_ot_gmap_st_administrative_area_level_1")
          , m = a("#bt_ot_gmap_st_country")
          , n = a("input#address").get(0)
          , o = new google.maps.places.Autocomplete(n);
        o.addListener("place_changed", function() {
            var b = o.getPlace();
            0 != b.length && (e.val(b.geometry.location.lat()),
            f.val(b.geometry.location.lng()),
            g.val(""),
            h.val(""),
            i.val(""),
            j.val(""),
            k.val(""),
            l.val(""),
            m.val(""),
            a.each(b.address_components, function(b, c) {
                a.inArray("street_number", c.types) != -1 && g.val(c.long_name),
                a.inArray("locality", c.types) != -1 && h.val(c.long_name),
                a.inArray("route", c.types) != -1 && i.val(c.long_name),
                a.inArray("sublocality_level_1", c.types) != -1 && j.val(c.long_name),
                a.inArray("administrative_area_level_2", c.types) != -1 && k.val(c.long_name),
                a.inArray("administrative_area_level_1", c.types) != -1 && l.val(c.long_name),
                a.inArray("country", c.types) != -1 && m.val(c.long_name)
            }))
        })
    }
    a(document).on("click", ".paged_item_service", function() {
        var b = a(this).parent().parent().parent().parent()
          , c = a(this).data("page")
          , d = a(this).data("user-id")
          , e = a(this).data("post-type");
        console.log(e),
        a.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "get_list_item_service_available",
                data_page: c,
                data_user_id: d,
                data_post_type: e,
                st_ajax: 1
            },
            dataType: "json",
            beforeSend: function() {
                b.find(".ajax_loader").show()
            }
        }).done(function(c) {
            console.log(c),
            b.find(".data_single_partner").html(c.data),
            b.find(".paging_single_partner").html(c.paging),
            b.find(".ajax_loader").hide(),
            a(".st-popup-gallery").each(function() {
                a(this).magnificPopup({
                    delegate: ".st-gp-item",
                    type: "image",
                    gallery: {
                        enabled: !0
                    }
                })
            })
        })
    }),
    a(".car_location_pick_up").each(function(b, c) {
        var d = a(this);
        d.select2({
            placeholder: d.data("placeholder"),
            minimumInputLength: 2,
            ajax: {
                url: ajaxurl,
                dataType: "json",
                quietMillis: 250,
                data: function(a, b) {
                    return {
                        q: a,
                        action: "st_post_select_ajax",
                        post_type: "location"
                    }
                },
                results: function(a, b) {
                    return {
                        results: a.items
                    }
                },
                cache: !0
            },
            formatResult: function(a) {
                return a.id ? a.name + "<p><em>" + a.description + "</em></p>" : a.name
            },
            formatSelection: function(a) {
                return a.id ? a.name + "<p><em>" + a.description + "</em></p>" : a.name
            },
            escapeMarkup: function(a) {
                return a
            }
        }),
        d.on("change", function(b) {
            console.log(typeof b.added),
            "undefined" != typeof b.added && "undefined" != typeof b.added.name && d.attr("data-name", b.added.name);
            var e, c = b.val;
            "" != c && a(".car_location_drop_off").each(function(b, f) {
                e = a(this),
                e.select2({
                    placeholder: d.data("placeholder"),
                    ajax: {
                        url: ajaxurl,
                        dataType: "json",
                        quietMillis: 250,
                        data: function(a, b) {
                            return {
                                action: "st_get_location_childs",
                                location_id: c
                            }
                        },
                        results: function(a, b) {
                            return {
                                results: a.items
                            }
                        },
                        cache: !0
                    },
                    formatResult: function(a) {
                        return a.id ? a.name + "<p><em>" + a.description + "</em></p>" : a.name
                    },
                    formatSelection: function(a) {
                        return a.id ? a.name + "<p><em>" + a.description + "</em></p>" : a.name
                    },
                    escapeMarkup: function(a) {
                        return a
                    }
                }),
                e.on("change", function(a) {
                    "undefined" != typeof a.added && "undefined" != typeof a.added.name && e.attr("data-name", a.added.name)
                })
            })
        })
    });
    var q = st_location_from_to.lists;
    if (p(q),
    a("#add-location-from-to").click(function(b) {
        a("p.location-message").html("");
        var c = a("input.car_location_pick_up").val()
          , d = a("input.car_location_drop_off").val();
        if ("" != c && "" != d) {
            var e = a("input.car_location_pick_up").attr("data-name")
              , f = a("input.car_location_drop_off").attr("data-name");
            q.push({
                pickup: c,
                pickup_text: e,
                dropoff: d,
                dropoff_text: f
            }),
            a(".car_location_drop_off").select2("data", null )
        } else
            a("p.location-message").html("Please select pick up and drop off location!");
        return p(q),
        !1
    }),
    a("body").on("click", ".delete-item-location-from-to", function(b) {
        var c = a(this).parent(".item-location-from-to")
          , d = c.data("index");
        q.splice(d, 1),
        p(q)
    }),
    a("select#location_type").length) {
        var r = a("select#location_type").val();
        s(r)
    }
    a("select#location_type").change(function(b) {
        var c = a(this).val();
        s(c)
    }),
    a(".st-select-loction").length && a(".st-select-loction").each(function(b, c) {
        var g, d = a(this), e = a('input[name="search"]', d), f = a(".list-location-wrapper", d);
        e.keyup(function(b) {
            clearTimeout(g);
            var c = a(this);
            g = setTimeout(function() {
                var b = c.val().toLowerCase();
                "" == b ? a(".item", f).show() : (a(".item", f).hide(),
                a(".item", f).each(function() {
                    var c = a(this).data("name").toLowerCase()
                      , d = new RegExp(b,"g");
                    d.test(c) && a(this).show()
                }))
            }, 0)
        })
    }),
    a("#st_partner_payout").change(function() {
        var b = a(this).val();
        console.log(b),
        "paypal" == b && (a(".content_partner_paypal").show(),
        a(".content_partner_stripe").hide()),
        "stripe" == b && (a(".content_partner_paypal").hide(),
        a(".content_partner_stripe").show())
    });
    var t = a("#st_partner_payout").val();
    "paypal" == t && (a(".content_partner_paypal").show(),
    a(".content_partner_stripe").hide()),
    "stripe" == t && (a(".content_partner_paypal").hide(),
    a(".content_partner_stripe").show()),
    a(".st_partner_payout_item .item-pay").click(function() {
        a(".st_partner_payout_item").find(".item-pay").removeClass("active"),
        a(this).parent().find(".st_partner_payout").iCheck("check"),
        a(this).addClass("active");
        var b = a(this).parent().find(".st_partner_payout").val();
        a(".item.st_partner_payout_item").hide(),
        a(".st_partner_payout_item_" + b).fadeIn(500),
        a(".item.st_partner_payout_item.control").fadeIn(500)
    }),
    a(".st_partner_payout_item .item-pay").each(function() {
        var b = a(this).hasClass("active");
        if (b) {
            var c = a(this).parent().find(".st_partner_payout").val();
            a(".st_partner_payout_item_" + c).fadeIn(500),
            a(".item.st_partner_payout_item.control").fadeIn(500)
        }
    }),
    a(document).on("click", ".btn_del_withdrawal", function(b) {
        var c = a(this)
          , e = (c.parent().html(),
        c.parent().parent());
        a.ajax({
            url: st_params.ajax_url,
            type: "POST",
            data: {
                action: "st_remove_withdrawal",
                data_user_id: a(this).data("user-id"),
                data_date_create: a(this).data("date-create")
            },
            dataType: "json",
            beforeSend: function() {
                c.parent().html('<img src="' + st_params.loading_url + '" />')
            }
        }).done(function(a) {
            "true" == a.status && e.fadeOut()
        })
    }),
    a("body").on("click", ".confirm-cancel-booking", function(b) {
        b.preventDefault();
        var c = a(this);
        a("#cancel-booking-modal").on("show.bs.modal", function(b) {
            var c = a(this);
            a(".modal-content-inner", c).empty(),
            a(".overlay-form", c).fadeIn()
        }),
        a("#cancel-booking-modal").on("shown.bs.modal", function(b) {
            var d = a(this)
              , e = {
                action: "st_get_cancel_booking_step_1",
                order_id: c.data("order_id"),
                order_encrypt: c.data("order_encrypt")
            };
            a.post(st_params.ajax_url, e, function(b, c, e) {
                "object" == typeof b && (a(".modal-content-inner", d).html(b.message),
                d.data("order_id", b.order_id),
                d.data("order_encrypt", b.order_encrypt),
                a(".modal-footer button.next", d).attr("id", b.step)),
                a(".overlay-form", d).fadeOut()
            }, "json")
        })
    });
    var u = !1;
    a("body").on("click", "#next-to-step-2", function(b) {
        b.preventDefault();
        var c = a(this)
          , d = c.closest("#cancel-booking-modal");
        if (u)
            return !1;
        u = !0,
        a(".overlay-form", d).fadeIn(),
        c.addClass("hidden");
        var e = {
            action: "st_get_cancel_booking_step_2",
            order_id: d.data("order_id"),
            order_encrypt: d.data("order_encrypt"),
            why_cancel: a('input[name="why_cancel"]', d).val(),
            detail: a("textarea", d).val()
        };
        a.post(st_params.ajax_url, e, function(b, c, e) {
            "object" == typeof b && (a(".modal-content-inner", d).html(b.message),
            d.data("order_id", b.order_id),
            d.data("order_encrypt", b.order_encrypt),
            a(".modal-footer button.next", d).attr("id", b.step)),
            a(".overlay-form", d).fadeOut(),
            u = !1
        }, "json")
    });
    var v = !1;
    a("body").on("click", "#next-to-step-3", function(b) {
        b.preventDefault();
        var c = a(this)
          , d = c.closest("#cancel-booking-modal")
          , e = a("form", d);
        if (u)
            return !1;
        if (u = !0,
        v = !1,
        a(".overlay-form", d).fadeIn(),
        $validate = w(e),
        0 == $validate)
            return a(".overlay-form", d).fadeOut(),
            u = !1,
            !1;
        var f = e.serializeArray();
        f.push({
            name: "action",
            value: "st_get_cancel_booking_step_3"
        }, {
            name: "order_id",
            value: d.data("order_id")
        }, {
            name: "order_encrypt",
            value: d.data("order_encrypt")
        }),
        a.post(st_params.ajax_url, f, function(b, c, e) {
            "object" == typeof b && (a(".modal-content-inner", d).html(b.message),
            a(".overlay-form", d).fadeOut(),
            u = !1,
            v = !0,
            a("button.next", d).attr("id", b.step).addClass("hidden"))
        }, "json")
    }),
    a("#cancel-booking-modal").on("hidden.bs.modal", function(b) {
        var c = a(this);
        c.off("show.bs.modal shown.bs.modal"),
        a(".overlay-form", c).fadeOut(),
        a(".modal-content-inner", c).empty(),
        c.data("order_id", ""),
        c.data("order_encrypt", ""),
        v && window.location.reload()
    }),
    a("body").on("change", '#cancel-booking-modal input[name="why_cancel"]', function(b) {
        b.preventDefault();
        var c = a(this)
          , d = c.parents("form")
          , f = (c.closest("#cancel-booking-modal"),
        c.val())
          , g = c.data("text");
        "undefined" != typeof f && "" != f ? a(".modal-footer button.next").removeClass("hidden") : a(".modal-footer button.next").addClass("hidden"),
        "other" == f ? a("textarea", d).val("").removeClass("hide") : a("textarea", d).val(g).addClass("hide")
    }),
    a("body").on("change", '#cancel-booking-modal input[name="select_account"]', function(b) {
        b.preventDefault();
        var c = a(this)
          , d = c.parents("form")
          , f = (c.closest("#cancel-booking-modal"),
        c.val());
        if ("undefined" != typeof f && "" != f ? a(".modal-footer button.next").removeClass("hidden") : a(".modal-footer button.next").addClass("hidden"),
        "undefined" != typeof f && "" != f) {
            var g = a('.form-get-account [data-value="' + f + '"]').html();
            a(".form-get-account-inner", d).html(g)
        } else
            a(".form-get-account-inner", d).html("")
    }),
    a("body").on("click", ".with_a_refund", function(a) {
        a.preventDefault()
    }),
    a("#with-refund-modal").on("hidden.bs.modal", function(b) {
        var c = a(this);
        c.off("show.bs.modal shown.bs.modal"),
        a(".overlay-form", c).fadeOut(),
        a(".modal-content-inner", c).empty(),
        c.data("order_id", ""),
        c.data("order_encrypt", ""),
        y && window.location.reload()
    }),
    a("body").on("click", ".with_a_refund", function(b) {
        b.preventDefault();
        var c = a(this);
        a("#with-refund-modal").on("show.bs.modal", function(b) {
            var c = a(this);
            a(".modal-content-inner", c).empty(),
            a(".overlay-form", c).fadeIn()
        }),
        a("#with-refund-modal").on("shown.bs.modal", function(b) {
            var d = a(this)
              , e = {
                action: "st_get_refund_infomation",
                order_id: c.data("order_id"),
                order_encrypt: c.data("order_encrypt")
            };
            a.post(st_params.ajax_url, e, function(b, c, e) {
                "object" == typeof b && (a(".modal-content-inner", d).html(b.message),
                d.data("order_id", b.order_id),
                d.data("order_encrypt", b.order_encrypt),
                a(".modal-footer button.next", d).attr("id", b.step).removeClass("hidden")),
                a(".overlay-form", d).fadeOut()
            }, "json")
        })
    });
    var x = !1
      , y = !1;
    a("body").on("click", "#st_check_complete_refund", function(b) {
        b.preventDefault();
        var c = a(this)
          , d = c.closest("#with-refund-modal");
        if (x)
            return !1;
        x = !0,
        a(".overlay-form", d).fadeIn(),
        c.addClass("hidden");
        var e = {
            action: "st_check_complete_refund",
            order_id: d.data("order_id"),
            order_encrypt: d.data("order_encrypt")
        };
        a.post(st_params.ajax_url, e, function(b, c, e) {
            "object" == typeof b && (a(".modal-content-inner", d).html(b.message),
            1 == b.status && (y = !0)),
            a(".overlay-form", d).fadeOut(),
            x = !1
        }, "json")
    }),
    a(document).on("click", ".btn_save_and_preview", function(b) {
        a(".save_and_preview").val("true"),
        a(".btn_partner_submit_form").click()
    })
});
