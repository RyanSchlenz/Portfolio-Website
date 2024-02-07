function createProjectSection(title, githubLink, description, imageSrc, alternate) {
  const container = document.createElement('div');
  container.classList.add('container');

  const row = document.createElement('div');
  row.classList.add('row');

  const col1 = document.createElement('div');
  const col2 = document.createElement('div');
  col1.classList.add('col-lg-5', 'col-sm-6');
  col2.classList.add('col-lg-5', 'col-lg-offset-2', 'col-sm-6');

  const hr = document.createElement('hr');
  hr.classList.add('section-heading-spacer');

  const h2 = document.createElement('h2');
  h2.classList.add('section-heading');
  h2.textContent = title;

  const p1 = document.createElement('p');
  const a = document.createElement('a');
  a.href = githubLink;
  a.textContent = 'GitHub Repo';
  p1.appendChild(a);
  p1.style.display = 'inline';

  const h5 = document.createElement('h5');
  h5.classList.add('section-sub-heading');
  h5.textContent = 'Python';

  const p2 = document.createElement('p');
  p2.classList.add('lead');
  p2.textContent = description;

  col1.appendChild(hr);
  col1.appendChild(document.createElement('div')); // clearfix
  col1.appendChild(h2);
  col1.appendChild(p1);
  col1.appendChild(h5);
  col1.appendChild(p2);

  const img = document.createElement('img');
  img.classList.add('img-responsive', 'project-img-grey');
  img.style.marginTop = '5%';
  img.src = imageSrc;
  img.alt = title;

  if (alternate) {
    col1.classList.add('order-lg-2');
    col2.classList.add('order-lg-1');
    col2.appendChild(img);
  } else {
    col2.appendChild(img);
  }

  row.appendChild(col1);
  row.appendChild(col2);

  container.appendChild(row);

  const section = document.createElement('div');
  section.classList.add('content-section-a');
  section.appendChild(container);

  return section;
}
