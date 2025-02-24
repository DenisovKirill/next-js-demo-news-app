import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    webpack(config) {
        config.resolve.alias['@'] = resolve(__dirname);
        return config;
    },
};

export default nextConfig;