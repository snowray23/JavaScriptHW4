 // Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.
  function changeColor(boxId) {
    const box = document.getElementById(boxId);
    const colors = {
      'box1': 'pink',
      'box2': 'purple',
      'box3': 'white',
      'box4': 'blue',
      'box5': 'navy'
    }; 
    box.style.backgroundColor = colors[boxId];
  }