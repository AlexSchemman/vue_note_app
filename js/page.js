

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
            ],
            sortBy : 'title',
            sortDirection : 'asc',
            title: '',
            note: '',

        }
    },
    methods:{
        submit: function () {
            this.inputNote.push({title: this.title ,note: this.note});
        },
        del: function (index) {
            this.inputNote.splice(index,1);
        },

        sort: function(s){
            if(s === this.sortBy) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            }
            this.sortBy = s;
        },

        sortedNotes: function(){
            return this.inputNote.sort((n1,n2) => {
                let modifier = 1;
                if(this.sortDirection === 'desc') {modifier = -1;}

                if(n1[this.sortBy] < n2[this.sortBy]) {return -1 * modifier;} 
                if(n1[this.sortBy] > n2[this.sortBy]) {return 1 * modifier;}
                return 0;
            });
        }
        
    },

    computed: {
        
    }

})
