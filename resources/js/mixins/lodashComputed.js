/** able to use lodash func inside vue template */

export default {
    computed: {
        /*  short form
        
        _:()=>_, 

        */
        _ : function() {
            return _ ;
        },
    }
 }