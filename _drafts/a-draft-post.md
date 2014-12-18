---
layout: post
title:  "This is just a draft post"
headline:  "Testing things out."
date:   2014-12-14 21:18:34
categories: test draft
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, maxime. Quo repudiandae dolor totam accusamus officiis molestias eos iure, pariatur, labore distinctio repellat, voluptates eveniet nam similique velit ratione numquam.

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}