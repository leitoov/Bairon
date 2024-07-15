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
        <div class="card-container">
            <div class="card">
                <div>
                    <h1>{{ title }}</h1>
                    <p>{{ content }}</p>
                    <button>{{ buttonText }}</button>
                </div>
                <div>
                    <img :src="imageUrl" alt="Imagen">
                </div>
            </div>
        </div>
    `
});
