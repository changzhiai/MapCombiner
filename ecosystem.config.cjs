module.exports = {
    apps: [
        {
            name: 'map-combiner',
            script: 'npm',
            args: 'run preview -- --port 3003 --host',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
