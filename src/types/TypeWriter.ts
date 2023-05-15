type QueueItem = () => Promise<void>

export default class Typewriter {
  #queue: QueueItem[] = []
  #element: HTMLElement
  #loop: boolean
  #typingSpeed: number

  constructor(
    parent: HTMLElement,
    { loop = false, typingSpeed = 50 } = {}
  ) {
    this.#element = document.createElement("div")
    parent.append(this.#element)
    this.#loop = loop
    this.#typingSpeed = typingSpeed
  }

  typeString(string: string) {
    this.#addToQueue(resolve => {
      let i = 0
      const interval = setInterval(() => {
        this.#element.append(string[i])
        i++
        if (i >= string.length) {
          clearInterval(interval)
          resolve()
        }
      }, this.#typingSpeed)
    })

    return this
  }

  pauseFor(duration: number) {
    this.#addToQueue(resolve => {
      setTimeout(resolve, duration)
    })

    return this
  }

  async start() {
    let cb = this.#queue.shift()
    while (cb != null) {
      await cb()
      if (this.#loop) this.#queue.push(cb)
      cb = this.#queue.shift()
    }

    return this
  }

  #addToQueue(cb: (resolve: () => void) => void) {
    this.#queue.push(() => new Promise(cb))
  }
}