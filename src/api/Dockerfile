FROM phusion/passenger-ruby25:1.0.14

ENV HOME /root

CMD ["/sbin/my_init"]

WORKDIR /tmp
COPY ./Gemfile /tmp/
RUN bundle install

COPY . /home/app
RUN chown -R app:app /home/app

EXPOSE 4567

WORKDIR /home/app
CMD ["RACK_ENV=production", "rake", "db:migrate"]
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "4567"]

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*