let wheel = document.querySelector("#wheel"),
    spinBtn = document.querySelector(".spin-btn")
    text = document.querySelector(".text"),
    rotationValues =[
        {minVal : 0 ,maxVal:30,value:2},
        {minVal :31 ,maxVal:90 ,value:1},
        {minVal:91 , maxVal:150 , value:6},
        {minVal:151 , maxVal : 210,value:5},
        {minVal:211 , maxVal : 270,value:4},
        {minVal:271 , maxVal : 330 , value :3},
        {minVal:331 , maxVal : 360 , value :2}
    ],
    data = [16,16,16,16,16,16],
    backgroundColor = ["#8b35bc","#b163da","#8b35bc","#b163da","#8b35bc","#b163da"],
    count = 0,
    rotateDegree  = 101,
    generateText = (value)=>{
        for (let i of rotationValues) {
            if (value >= i.minVal && value <= i.maxVal) {
                text.innerHTML = `The Value Is ${i.value}`
                spinBtn.disabled = false
                break;
            }
            
        }
    },
    myChart = new Chart(wheel,{
        plugins:[ChartDataLabels],
        type:"pie",
       data :{
        
        labels:[1,2,3,4,5,6],
        datasets :[{
            data : data,
            backgroundColor :backgroundColor
        }   ]
       },
        options : {
            // maintainAspectRatio : true, 
           responsive : true,
           animation : {duration : 0},
           plugins :{
            tooltip : false,
            legend :{
                display : false
            },
            datalabels :{
            color : "#ffffff",
            formatter : (_,context)=> {return context.chart.data.labels[context.dataIndex]},
            font : {size : 20},
        } }
        },
           
    });
    spinBtn.disabled = false

spinBtn.addEventListener('click',()=>{
    spinBtn.disabled = true
    text.innerHTML = `<p>Good Luck </p>`
    randomRotationDegree = Math.floor(Math.random()*(355-0+1)+0)
    console.log(randomRotationDegree)
    let intervalValue = setInterval(() => {
        myChart.options.rotation += rotateDegree 
        
        myChart.update()
        

       if (myChart.options.rotation >= 360) {
        count += 1
        rotateDegree -=5
        myChart.options.rotation = 0
        console.log(myChart.options.rotation)
       }else if (count > 15 && myChart.options.rotation == randomRotationDegree ) {
        console.log(myChart.options.rotation)
        generateText(myChart.options.rotation)
        clearInterval(intervalValue)
        rotateDegree = 101
        count = 0
        console.log("Ok")
        
        
       }
    }, 10);
    console.log("HI")
})
    // chart pie?
   
//  chart pie?؟؟؟




