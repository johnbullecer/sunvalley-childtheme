<?php
/**
 * Created by PhpStorm.
 * User: Clyde
 * Date: 21/08/2015
 * Time: 9:45 SA
 */


/*************
**STYLES
**************/

function enqueue_parent_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );


function remove_style() {
   if ( !is_admin()) {
		wp_dequeue_style('styles.css');
		wp_dequeue_style('custom.css');
		wp_dequeue_style('custom2css');
		wp_dequeue_style('availability');
		
		wp_deregister_style( 'styles.css' );
		wp_deregister_style( 'custom.css' );	
		wp_deregister_style('custom2css');
		wp_deregister_style('availability');
     }
}
add_action( 'wp_enqueue_scripts','remove_style',50);

function register_child_styles(){

	/**register custom css**/
	//wp_register_style( 'sunvalley-wc.css', get_stylesheet_directory_uri() . '/css/sunvalley-wc.css');
	wp_register_style( 'styles.css', get_stylesheet_directory_uri() . '/css/styles.css');
	wp_register_style( 'custom.css', get_stylesheet_directory_uri() . '/css/custom.css');
	wp_register_style( 'custom2css', get_stylesheet_directory_uri() . '/css/custom2.css');
	wp_register_style( 'availability', get_stylesheet_directory_uri() . '/css/availability.css');
	
}
add_action( 'wp_enqueue_scripts', 'register_child_styles', 52);

/**separate enqueue scripts for flexibility**/
function enqueue_child_styles(){

	/**override css - enqueue styles**/
	wp_enqueue_style( 'styles.css');
	wp_enqueue_style( 'custom.css');
	wp_enqueue_style( 'custom2css');
	wp_enqueue_style( 'availability');
}
add_action( 'wp_enqueue_scripts', 'enqueue_child_styles', 100);

/*************
**SCRIPTS
*************/

function remove_scripts() {
   if ( !is_admin()) {
		wp_dequeue_script('bootstrap-traveler');
		
		wp_deregister_script('bootstrap-traveler');
     }
}
add_action( 'wp_enqueue_scripts','remove_scripts',50);

function register_child_scripts(){

	/**register custom script**/
	//wp_register_script( string $handle, string $src, array $deps = array(), string|bool|null $ver = false, bool $in_footer = false )
	wp_register_style( 'bootstrap-js', get_stylesheet_directory_uri() . '/js/bootstrap.js', null, false, true);
	
	/**override css - enqueue styles**/
	wp_enqueue_script( 'bootstrap-js', get_stylesheet_directory_uri() . '/js/bootstrap.js', null, false, true);

}
add_action( 'wp_enqueue_scripts', 'register_child_scripts', 5);

/*************
** HOOKS
*************/

//remove menu navigation for woocommerce
function remove_wc_menu(){
	remove_action( 'woocommerce_account_navigation','woocommerce_account_navigation' );
}
add_action('remove_wc_menu','remove_wc_menu');
do_action( 'remove_wc_menu' );


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