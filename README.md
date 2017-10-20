# Humpback

[![Build Status](https://travis-ci.org/humpbackdev/humpback.svg?branch=master)](https://travis-ci.org/humpbackdev/humpback)

Docker setup to run Drupal in docker.

## Setup Drupal

Place Drupal under web folder.

Set right permissions:

```
chmod o+w web/sites/default/files/
```

## Create Environment

To create this environment you need recent docker compose and docker versions and [ahoy](https://github.com/ahoy-cli/ahoy)
After placing Drupal in the right folder, you should run `ahoy up` and voilá! You can access your Drupal installation at the url provided by `ahoy docker url`

## Installed Stuff

### Nginx

Nginx is running in port 80. Use `ahoy docker url` to get the url.

### PHP-FPM

PHP is running in a separate container using fpm in port 9000 (not accessible from host).

### Mariadb

You can find credentials in environment variables in docker-compose.yml.

### Solr

Please be patient because it takes around 3-5 minutes to start when you create the containers.

Core is created as "collection1". Solr address is "solr". Path is "/solr".

### Cli

This container have some cli utilities to manage your drupal site. See https://hub.docker.com/r/kporras07/docker-drupal-cli/ for more info.

In order to access the cli, you should run `ahoy bash`. Now, you can run commands like drush, ahoy, composer, node, grunt, python, etc inside the container.

### Selenium

Set wd_host to 'http://browser:4444/wd/hub' in behat config. If you need vnc, you can connect to url given by `ahoy docker vnc-url` using 'secret' as password.

### Ngrok

This is used to share your local environment over the internet. In order to do this, you should run `ahoy docker share-url`. This command will give you an url that you can access in your browser and get the share urls for http and https.

### Varnish

It's a reverse proxy usually used in production. It's bundled here for situations where you need to test with the varnish cache. In order to access the site through varnish, run `ahoy docker varnish-url` and open that url in your browser.

### Mailhog

To see the the mailhog UI, run `ahoy docker mailhog-url` and access that url from the browser. Your new messages will appear there.

### Traefik

This is a proxy used to route request for given domain to nginx backend. To use it, you just need to have a .env file in the root of this folder with `VIRTUAL_HOST` variable set to any wanted domain. When you run `ahoy up` the magic will happen and you'll be able to open that domain in your browser and get your site. If you need more than one domain, set them in the same variable separated by comma.

## Contributing

Use the project, fork it, and submit PRs. We are responsive and will review them as soon as possible!

## Credits and Usage

Humpback is a trademark of Estudio Manatí S.A. You are free to use the logo to promote the Humpback product as long as you do not modify it in any way.

Drupal is a registered trademark of Dries Buytaert.

Docker and the Docker logo are trademarks or registered trademarks of Docker, Inc. in the United States and/or other countries. Docker, Inc. and other parties may also have trademark rights in other terms used herein.


Have fun working with Humpback!
