
function AccurateInterval(fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date.getTime() + time
    timeout = null
    wrapper = () => {
        nextAt += time
        timeout = setTimeout(wrapper, nextAt - new Date.getTime())
        return fn
    } 
    cancel = () => {
        return clearTimeout(timeout)
    }
    timeout = setTimeout(wrapper, nextAt - new Date.getTime())
  return {cancel: cancel}
}

export default AccurateInterval