/* @flow */

import { genClassForVnode } from 'web/util/index'

export default function renderClass (node: VNodeWithData): null | undefined | string {
  if (node.data.class || node.data.staticClass) {
    return ` class="${genClassForVnode(node)}"`
  }
}
