$(function() {
  // 1.Use an element selector to find all h1 elements.
  $('h1').addClass('highlight');
  $('h1').removeClass('highlight');
  

  // 2.Use an ID selector to find the first h1 element.
  $('#site_title').addClass('highlight');
  $('#site_title').removeClass('highlight');
  
  // 3. Use a descendant selector to find all the list items in the article element.
  $('article li').addClass('highlight');
  $('article li').removeClass('highlight');
  
  // 4. Find the third list item from the article element.
  $('article li:nth-of-type(3)').addClass('highlight');
  $('article li:nth-of-type(3)').removeClass('highlight');
  // $('article li').eq(2).addClass('highlight');

  // 5. Find the table element, then find all the odd-numbered table rows in that element.
  $('table tr:odd').addClass('highlight');
  $('table tr:odd').removeClass('highlight');
  
  // 6. Find the list item that contains the text ac ante, then locate the parent li element.
  $("article li li:contains('ac ante')").parents('li').addClass('highlight');
  $("article li li:contains('ac ante')").parents('li').removeClass('highlight');
  
  // 7. Find the list item that contains the text ac ante, then find the next element.
  $("article li li:contains('ac ante')").next().addClass('highlight');
  $("article li li:contains('ac ante')").next().removeClass('highlight');
  
  // 8. Find all the table cells in the table, then find the last cell from the collection.
  $('td:last').addClass('highlight');
  $('td:last').removeClass('highlight');  
  // $('table td').last().addClass('highlight');
  // $('table td').eq(-1);

  // 9. Find all the table cells that do not have a class of "protected".
  $("table td:not('.protected')").addClass('highlight');
  $("table td:not('.protected')").removeClass('highlight');
  
  // 10. Find all the anchor elements that have an href that begins with #.
  $("a[href^='#']").addClass('highlight');
  $("a[href^='#']").removeClass('highlight');
  
  // 11. Find all elements that have a class name that contains "block".
  $("[class*='block']").addClass('highlight');
  $("[class*='block']").removeClass('highlight');
  
});