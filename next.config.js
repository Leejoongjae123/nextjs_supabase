/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    // domains: ['freepeopleimage.s3.ap-northeast-2.amazonaws.com/', 'localhost','*']
    remotePatterns: [
      {
         protocol: "https",
         hostname: "freepeopleimage.s3.ap-northeast-2.amazonaws.com",
         port: "",
         pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
     },
     {
      protocol: "https",
      hostname: "wpcdjihluvirgbyqussd.supabase.co",
      port: "",
      pathname: "/**",
   },
   ],    
  }
}

module.exports = nextConfig
