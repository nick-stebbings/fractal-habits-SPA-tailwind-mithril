FROM phusion/passenger-ruby25:1.0.14

ENV HOME /root

CMD ["/sbin/my_init"]

RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD api/config/vhost.conf /etc/nginx/sites-enabled/app.conf

RUN mkdir /home/app/api

WORKDIR /tmp
COPY api/Gemfile /tmp/
# COPY api/Gemfile.lock /tmp/
RUN bundle install

COPY api /home/app/api
RUN chown -R app:app /home/app/api

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*