<?php
/**
 * Created by PhpStorm.
 * User: Clyde
 * Date: 21/08/2015
 * Time: 9:45 SA
 */
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
//add_action( 'wp_enqueue_scripts', 'enqueue_child_styles');

function enqueue_parent_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/styles.css' );
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/custom.css' );
}
function enqueue_child_styles(){
//FIRST
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/styles.css' );
	//wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/css/custom.css' );

	//...custom queueing of .js and .css for Javascript plugins and such here

	//LAST - override css
	//wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/styles.css', array( 'parent-style' ) );
	//wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/custom.css', array( 'parent-style' ) );
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/styles.css');
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/custom.css');
}