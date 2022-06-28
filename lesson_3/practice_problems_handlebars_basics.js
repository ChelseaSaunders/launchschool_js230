Handlebars.registerPartial('tag', $('#tag').html());

let posts = [ {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed<br>ut<br><strong>perspiciatis</strong><br>unde<br>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['tag1', 'tag2', 'tag3'],
}, {
  title: 'second blog',
  published: 'June 28, 2022',
  body: 'this is my second blog',
}];

let postTemplate = Handlebars.compile($('#post').html());
$('body').append(postTemplate({ posts: posts }));