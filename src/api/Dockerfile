FROM  phusion/passenger-ruby25:1.0.14
ENV HOME /root
CMD ["/sbin/my_init"]
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD docker/vhost.conf /etc/nginx/sites-enabled/app.conf