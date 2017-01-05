<?php
/*
Template Name: Track Booking
*/
/**
 * @package WordPress
 * @subpackage Traveler
 * @since 1.0
 *
 * Template Name : Track Booking
 *
 * Created by Clyde
 * Page will redirect if a logged in user. Page will show WC order tracker if visitor.
 */


if ( is_user_logged_in() ) {
	$user_link = get_permalink(get_page_by_title( 'User Account' ));
	$bookhistory_url = TravelHelper::get_user_dashboared_link($user_link, 'booking-history');
	
	header("Location: $bookhistory_url");
	exit;
	
} else {
wp_dequeue_style('bootstrap.css');
wp_deregister_style('bootstrap.css');
get_header();
?>

	<div class="container">
		<div class="row" data-gutter="60">
			<div class="col-md-4 mt30">
                    <h3 class="pb30 mb0"><?php printf(__("New To %s?",ST_TEXTDOMAIN),get_bloginfo('title')) ?></h3>
                    <?php   $page_user_register = st()->get_option("page_user_register");?>
                    <div class="mt5"><b><a class="btn-lg btn btn-primary" href="<?php echo get_permalink($page_user_register) ?>"><?php _e("Not yet a user? Register here!",ST_TEXTDOMAIN) ?></a></b></div>
                    <div class="mt15"><?php do_action( 'wordpress_social_login' ); ?></div>
			</div>
			
			<div class="col-md-6 mt30">
				<h3 class="mb15"><?php the_title(); ?></h3>
				<?php
					while(have_posts()){
                        the_post();
                        the_content();
                    }
				?>
			</div>			
		</div>
	</div>
<?php
}
get_footer();