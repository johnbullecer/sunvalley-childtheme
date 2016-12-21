<?php
/**
 * Order tracking form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/order/form-tracking.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post;

?>

<form action="<?php echo esc_url( get_permalink( $post->ID ) ); ?>" method="post" class="track_order">

	<p class="cb-min-margin-top"><?php _e( 'To track your order, please enter your Booking ID in the box below and press the "Track" button.<br><br>This was given to you on your receipt and in the confirmation email you received.', 'woocommerce' ); ?></p>

	<p class="form-row"><label for="orderid"><?php _e( 'Booking ID', 'woocommerce' ); ?></label> <input class="input-text" type="text" name="orderid" id="orderid" placeholder="<?php esc_attr_e( 'Enter only the booking number', 'woocommerce' ); ?>" /></p>
	<p class="form-row"><label for="order_email"><?php _e( 'Billing Email', 'woocommerce' ); ?></label> <input class="input-text" type="text" name="order_email" id="order_email" placeholder="<?php esc_attr_e( 'Email you used for this booking.', 'woocommerce' ); ?>" /></p>
	<div class="clear"></div>
	<p class="cb-min-margin-bottom"><input type="submit" class="btn-lg btn btn-primary" name="track" value="<?php esc_attr_e( 'Track Now', 'woocommerce' ); ?>" /></p>
	<?php wp_nonce_field( 'woocommerce-order_tracking' ); ?>

</form>
