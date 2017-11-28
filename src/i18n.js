let makeReplacements = (translation, replace) => {
    if (typeof translation !== 'string' && replace) {
        return translation;
    }

    return translation.replace(/:\w+/g, function (all) {
        return replace[all] || all;
    });
}

export default {

    methods: {

        trans(key, replace) {
            try {
                let translation = key.split('.').reduce(function (a, b) {
                    return typeof a === 'object' ? a[b] : window.App.i18n[a][b];
                });

                if (typeof translation === 'undefined') {
                    return '<!>' + key;
                }

                return !replace ? translation : makeReplacements(translation, replace);
            } catch (error) {
                // do nothing
            }

            return '<!>' + key;
        },
    }

}
