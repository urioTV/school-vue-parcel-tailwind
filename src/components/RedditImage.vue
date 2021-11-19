<template>
    <div>
        <div id="Reddit-Image" class="flex w-auto h-auto justify-center mx-auto rounded"></div>
        <input type="text" class="flex mx-auto bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600" v-model="subName" placeholder="Dankmemes" />
        <button @click="getImage" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-10 border-b-4 border-red-700 hover:border-red-500 rounded mx-auto flex justify-center my-6">Get Image</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data() {
        return {
            subName: '',
        }
    },
    methods: {
        getImage() {
            console.log(this.subName)
            axios.get(`http://0.0.0.0:2137/reddit/${this.subName}`)
            .then(res => {
                if(document.body.contains(document.getElementById('subImage'))) {
                document.getElementById('subImage').remove()
                //this.image = ''
                }
                console.log(res.data)
                if(res.data === '') res.data = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FC398ly2Pekg%2Fmaxresdefault.jpg&f=1&nofb=1'
                var img = document.createElement('img')
                img.src = res.data
                img.id = "subImage"
                var div = document.getElementById('Reddit-Image')
                div.appendChild(img)
                })
            
        }
    }
}
</script>