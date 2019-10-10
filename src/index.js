module.exports = function check(str, config) {
    let array = str.split(''),
        was_cut = false;

    console.log(array);

    while(array.length !== 0) {
        was_cut = false;

        for (let bracket_pair in config) {
            if (config.hasOwnProperty(bracket_pair)) {

                console.log(config[bracket_pair]);

                for (let i = 0; i < array.length - 1; i++) {
                    if (array[i] === config[bracket_pair][0] && array[i + 1] === config[bracket_pair][1]) {
                        array.splice(i, 2);
                        i--;
                        was_cut = true;
                    }
                }

            }
        }

        if (was_cut === false)
            return false;
    }

    return true;
};
