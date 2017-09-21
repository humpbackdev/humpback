FROM php:7-fpm-alpine
RUN docker-php-source extract \
    && apk --no-cache --update add \
       libxml2-dev \
       libpng-dev \
       libjpeg-turbo-dev \
       freetype-dev \
    && rm -rf /tmp/* \
    && rm -rf /var/cache/apk/* \
    && docker-php-ext-configure json \
    && docker-php-ext-configure session \
    && docker-php-ext-configure ctype \
    && docker-php-ext-configure tokenizer \
    && docker-php-ext-configure simplexml \
    && docker-php-ext-configure dom \
    && docker-php-ext-configure mbstring \
    && docker-php-ext-configure zip \
    && docker-php-ext-configure iconv \
    && docker-php-ext-configure xml \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-source delete
RUN docker-php-ext-install json \
    session \
    ctype \
    tokenizer \
    simplexml \
    dom \
    mbstring \
    zip \
    iconv \
    xml \
    gd
