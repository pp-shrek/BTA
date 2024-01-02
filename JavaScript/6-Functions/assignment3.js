const calcTriangleArea = (triangle) => {
    // const triangleArea = (triangle.width * triangle.length) / 2;
    // return triangleArea;
    return (triangle.width * triangle.length) / 2;
} // calcTriangleArea

const biggestArea = (number1, number2, number3) => {
    if (number1 >= number2 && number1 >= number3)  {        
        return "First triangle has biggest area!";
    } // if
    else if (number2 >= number3) {
       return "Second triangle has biggest area!";;
    } // else if
    else {
        return "Third triangle has biggest area!";;
    } // else
} // biggestArea

const firstTriangle = { width: 7.0, length: 3.5 };
const secondTriangle = { width: 4.3, length: 3.4 };
const thirdTriangle = { width: 5.5, length: 2.0 };

const firstTriangleArea = calcTriangleArea(firstTriangle);
const secondTriangleArea = calcTriangleArea(secondTriangle);
const thirdTriangleArea = calcTriangleArea(thirdTriangle);

console.log(`Area of first triangle: ${firstTriangleArea}`);
console.log(`Area of second triangle: ${secondTriangleArea}`);
console.log(`Area of third triangle: ${thirdTriangleArea}`);

console.log(`${biggestArea(firstTriangleArea,secondTriangleArea,thirdTriangleArea)}`);