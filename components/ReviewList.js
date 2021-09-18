app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars and
            <p v-if=review.recommend>would recommend it</p>
            <p v-else>would not recommend it</p>
            <br/>"{{ review.review }}"
        </li>
    </ul>
    </div>
    `
})