import file from '../EmojiDB/test.txt'

export const readContent = (callFunction) => {
  fetch(file)
    .then(res => res.text())
    .then(fileContentWithNewLine => fileContentWithNewLine.split('\n'))
    .then(fileContentArray => fileContentArray.map(fileContent => fileContent.split('\t')))
    .then(data => data.map((emoji) => {
      return {
        name: String(emoji[1]).toLowerCase(),
        symbol: emoji[0],
        hex: emoji[2]
      }
    }))
    .then(data => callFunction(data))
    .catch(err => console.log('[error reading file]', err.message))
}
