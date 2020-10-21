const countries = ['Canada', 'Japan', 'America', 'Philipin', 'China', 'Russia', 'Spain', 'Iceland', 'Brazil'];

let output = '';

const gallery = document.querySelector('.gallery');

countries.forEach(function() {
  output += `\t<li>${countries.toLowerCase()}</li>\n`;
});

gallery.innerHTML = `<ul>\n${output}\n</ul>`;