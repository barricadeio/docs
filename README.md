# Barricade Docs

New version of [docs.barricade.io](https://docs.barricade.io), built as a static site with [Hugo](http://gohugo.io/).

![https://cloud.githubusercontent.com/assets/686194/12189426/550f84e4-b572-11e5-821a-3b4d517b1642.png](https://cloud.githubusercontent.com/assets/686194/12189426/550f84e4-b572-11e5-821a-3b4d517b1642.png)

--  

New content is added by adding Markdown files to the `/content` subdirectories.  
New images and other media should be located in `themes/barricade/static/src`.

--  

For local development, clone this repo and run

```
hugo server
```

In a second window, run `gulp watch` to compile any new scss/js changes.
