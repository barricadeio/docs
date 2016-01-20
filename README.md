# Barricade Docs

New version of [docs.barricade.io](https://docs.barricade.io), built as a static site with [Hugo](http://gohugo.io/).

![https://cloud.githubusercontent.com/assets/686194/12189426/550f84e4-b572-11e5-821a-3b4d517b1642.png](https://cloud.githubusercontent.com/assets/686194/12189426/550f84e4-b572-11e5-821a-3b4d517b1642.png)

--  

New content is added by adding Markdown files to the `/content` subdirectories.  
New images and other media should be located in `themes/barricade/static/src`.

--  

# Local Development

* Run `hugo server --watch` to generate the site
* In a different window, run `gulp watch` to compile assets
* The site will be available at [localhost:1313](http://localhost:1313/)

# Deploying

Run `hugo` (not hugo server) to update the BaseUrl with the live url.

Then run `bash deploy.sh` to run the deploy script, which will take care of running Gulp and the required Git magic. The site will be pushed to the gh-pages branch.