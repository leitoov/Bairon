Vue.component('banner-component',{
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    template:`
        <div class="banner">
            <div class="banner-logo">
            </div>
            <div class="titleContainer">
                <h1>{{title}}</h1>
                <p>{{content}}</p>
            </div>
            <div class="banner-img-container">   
                <div class="banner-img">
                </div>

                <div class="banner-img">
                </div>

                <div class="banner-img">
                </div>
            </div>
            <button></button>
        </div>
    `
})