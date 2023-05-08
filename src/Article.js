import React from "react";

function Article(props) {
  const getMinutesToRead = (text) => {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(' ').length;
    const minutesToRead = Math.ceil(numberOfWords / wordsPerMinute);

    return minutesToRead;
  }

  const getEmoji = (minutesToRead) => {
    if (minutesToRead < 30) {
      const numberOfCups = Math.ceil(minutesToRead / 5);
      return '☕️'.repeat(numberOfCups) + ` ${minutesToRead} min read`;
    } else {
      const numberOfBoxes = Math.ceil(minutesToRead / 10);
      return '🍱'.repeat(numberOfBoxes) + ` ${minutesToRead} min read`;
    }
  }

  const minutesToRead = getMinutesToRead(props.preview);

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date ? props.date : "January 1, 1970"}</small>
      <p>{props.preview}</p>
      <div>{getEmoji(minutesToRead)}</div>
    </article>
  );
}

export default Article;
