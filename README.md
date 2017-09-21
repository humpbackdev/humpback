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

Have fun!
