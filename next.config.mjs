import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"fakestoreapi.com"
            }
        ]
    }
};


export default nextConfig;
