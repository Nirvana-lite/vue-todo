Vue.use(VueMaterial.default);
new Vue({
    el: "#app",
    data: function () {
        return {
            newCard: null,
            cards: [],
            change: [],
        };
    },
    computed: {

    },
    methods: {
        addCard: function () {
            if (!this.newCard) {
                return;
            }
            this.cards.push({
                'text': this.newCard,
                'done': false,
                'tag': ''
            });
            this.newCard = '';
            this.saveCard();
        },
        saveCard: function () {
            var savecard = JSON.stringify(this.cards);
            localStorage.setItem('todo', savecard);
        },
        delCard: function (e) {
            this.cards.splice(e, 1);
            this.saveCard();
        }
    },
    mounted() {
        if (localStorage.getItem('todo')) {
            try {
                this.cards = JSON.parse(localStorage.getItem('todo'));
            } catch (e) {
                localStorage.removeItem('todo');
            }
        }
    }

});