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
            <button>{{ buttonText }}</button>
        </div>
        <div class="card-img">
            <img :src="{imageUrl}" alt="Card Image">
        </div>
    </div>
    `
});
