FROM ruby:2.3.0-alpine

RUN apk update && apk upgrade
RUN apk add build-base
RUN apk add libxslt-dev libxml2-dev
RUN apk add nodejs

RUN gem install --no-ri --no-rdoc bundler io-console
RUN gem install nokogiri -- --use-system-libraries

ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock
RUN cd /app; ls -ltr; gem list; bundle install

ADD font-selection.json /app/font-selection.json
ADD config.rb /app/config.rb
ADD source /app/source

EXPOSE 4567
WORKDIR /app

CMD ["bundle", "exec", "middleman", "server"]
