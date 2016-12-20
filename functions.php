<?php
/**
 * Created by PhpStorm.
 * User: Clyde
 * Date: 21/08/2015
 * Time: 9:45 SA
 */
 
 function remove_style() {
   if ( !is_admin()) {
		wp_dequeue_style('styles.css');
		wp_dequeue_style('custom.css');
		wp_deregister_style( 'styles.css' );
		wp_deregister_style( 'custom.css' );
     }
}
add_action( 'wp_enqueue_scripts','remove_style',50);

function enqueue_parent_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/styles.css' );
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/custom.css' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_child_styles(){
//FIRST
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/styles.css' );
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/custom.css' );

	//...custom queueing of .js and .css for Javascript plugins and such here

	//LAST - override css
	//wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/styles.css', array( 'parent-style' ) );
	//wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/custom.css', array( 'parent-style' ) );
	wp_enqueue_style( 'styles.css', get_stylesheet_directory_uri() . '/css/styles.css');
	wp_enqueue_style( 'custom.css', get_stylesheet_directory_uri() . '/css/custom.css');
}

add_action( 'wp_enqueue_scripts', 'enqueue_child_styles', 101);

//remove menu navigation for woocommerce


function remove_wc_menu(){
	remove_action( 'woocommerce_account_navigation','woocommerce_account_navigation' );
}
add_action('remove_wc_menu','remove_wc_menu');
do_action( 'remove_wc_menu' );


//hook to add previous page link in WC My Account Orders page
//still in progress
function add_previous_page()
{
	//$previous_url = wp_http_referer();
	//$back_link = '<p><a href="'.$previous_url.'">Go back to previous page</a></p>';
	//return $back_link;
	return "test";
}
//add_filter('woocommerce_before_account_orders', 'add_previous_page',1);

/*
//diagnose scripts and styles
function td_inspect_scripts() {
global $wp_scripts, $wp_styles;
echo 'registered scripts<br>';
foreach ($wp_scripts->queue as $handle) {
echo $handle . ' | ' . $wp_scripts->registered[$handle]->src . '<br>';
}
echo 'registered styles<br>';
foreach ($wp_styles->queue as $handle) {
echo $handle . ' | ' . $wp_styles->registered[$handle]->src . '<br>';
}
}
add_action( 'wp_print_scripts', 'td_inspect_scripts',9999);
*/