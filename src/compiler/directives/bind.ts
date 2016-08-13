/* @flow */

import { addHook } from '../helpers'

import { ASTElement, ASTDirective } from 'types/compiler'

export default function bind (el: ASTElement, dir: ASTDirective) {
  addHook(el, 'construct', `_b(n1,${dir.value}${
    dir.modifiers && dir.modifiers.prop ? ',true' : ''
  })`)
}
