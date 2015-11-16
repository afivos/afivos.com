---
layout:     post
category:   blog

title:      Updating my site with a simple command
headline:   Using Amazon S3 with S3cmd
date:       2015-06-11 14:12:35

---
When I found out that GitHub Pages didn't support the Jekyll plugin I wanted to use, I had to host my site elsewhere.

Initially, that took me back to my previous provider which meant going back to FTP—one of the things I was trying to move away from in the first place. Then, I decided to move my site to Amazon S3 since I only wanted to pay for the storage I actually use. It also guarantees uptime of 99.9% so it seemed like the way to go.

Finally, I started using [S3cmd](http://s3tools.org/s3cmd), a command line S3 client which can sync files to and from S3 with a simple command:

<pre>s3cmd sync _site s3://afivos.com</pre>

Now, all I need to do when updating my site is:

1. Commit the changes to my [GitHub repo](http://github.com/afivos/afivos.com),
2. Sync the changes to my S3 bucket.
