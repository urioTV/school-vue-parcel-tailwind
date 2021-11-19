<template>
    <div>
        <div id="Reddit-Image" class="flex w-auto justify-center"></div>
        <input type="text" class="flex mx-auto" v-model="subName" placeholder="Paste a Subreddit name here!" />
        <button @click="getImage" class="rounded bg-red-500 hover:bg-red-700 mx-auto py-2 px-4 flex">Get Image</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data() {
        return {
            subName: '',
            image: ''
        }
    },
    methods: {
        getImage() {
            console.log(this.subName)
            if(document.body.contains(document.getElementById('subImage'))) {
                document.getElementById('subImage').remove()
                //this.image = ''
            }
            this.image = axios.get(`http://0.0.0.0:2137/reddit/${this.subName}`).data
            // .then(res => {
            //     this.image = res.data
            //     })
            // .catch(err => {e => console.log(err)})
            console.log(this.image)
            if(this.image === '') this.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FC398ly2Pekg%2Fmaxresdefault.jpg&f=1&nofb=1'
            var img = document.createElement('img')
            img.src = this.image
            img.id = "subImage"
            var div = document.getElementById('Reddit-Image')
            div.appendChild(img)
        }
    }
}
</script>