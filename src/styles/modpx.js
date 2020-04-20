#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const SCALE = 750 / 360

const fs = require('fs')
const fileContent = fs.readFileSync('var.less.px', 'utf8')

const result = fileContent.replace(/(\d+)(?=px)/g, (matchStr) => {
  return Number((Number(matchStr) * SCALE).toFixed(4)).toString()
})

fs.writeFileSync('var.less.px.moded', result)
