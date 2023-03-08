//  Intitializing the Hexadecimal characters
const hex_characters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// Create a function to extract these characters. It is intended to help pich colors
const getCharacter = (index) =>{
    console.log(hex_characters[index]);
    return hex_characters[index]
}

//  the character is undefined
console.log(getCharacter());

const generateColor = () => {
    let hex_color = '#'
    for(let position = 0; position < 6; position ++){
        hex_color = hex_color + getCharacter(position)
    }
    return hex_color
}

console.log(generateColor());

// Improve to get a random color code
// For example, if Math.random() generates the value 0.435, multiplying it by 16 would result in 6.96. 
// Applying Math.floor() to this result would then round it down to 6, which is a random integer within the range of 0 to 15.

//  this will genarate random numbers between 0-16
const random_num = Math.floor(Math.random() * hex_characters.length)
console.log(random_num);

// Now let us get a random position
const generate_random_color = () => {
    let new_color = '#'

    for(let color_index = 0; color_index < 6; color_index ++){

        const random_position = Math.floor(Math.random() * hex_characters.length)

        // This will concatenate the new color with the generated color index
        new_color = new_color + getCharacter(random_position)


    }
    return new_color
}

console.log(generate_random_color());

 const color_button = document.getElementById('color-btn')
 const page_background = document.getElementById('bg-body')

 color_button.addEventListener('click', (e) =>{

    // This will store the generated color in the new variable. Reason being the function @generate_random_color() returns the new generated color value
    const change_color = generate_random_color()

    document.body.style.backgroundColor = change_color
    page_background.innerHTML = 'Color Code: ' + change_color
    page_background.children
 })