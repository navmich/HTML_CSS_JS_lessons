var roster = [];

var using = prompt("would you like to use this app? [y/n]")

if (using === "y") {
  var quit = false
  while(!quit) {
    var action = prompt("select action: [add/remove/display/quit]")
    if (action === "quit") {
      quit = true;
    } else if (action === "add") {
      var word = prompt("enter roster: ")
      roster.push(word)
    } else if (action === "remove") {
      roster.pop()
    } else if (action === "display") {
      console.log(roster)
    } else {
      alert("I don't know chioce like that...")
    }
  }

} else {
  console.log("To reuse this app press 'F5'")
}