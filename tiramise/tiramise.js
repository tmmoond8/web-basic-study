function Tiramise(handler) {
  this.status = 'pending';
  this.value = null;
  var that = this;
  function resolve(data) {
    that.value = data;
    setStatus('resolved');
  }
  function reject(reason) {
    that.value = reason;
    setStatus('rejected');
  }

  function setStatus(status) {
    that.status = status;
    if (status === 'resolved' && that.onFulfilled) {
      that.onFulfilled(that.value);
    }
    if (status === 'rejected' && that.onRejected) {
      that.onRejected(that.value);
    }
  }

  handler(resolve, reject);
}

Tiramise.resolve = function(data) {
  var tiramise = new Tiramise(function(resolve, reject) {
    resolve(data);
  })
  return tiramise;
}

Tiramise.reject = function(reason) {
  var tiramise = new Tiramise(function(resolve, reject) {
    reject(reason);
  })
  return tiramise;
}

Tiramise.prototype.then = function(onFulfilled, onRejected) {
  var tiramise = Tiramise.resolve();
  this.onFulfilled = onFulfilled;
  this.onRejected = onFulfilled;
  return tiramise;
}
