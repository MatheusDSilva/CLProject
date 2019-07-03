function change() {
  let results = Array.from(document.querySelectorAll('.result > div'));

  results.forEach(function(result) {
    result.style.display = 'none';
  });

  Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
    const attrib = input.getAttribute('rel');
    results = results.filter(function(result) {
      return result.classList.contains(attrib);
    });
  });

  results.forEach(function(result) {
    result.style.display = 'block';
  });
}
change();
