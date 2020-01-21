<?php
// Load scripts
function load_vue_scripts() {
	wp_enqueue_script(
		'vuejs-script',
		get_stylesheet_directory_uri() . '/assets/js/bundle.js',
		array( 'jquery' ),
		rand(),
		true
	);

	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css',
		get_stylesheet_directory_uri() . '/assets/css/styles.css',
		null,
		rand()
	);
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );