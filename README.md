# Docker Drupal

Docker setup to run Drupal in docker.

## Setup Drupal

Place Drupal under docroot folder.

Set right permissions:

```
chmod o+w docroot/sites/default/files/
```

## Build Environment

To build this environment you need recent docker composer and docker versions.
After placing Drupal in the right folder, you should run `docker-compose up -d` and voilá! You can access your Grav installation at `http://localhost:8080`

## Installed Stuff

### Nginx

Nginx is running in port 80. Accessible from http://localhost:8080.

### PHP-FPM

PHP is running in a separate container using fpm in port 9000 (not accessible from host).

### Mariadb

Credentials are in environment variables in docker-compose.yml.

### Solr

Please be patient because it takes around 3-5 minutes to start when you create the containers.

Core is created as "collection1". Solr address is "solr". Path is "/solr".

Have fun!
