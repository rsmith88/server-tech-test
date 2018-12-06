class Data {
  constructor() {
    this.data = {}
  }

  write(key, value) {
    this.data[key] = value
  }

  read(key) {
    return this.data[key]
  }

  set(params) {
    let key = Object.keys(params)[0]
    let value = Object.values(params)[0]

    this.write(key, value)
    return `${key}: ${value}`
  }

  get(params) {
    let key = Object.values(params)[0]
    return this.read(key)
  }
}

module.exports = { Data: Data }
