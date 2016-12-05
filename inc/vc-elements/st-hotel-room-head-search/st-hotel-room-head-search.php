<?php
if(!st_check_service_available( 'st_hotel' )) {
    return;
}
if(function_exists( 'vc_map' )) {
    vc_map( array(
        "name"            => __( "ST Sum of Hotel Room Search Results" , ST_TEXTDOMAIN ) ,
        "base"            => "st_search_hotel_room_title" ,
        "content_element" => true ,
        "icon"            => "icon-st" ,
        "category"        => "Shinetheme" ,
        "params"          => array(
            array(
                "type"        => "dropdown" ,
                "holder"      => "div" ,
                "heading"     => __( "Search Modal" , ST_TEXTDOMAIN ) ,
                "param_name"  => "search_modal" ,
                "description" => "" ,
                "value"       => array(
                    __( '--Select--' , ST_TEXTDOMAIN ) => '' ,
                    __( 'Yes' , ST_TEXTDOMAIN )        => '1' ,
                    __( 'No' , ST_TEXTDOMAIN )         => '0' ,
                ) ,
            )
        )
    ) );
}
if(!function_exists( 'st_search_hotel_room_title' )) {
    function st_search_hotel_room_title( $arg = array() )
    {
        if(!get_post_type() == 'hotel_room' and get_query_var( 'post_type' ) != "hotel_room")
            return;

        $default = array(
            'search_modal' => 1
        );
            
        wp_enqueue_script('magnific.js' );
        extract( wp_parse_args( $arg , $default ) );

        $room = new STRoom();
        $a     = '<h3 class="booking-title">' . balanceTags( $room->get_result_string() );

        if($search_modal) {
            $a .= '<small><a class="popup-text" href="#search-dialog" data-effect="mfp-zoom-out">' . __( 'Change your search' , ST_TEXTDOMAIN ) . '</a></small>';
        }
        $a .= '</h3>';

        return $a;
    }
}
if(st_check_service_available( 'hotel_room' )) {
    st_reg_shortcode( 'st_search_hotel_room_title' , 'st_search_hotel_room_title' );
}
