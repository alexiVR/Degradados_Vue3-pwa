const app = Vue.createApp({
    data: () => ({
        title:"Degradados",
        fcolor:"#40ef12",
        scolor:"#683243",
        orientacion: 1
    }),
    computed:{
        setColor(){
            if (this.orientacion == 1){
                return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor})`;
            }
            else if(this.orientacion == 2){
                return `background: linear-gradient(to left, ${this.fcolor}, ${this.scolor})`;
            }
            else if(this.orientacion == 3){
                return `background: linear-gradient(to top, ${this.fcolor}, ${this.scolor})`;
            }
            else{
                return `background: linear-gradient(to bottom, ${this.fcolor}, ${this.scolor})`;
            }
        }
    }
})