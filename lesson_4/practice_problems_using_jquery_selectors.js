// To work these practice problems, open this HTML file
// (https://d3jtzah944tvom.cloudfront.net/jquery_selectors/index.html) in Google
// Chrome or your favorite browser, view its source, and then use the console
// pane of the browser Developer Tools to enter the requested code. Once you
// have selected the elements, you can add a "highlight" class to them with
// .addClass('highlight') to visually change the page so you can verify your
// results. Refresh the page to clear the highlights.

// If you need to check the class or id of a particular element, you can right
// click on that element in the browser window and select Inspect Element from
// the menu.

// Some of the jQuery methods that you need to use will have been covered in
// previous assignment. For others, you may need to research the documentation.
// If you get stuck, feel free to check the hints.

// Use an element selector to find all h1 elements.
$('h1');

// Use an ID selector to find the first h1 element.
$('#site_title');

// Use a descendant selector to find all the list items in the article element.
$('article li');

// Find the third list item from the article element.
$('article').find('li')[2];
// LS SOLUTION:
$('article li').eq(2);

// Find the table element, then find all the odd-numbered table rows in that
// element.
$('table').find('tr:odd');

// Find the list item that contains the text ac ante, then locate the parent li
// element.
$("li li:contains('ac ante')").parents('li');

// Find the list item that contains the text ac ante, then find and return the
// next element.
$("li li:contains('ac ante')").next();

// Find all the table cells in the table, then find the last cell from the
// collection.
$('table td').last();

// Find all the table cells that do not have a class of "protected".
$("table td:not('.protected')");

// Find all the anchor elements that have an href value that begins with #.
$('a[href^=#]');

// Find all elements that have a class name that contains "block".
$('[class*=block]');