/* @flow */

import { mergeOptions } from '../util/index'

import { GlobalAPI } from 'types/global-api'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    Vue.options = mergeOptions(Vue.options, mixin)
  }
}
