# simple-htmlTable-generator
A simple way to generate a html table using javascript object notation (just for fun)

EXAMPLE
We are going to create a table 
Firstly , we shall define our object named data
    const data = [
        {
            id : 1 ,
            name : "david" ,
            class : "Lic-i" ,
            age : 20 
        } ,
        {
            id : 2 ,
            name : "bart" ,
            class : "Lic-t" ,
            age : 21 
        } ,
        {
            id : 3 ,
            name : "sophie" ,
            class : "Lic-t" ,
            age : 20 
        } ,
        {
            id : 4,
            name : "anah" ,
            class : "Lic-i" ,
            age : 21
        } ,
    ]
  
  After that we will call the function ninjavidTable which will take an object as input (parameter)
  
  ninjavidTable({
    className :  "tableContainer", // the class attribute in your html 
    titles : ["id" , "name" , "class" , "age"] , // table titles
    data : data  // table datas we defined earlier.
  })
  
Result 

![simple-table-generator](https://user-images.githubusercontent.com/94840730/184037359-e45ad8fe-c77d-4e1d-bac2-758b76b657ad.png)
