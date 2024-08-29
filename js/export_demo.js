let config = {
    env: 'qa',
};

export const getConfig = () => {
    return config;
};

export const setConfig = (newConfig) => {
    config = newConfig;
};
