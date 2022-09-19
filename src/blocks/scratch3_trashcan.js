const axios = require('axios')

class Scratch3TrashcanBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
    getPrimitives () {
        return {
            trashcan_move_forward: this.trashcan_move_forward,
            trashcan_move_backward: this.trashcan_move_backward,
            trashcan_rotate_cw: this.trashcan_rotate_cw,
            trashcan_rotate_ccw: this.trashcan_rotate_ccw
        };
    }

    trashcan_move_forward(args, utils) {
        console.log('Trashcan move forward');
        axios
            .get('http://0.0.0.0:8701/trashcan/move_forward')
            .then(res => {
                console.log(`statusCode: ${res.status}`);
            })
            .catch(error => {
                console.log(error);
            });
    }

    trashcan_move_backward(args, utils) {
        console.log('Trashcan move backward');
        axios
            .get('http://0.0.0.0:8701/trashcan/move_backward')
            .then(res => {
                console.log(`statusCode: ${res.status}`);
            })
            .catch(error => {
                console.log(error);
            });
    }

    trashcan_rotate_cw(args, utils) {
        console.log('Trashcan rotate clockwise');
        axios
            .get('http://0.0.0.0:8701/trashcan/rotate_cw')
            .then(res => {
                console.log(`statusCode: ${res.status}`);
            })
            .catch(error => {
                console.log(error);
            });
    }

    trashcan_rotate_ccw(args, utils) {
        console.log('Trashcan rotate counter clockwise');
        axios
            .get('http://0.0.0.0:8701/trashcan/rotate_ccw')
            .then(res => {
                console.log(`statusCode: ${res.status}`);
            })
            .catch(error => {
                console.log(error);
            });
    }
}




module.exports = Scratch3TrashcanBlocks;
