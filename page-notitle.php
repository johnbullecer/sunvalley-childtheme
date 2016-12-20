<?php
/*
Template Name: Page No-Title
*/
/**
 * @package WordPress
 * @subpackage Traveler
 * @since 1.0
 *
 * Template Name : Page No-Title
 *
 * Created by Clyde
 *
 */
get_header();
?> <style>.woocommerce-account .woocommerce-MyAccount-content{float:none}</style>
   <div class="container"><?php	
	
	if(!empty( $_REQUEST[ 'id_user' ] )) {
		$bookhistory_url = get_permalink( get_page_by_title( 'User Account' ) ) . '?sc=booking-history' ;	
		echo '<p style="margin:30px 0 30px"><a href="'. $bookhistory_url .'">Go back to your booking history</a></p>';
	}

	while(have_posts()){
    the_post();
    the_content();
}
?> </div> <?php
get_footer();
