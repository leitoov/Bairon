Vue.component('card-component', {
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
        buttonText: {
            type: String,
            default: 'Principal'
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    template: `
    <div :style="{ backgroundColor: color }" class="card">
        <div class="card-content">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <ui-button class="beige">{{ buttonText }}</ui-button>
        </div>
        <div class="card-img">
            <img src="./images/cardImg1.svg" :alt="imageUrl">
        </div>
    </div>
    `,
    mounted() {
        this.logImageUrl();
    },
    methods: {
        logImageUrl() {
            console.log('imageUrl:', this.imageUrl);
        }
    }
});
