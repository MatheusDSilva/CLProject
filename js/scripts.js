function change() {
  let results = Array.from(document.querySelectorAll('.result > div'));
// Hides all results
  results.forEach(function(result) {
    result.style.display = 'none';
  });
// Filters results to only those that meet requirements
  Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
    const attrib = input.getAttribute('rel');
    results = results.filter(function(result) {
      return result.classList.contains(attrib);
    });
  });
// Show filtered results
  results.forEach(function(result) {
    result.style.display = 'block';
  });
}