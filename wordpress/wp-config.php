<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mmt_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.]b$<qBp3.-n3u(PI6NGwQgWxpP*z~FI3(S_U%>qXSc&C/wGD9(D#M+i3n1 (Mup' );
define( 'SECURE_AUTH_KEY',  '!<x7/5YA4l(C5h:1gm|lTqijmL;F$vgKaKXh19?U)nLh,Z8/L_}F8HFvga8S*+x,' );
define( 'LOGGED_IN_KEY',    '&`w{D8vY6VvV*oN3g;|n?U$Cnl*Pn6dACyu1(E5cMxb-$*g7v_vb42a|YNcj7jyv' );
define( 'NONCE_KEY',        'Z_tv@]rb cFe[5M4R41KmP9#=Pn/Tr1X;X:T@2_q=hfP0xI>i{{q6j;*TX|_|s A' );
define( 'AUTH_SALT',        'F80H/wi:OQfT2Q?pVVVVvfA-{pmm1?V${9e%$+C8M0A?x9&aeZ.0A/<v8Z$<T)Fr' );
define( 'SECURE_AUTH_SALT', ']Cm5Y?|l8nh=6>$z104u<,Yx[Pnur[gMNSf>yp&}~#ezX<DI)S(cvLSy,+]J(+jA' );
define( 'LOGGED_IN_SALT',   'QLai]z`d=h.?>}RIKU|VrffF 9xxA:7Tk4:RdizLK@/-jg?M82QR(v/YmMQA|!e$' );
define( 'NONCE_SALT',       'Y+g9de[n$@qB84.thu!6l$>Ec/BhOp4(ol3 m_X)dY.IE83}F;3/^!Uk4.s(n>Fh' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
