const loadAi = async()=>{
    const res =await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const aiTools = data.data.tools 
    displayAi(aiTools)
}

const displayAi =(aiTools)=>{
    console.log(aiTools[0])
    const aiContainer =document.getElementById('ai-container')
    aiTools.forEach(tool => {
        const aiCard = document.createElement('div')
        aiCard.classList=`card bg-base-100 w-96 shadow-xl mx-auto py-5 px-4 border` 
        aiCard.innerHTML=`
        <figure>
            <img src="${tool.image}"/>
        </figure>
        <div class="card-body px-3 py-5">
            <h2 class="card-title">Features</h2>
            <p>${tool?.features[0] || ''}</p>
            <p>${tool?.features[1] || ''}</p>
            <p>${tool?.features[2] || ''}</p>
            <div class="h-[1px] w-full bg-gray-300 mx-auto mt-3"></div>
            <div class="flex justify-between items-center">
                <div class="">
                    <h2 class="text-3xl font-bold my-4">${tool.name}</h2>
                    <div class="flex gap-3">
                        <img src="img/victor.jpg.png"/>
                        <p>${tool.published_in}</p>
                    </div>
                </div>
                <img onclick="handleShowDetails('${tool.id}') ;my_modal_5.showModal()" class="h-7" src="img/Frame.jpg"/>
            </div>
        </div>
        `      
        aiContainer.appendChild(aiCard)
    });
}
// 
loadAi()
const handleShowDetails =async (id)=>{
    console.log(id)
    const res =await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const newTool =await res.json();
    // console.log(newTool)
    showDetails(newTool)
}

const showDetails=(newTool)=>{
    console.log(newTool)
    const showDetailsContainer = document.getElementById('show-details-container');
    showDetailsContainer.innerHTML=`
    <div class="bg-red-50 border-red-400 border p-2 rounded-3xl">
                <h4 class="text-xl p-2">${newTool.data.description}.
                </h4>
                <div class="flex gap-3 justify-around p-2">
                    <div class="w-24 text-center p-2 bg-white rounded-2xl  text-green-500 font-semibold"><p>${newTool.data.pricing[0].price}</p>
                    <p>${newTool.data.pricing[0].plan}</p></div>

                    <div class="w-24 text-center p-2 bg-white rounded-md text-orange-400 font-semibold"><p>${newTool.data.pricing[1].price}</p>
                    <p>${newTool.data.pricing[1].plan}</p></div>

                    <div class="w-24 text-center p-2 bg-white rounded-md text-red-600 font-semibold"><p>${newTool.data.pricing[2].price}</p>
                    </div>
                </div>
                <div class="flex justify-around my-4">
                    <h1 class="text-2xl font-bold ">Features</h1>
                    <h1 class="text-2xl font-bold ">Integrations</h1>
                </div>
                <div class="flex justify-around">
                    <ul class="customize">
                        <li>${newTool.data.features['1']['feature_name']}</li>
                        <li>${newTool.data.features['2']['feature_name']}</li>
                        <li>${newTool.data.features['3']['feature_name']}</li>
                    </ul>
                    <ul class="customize">
                        <li>FB Messenger</li>
                        <li>Slack</li>
                        <li>Telegram</li>
                    </ul>
                </div>

            </div>
            <div class="">
                <img src="${newTool.data.image_link[0]}" class="w-9/12 rounded-md mx-auto"/>
                <p class="mx-auto text-xl font-semibold my-5 text-center">${newTool.data.input_output_examples[0].input}</p>
                <p class="mx-auto my-5 text-center">${newTool.data.input_output_examples[0].output}</p>
            </div>
        </div> 
    `
    console.log(newTool.data.features)
}

//my_modal_5.showModal()