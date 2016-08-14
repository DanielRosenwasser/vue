/* @flow */

import { addProp } from 'compiler/helpers'

import { ASTElement, ASTDirective } from 'types/compiler'

export default function html (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    addProp(el, 'innerHTML', `_s(${dir.value})`)
  }
}
