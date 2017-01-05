<?php
/**
 * @package WordPress
 * @subpackage Traveler
 * @since 1.0
 *
 * User booking history
 *
 * Created by ShineTheme
 *
 */
$class_user = new STUser_f();


?>
<div class="st-create">
    <h2><?php STUser_f::get_title_account_setting() ?></h2>
</div>
<?php echo STTemplate::message()?>
<?php
//added by Clyde to call woocommerce Orders table and remove default table
$current_url="//".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
woocommerce_account_orders($current_url);
?>