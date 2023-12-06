$(document).ready(() => {
  const container = $(".container");

  container.on("click", ".heading-wrapper h2, .accordion", function () {
    const thisArticle = $(this).closest(".article-wrapper");
    const paragraph = thisArticle.find("p");
    const accordion = thisArticle.find(".accordion");

    //hide every paragraph, except current
    container.find(".article-wrapper p").not(paragraph).slideUp(500);

    //finds every accordion button, except current, removes class minus and adds class plus
    container.find(".accordion").not(accordion).removeClass("minus").addClass("plus");

    accordion.toggleClass("minus plus");
    paragraph.slideToggle(500);
  });
});

