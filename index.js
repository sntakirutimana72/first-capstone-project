function populateSpeakers() {
  if (featuredSpeakers.length !== 0) {
    let section = $create('section');
    section.id = 'speakers';
    section.classList.add('d-flex', 'flex-column', 'align-items-center', 'bg-white');

    $select('#programs').after(section);

    let heading = $create('h2');
    heading.className = 'h-secondary';
    $html(heading, 'Featured Speakers<br><span></span>');

    const speakersContainer = $create('div');
    speakersContainer.className = 'speakers-container';

    let more = $create('button');
    $html(more, 'MORE <i class="bi bi-chevron-down"></i>');
    more.classList.add('speakers-more-btn', 'custom-btn');

    section.append(heading, speakersContainer, more);

    programs = null;
    section = null;
    heading = null;
    more = null;

    featuredSpeakers.forEach((speaker, j) => {
      const card = $create('div');
      card.className = 'speakers-card';

      if (j > 1) {
        $class(card, 'toggle');
      }

      const cardImageWrap = $create('div');
      const cardImage = $create('img');
      cardImageWrap.className = 'speakers-img';
      cardImage.alt = 'Speaker';
      cardImage.src = speaker.image;
      cardImageWrap.appendChild(cardImage);

      const cardBody = $create('div');
      cardBody.className = 'speakers-card-body';

      const cardHead = $create('h3');
      cardHead.className = 'h-third';
      $html(cardHead, speaker.description);

      const cardPara = $create('p');
      cardPara.className = 'p-forth';
      $text(cardPara, speaker.comment);

      cardBody.append(cardHead, cardPara);
      card.append(cardImageWrap, cardBody);
      speakersContainer.appendChild(card);
    });
  }
}

function expandColapseSpeakers($this) {
  Array.from($select('.speakers-container').children)
    .slice(2).forEach((child) => $class(child, 'toggle'));

  const $icon = $this.querySelector('i');
  $class($icon, 'bi-chevron-down');
  $class($icon, 'bi-chevron-up');
}

window.addEventListener('DOMContentLoaded', () => {
  populateSpeakers();

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('speakers-more-btn')) {
      expandColapseSpeakers(event.target);
    }
  });
});
