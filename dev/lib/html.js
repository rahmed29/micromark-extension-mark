/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

/**
 * Create an HTML extension for `micromark` to support GFM strikethrough when
 * serializing to HTML.
 *
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions`, to
 *   support GFM strikethrough when serializing to HTML.
 */
export function markHTML() {
  return {
    enter: {
      marked() {
        this.tag('<mark>')
      }
    },
    exit: {
      marked() {
        this.tag('</mark>')
      }
    }
  }
}
