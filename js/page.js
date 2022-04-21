

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return{
            inputNote:[
                {title : 'Note Tracker', note: 'Make a note tracker using Vuejs and Vuetify. Additional functions being ability to delete and sort the notes.'},
                {title : 'Polling Bot', note: 'Make a website using chart.js that polls all the individual alphabets'},
                {title : 'Movie Lister', note: 'Make a website using OMDB API utlizing get and allowing to search and favourite movies'},
                {title : 'Infuriating Forms', note: 'Make forms that are...infuriating to fill. Inspired from r/baduibattles'},
                {title : 'Bug Tracker', note: 'Self Explanatory'},
                {title : 'Mini Raytracing Field', note: 'Make a small canvas to simulate raytracing. For more details watch The Coding Train'},      
                {title : 'Portfolio', note: 'Make a website showcasing your graphic design work and web dev work'}
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
