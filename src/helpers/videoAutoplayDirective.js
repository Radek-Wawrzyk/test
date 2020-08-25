import Vue from 'vue';

class VideoAutoplay {
  constructor (el, binding) {
    this.el = el;
    this.binding = binding;
  }

  get config () {
    return {
      threshold: 1,
      rootMargin: '0px 0px -15% 0px'
    }
  }

  setAutoplayOnElementIntersect () {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.binding.value) {
          entry.target.play()
          entry.target.dispatchEvent(new Event('videoPlayed'))
          this.toggleBindingValue()
        }
      })
    }, this.config)

    io.observe(this.el)
  }

  toggleBindingValue () {
    this.binding.value = true
  }

  init () {
    this.setAutoplayOnElementIntersect()
  }
}

export const videoAutoplay = {
  inserted (el, binding) {
    new VideoAutoplay(el, binding).init()
  }
}

Vue.directive('video-autoplay', videoAutoplay)