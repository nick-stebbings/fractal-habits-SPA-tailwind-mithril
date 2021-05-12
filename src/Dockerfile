FROM phusion/passenger-ruby25:1.0.14

ENV HOME /root

CMD ["/sbin/my_init"]

RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD api/config/vhost.conf /etc/nginx/sites-enabled/app.conf

RUN mkdir /home/app/api

WORKDIR /tmp
COPY api/Gemfile /tmp/
RUN bundle install

COPY api /home/app/api
RUN chown -R app:app /home/app/api

EXPOSE 4567

# Tell Docker that when we run "docker run", we want it to
# run the following command:
# $ bundle exec rackup --host 0.0.0.0 -p 4567.
WORKDIR /home/app/api
CMD ["rake", "db:migrate"]
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "4567"]

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*