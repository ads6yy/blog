<?php

/**
 * @file
 * The PHP page that serves all page requests on a Drupal installation.
 *
 * All Drupal code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt files in the "core" directory.
 */

use Drupal\Core\DrupalKernel;

// The site is served from the web/ subdirectory via a rewrite in the docroot's
// root .htaccess, so SCRIPT_NAME is "/web/index.php" while the public path is
// "/". Strip the leading "/web" before the kernel builds the Request, otherwise
// Drupal computes a base path of "/web" and treats every redirect (e.g. after
// login) as external. See DrupalKernel::initializeRequestGlobals().
if (isset($_SERVER['SCRIPT_NAME']) && str_starts_with($_SERVER['SCRIPT_NAME'], '/web/')) {
  $_SERVER['SCRIPT_NAME'] = substr($_SERVER['SCRIPT_NAME'], 4);
  $_SERVER['PHP_SELF'] = $_SERVER['SCRIPT_NAME'];
}

require_once 'autoload_runtime.php';

return static function () {
  return new DrupalKernel('prod', require 'autoload.php');
};
