async function loadPage(el) {
  try {
    const href = el.getAttrbiute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('Error 404!');

    const html = await response.text();
    loadResult(html);
  } catch (e) {
    console.log(e);
  }
}

function loadResult(response) {
  const result = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
