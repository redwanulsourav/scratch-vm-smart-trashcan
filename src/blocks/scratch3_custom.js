class Scratch3CustomBlocks {
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
            custom_block: this.custom_block
        };
    }

    custom_block(args, utils) {
        console.log('Custom block message');
    }
}

module.exports = Scratch3CustomBlocks;
