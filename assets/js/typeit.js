        new TypeIt('#printName', {
         speed: 80,
         waitUntilVisible: false,
         deleteSpeed:80,
         lifeLike: true
})
.type('It\'s <strong>Alexious</strong> here.')
.pause(1000)
.break()
.type('I\'m a Java Developer.')
.pause(1000)
.delete(15)
        
.type('Graphic Designer.')
.pause(1000)
.delete(17)
.type('Photography Lover.')
.pause(1000)
.go();

new TypeIt('#directIG', {
    speed:100,
    waitUntilVisible:true,
    lifeLike:true,
  strings: "Like What You See?"
}).go();


