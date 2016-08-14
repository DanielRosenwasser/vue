/* @flow */

import { addProp } from 'compiler/helpers'

import { ASTElement, ASTDirective } from 'types/compiler'

export default function text (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    addProp(el, 'textContent', `_s(${dir.value})`)
  }
}
