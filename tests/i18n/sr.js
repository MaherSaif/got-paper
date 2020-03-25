/* eslint-disable */

import { srChoiceIndex } from '@/plugins/i18n/sr'

const logic = [
  // few
  'Kupi 0 rolni', // 0
  'Kupi 1 rolnu', // 1
  'Kupi [2-4] rolne', // 2 - 4
  'Kupi [5-10] rolni', // 5 - 10

  // teens
  'Kupi [*11-*20] rolni', // 11, 15, 111, 100015

  // larger numbers, but few
  'Kupi [*1] rolnu', // 1, 101, 10000001
  'Kupi [*2-*4] rolne', // 2, 3, 4, 100003, 10000004

  // other
  'Kupi {n} rolni', // whatever is left
]

const choices = '{n} rolni | {n} rolnu | {n} rolne'.split('|')

function log (from, to) {
  for (let i = from; i < to; i++) {
    const choice = srChoiceIndex(i, 3)
    const result = choices[choice]
    const message = result
      ? result.trim().replace('{n}', String(i))
      : `${i} ---------`
    results.push(message)
  }
  results.push('...')
}

const results = []

log(1000, 1050)

console.log(results)
