new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return{
            inputNote:[
                {title : 'title 1', note: 'note 1note 1note 1note 1note 1note 1note 1note 1note 1note 1note 1note 1note 1note 1note 1'},
                {title : 'title 2', note: 'note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2note 2'},
                {title : 'title 3', note: 'note 3note 3note 3note 3note 3note 3note 3note 3note 3note 3note 3note 3note 3note 3'},
                {title : 'title 4', note: 'note 4note 4note 4note 4note 4note 4note 4note 4note 4note 4note 4note 4note 4note 4note 4note 4'},
                {title : 'title 5', note: 'note 5note 5note 5note 5note 5note 5note 5note 5note 5note 5note 5'},
                {title : 'title 6', note: 'note 6note 6note 6note 6note 6note 6note 6note 6note 6'},
                {title : 'title 7', note: 'note 7note 7note 7note 7note 7note 7note 7note 7'},
                {title : 'title 8', note: 'note 8note 8note 8note 8note 8note 8note 8note 8note 8note 8'},
                {title : 'title 9', note: 'note 9note 9note 9note 9note 9note 9note 9note 9note 9note 9note 9note 9'}
            ]
        }
    },
    methods:{
        submit: function () {
            this.inputNote.push({title: this.title ,note: this.note});
        },
        del: function (index) {
            this.inputNote.splice(index,1);
        }
        
    },

    computed: {
        sortIt: function() {
            function compare(a, b) {
              if (a.title < b.title)
                return -1;
              if (a.title > b.title)
                return 1;
              return 0;
            }
            return this.inputNote.sort(compare);
        }
      }


})
