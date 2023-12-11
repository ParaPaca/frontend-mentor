$(document).ready(() => {
  $.ajax({
    url: "data.json",
    method: "GET",
    dataType: "json",
    success: (data) => {
      const source = $("#result-template").html();
      const template = Handlebars.compile(source);
      const context = {
        results: data,
      };
      const html = template(context);
      $("#result-container").append(html);
    },
    error: (error) => {
      console.error("Error:", error.statusText);
    },
  });
});
