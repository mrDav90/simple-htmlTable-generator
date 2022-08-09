document.addEventListener("DOMContentLoaded" , ()=> {

    function ninjavidTable (object) {
        // table generator
        console.log("------------------------");
        console.log("Simple table generator");
        console.log("------------------------");

        // this , to return the maximum length of object for defining column count
        function getColumnCount() {
            let initValue = (Object.keys(data[0])).length ;
            for (let i = 1; i < data.length; i++) {
                if ((Object.keys(data[i])).length > initValue ) {
                    initValue = (Object.keys(data[i])).length ;
                }
            }
            return initValue;
        }

        // init variables
        let className = object.className;
        let titles = object.titles;
        let data = object.data ;
        let rowCount = data.length;
        let columnCount =  getColumnCount();            
        let table = document.createElement("table");
        let tr = null;
            
        // creation of table header
        tr = document.createElement("tr");
        tr.classList = "tr-header"
        for (let i = 0; i < columnCount; i++) {
            let th = document.createElement("th");
            let div = document.createElement("div");
            div.style.width = "100%"
            div.style.display = "flex"
            div.style.justifyContent = "start"
            div.style.alignItems = "center"
            
            div.textContent = titles[i];
            th.appendChild(div)
            tr.appendChild(th);
        }           
        table.appendChild(tr);

   
        // creation of table body
        for (let i = 0; i < rowCount; i++) {
            tr = document.createElement("tr");
            for (const [key , value] of Object.entries(data[i]) ) {
                //console.log(`${key}: ${value}`);
                td = document.createElement("td");
                td.textContent = value ? value : "not specified"   
                tr.appendChild(td);
            }              
            table.appendChild(tr);
        }
          
        // display Table
        document.querySelector(`.${className}`).appendChild(table);
      
    }


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

    ninjavidTable({
        className : "tableContainer",
        titles : ["id" , "name" , "class" , "age"] ,
        data : data 
    });
    
})