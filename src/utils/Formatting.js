import moment from "moment"

export function OnlyNumbers(value) {
  return value.replace(/[^0-9]/gi, '')
}
