import moment from "moment"

export function OnlyNumbers(value) {
  return value.replace(/[^0-9]/gi, '')
}

export function FormatDateBrToIso(value) {
  return moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD')
}

export function FormatIsoUsaToBr(value) {
  return moment(value, 'YYYY-MM-DD').format('DD/MM/YYYY')
}