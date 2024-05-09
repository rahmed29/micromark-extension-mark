export {markHTML} from './lib/html.js'
export {mark, type Options} from './lib/syntax.js'

declare module 'micromark-util-types' {
  interface TokenTypeMap {
    strikethroughSequence: 'strikethroughSequence'
    strikethroughSequenceTemporary: 'strikethroughSequenceTemporary'
    strikethrough: 'strikethrough'
    strikethroughText: 'strikethroughText'
  }
}
