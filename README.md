# Docker Drupal

[![Build Status](https://travis-ci.org/kporras07/docker-drupal.svg?branch=master)](https://travis-ci.org/kporras07/docker-drupal)

Docker setup to run Drupal in docker.

## Setup Drupal

Place Drupal under web folder.

Set right permissions:

```
chmod o+w web/sites/default/files/
```

## Build Environment

To build this environment you need recent docker compose and docker versions.
After placing Drupal in the right folder, you should run `docker-compose up -d` or `ahoy up` and voilá! You can access your Drupal installation at the url provided by `ahoy docker url`

## Installed Stuff

### Nginx

Nginx is running in port 80. Use `ahoy docker url` to get the url.

### PHP-FPM

PHP is running in a separate container using fpm in port 9000 (not accessible from host).

### Mariadb

Credentials are in environment variables in docker-compose.yml.

### Solr

Please be patient because it takes around 3-5 minutes to start when you create the containers.

Core is created as "collection1". Solr address is "solr". Path is "/solr".

### Cli

This container have some cli utilities to manage your drupal site. See https://hub.docker.com/r/kporras07/docker-drupal-cli/ for more info.

In order to access the cli, you should run `ahoy bash`. Now, you can run commands like drush, ahoy, composer, node, grunt, python, etc inside the container.

## Ngrok

This is used to share your local environment over the internet. In order to do this, you should run `ahoy docker share-url`. This command will give you an url that you can access in your browser and get the share urls for http and https.

## Varnish

It's a reverse proxy usually used in production. It's bundled here for situations where you need to test with the varnish cache. In order to access the site through varnish, run `ahoy docker varnish-url` and open that url in your browser.


Have fun!

## Ahoy commands

Some helpful commands are included using useful ahoy cli utility. In order to use them, you must install ahoy (https://github.com/ahoy-cli/ahoy) and then `ahoy help`
