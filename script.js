var progressBar = {
  Bar: $('#progress-bar'),
  Reset: function () {
    if (this.Bar) {
      this.Bar.find('li').removeClass('active')
    }
  },
  Next: function () {
    $('#progress-bar li:not(.active):first').addClass('active')
  },
  Back: function () {
    $('#progress-bar li.active:last').removeClass('active')
  },
}
let i = 0
$('#Next').on('click', function () {
  if (i != 3) {
    i++
  } else {
    i = 0
    progressBar.Reset()
  }
  progressBar.Next()
})
$('#Back').on('click', function () {
  progressBar.Back()
})
